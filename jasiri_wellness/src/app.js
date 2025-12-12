import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
import "./styles.scss";
import { Router, Routes, Route, Link, Navigate, useNavigate, jacSignup, jacLogin, jacLogout, jacIsLoggedIn, jacGetCurrentUser } from "@jac-client/utils";
function Navigation() {
  let isLoggedIn = jacIsLoggedIn();
  let navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    jacLogout();
    navigate("/login");
  }
  if (isLoggedIn) {
    return __jacJsx("nav", {"className": "button-base"}, [__jacJsx("div", {"className": "title"}, [__jacJsx("i", {}, ["Jasiri-Ke Wellness"])]), __jacJsx("div", {"className": "button-link"}, [__jacJsx(Link, {"to": "/jasiri", "className": "button-link"}, ["Home"]), __jacJsx("button", {"onClick": handleLogout, "className": "button-link"}, ["Logout"])])]);
  }
  return __jacJsx("nav", {"className": "button-base"}, [__jacJsx("div", {"className": "title"}, ["Jasiri-Ke Wellness"]), __jacJsx("div", {"className": "button-link"}, [__jacJsx(Link, {"to": "/login", "className": "button-link"}, ["Login"]), __jacJsx(Link, {"to": "/signup", "className": "back-link"}, ["Sign up"])])]);
}
function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please check both username and password.");
      return;
    }
    let success = await jacLogin(username, password);
    if (success) {
      navigate("/jasiri");
    } else {
      setError("Invalid username or password.");
    }
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  let errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {"className": "error-message"}, [error]);
  }
  return __jacJsx("div", {"className": "container"}, [__jacJsx("div", {"className": "card"}, [__jacJsx("h2", {"className": "card-title"}, ["Login"]), __jacJsx("form", {"onSubmit": handleLogin}, [__jacJsx("input", {"type": "text", "value": username, "onChange": handleUsernameChange, "placeholder": "Username", "className": "input-field"}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": handlePasswordChange, "placeholder": "Password", "className": "input-field"}, []), errorDisplay, __jacJsx("button", {"type": "submit", "className": "button-primary"}, ["Login"])]), __jacJsx("p", {"className": "info-text"}, ["No account yet? ", __jacJsx(Link, {"to": "/signup"}, ["Sign up"])])])]);
}
function SignupPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please check both username and password.");
      return;
    }
    let result = await jacSignup(username, password);
    if (result["success"]) {
      navigate("/jasiri");
    } else {
      setError(result["error"] ? result["error"] : "Signup failed. Try a different username/password.");
    }
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  let errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {"className": "error-message"}, [error]);
  }
  return __jacJsx("div", {"className": "container"}, [__jacJsx("div", {"className": "card"}, [__jacJsx("h2", {"className": "card-title"}, ["Sign Up"]), __jacJsx("form", {"onSubmit": handleSignup}, [__jacJsx("input", {"type": "text", "value": username, "onChange": handleUsernameChange, "placeholder": "Username", "className": "input-field"}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": handlePasswordChange, "placeholder": "Password", "className": "input-field"}, []), errorDisplay, __jacJsx("button", {"type": "submit", "className": "button-primary"}, ["Sign Up"])]), __jacJsx("p", {"className": "info-text"}, ["Already have an account? ", __jacJsx(Link, {"to": "/login"}, ["Login here"])])])]);
}
function HomePage() {
  if (jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/jasiri"}, []);
  }
  return __jacJsx(Navigate, {"to": "/login"}, []);
}
function FeaturesPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
  let [moods, setMoods] = useState([]);
  let [input, setInput] = useState("");
  let [moodText, setMoodText] = useState("");
  let [moodOutput, setMoodOutput] = useState("");
  useEffect(() => {
    async function loadMoods() {
      let result = await __jacSpawn("generate_response", "", {});
      setMoods(result.reports ? result.reports : []);
    }
    loadMoods();
  }, []);
  function handleMoodSubmit() {
    !generate_response({text: moodText});
  }
  async function addMood() {
    if (!input.trim()) {
      return;
    }
    let result = await __jacSpawn("generate_response", "", {"text": input.trim()});
    console.log(result);
    result.reports ? setMoodOutput(result.reports[0]) : moods;
    setInput("");
  }
  async function getsupportiveResponse(e) {
    setMoods(e.target.value);
  }
  function addEmoji(emoji) {
    setInput(input + emoji);
  }
  return __jacJsx("div", {"className": "home-page"}, [__jacJsx("header", {"className": "app-header"}, [__jacJsx("h1", {"className": "main-title"}, ["Jasiri-Ke Harmony Space ✨"]), __jacJsx("p", {"className": "sub-title"}, ["Your safe space for mental wellness 💚"])]), __jacJsx("div", {"className": "home-container"}, [__jacJsx("aside", {"className": "sidebar"}, [__jacJsx("h2", {"className": "sidebar-title"}, ["Explore"]), __jacJsx("ul", {"className": "sidebar-list"}, [__jacJsx("li", {"className": "sidebar-item"}, ["🧠 Track your mood daily"]), __jacJsx("li", {"className": "sidebar-item"}, ["📔 Maintain a private journal"]), __jacJsx("li", {"className": "sidebar-item"}, ["💬 Chat with emotional AI"]), __jacJsx("li", {"className": "sidebar-item"}, ["📊 View mood insights over time"]), __jacJsx("li", {"className": "sidebar-item"}, ["🧘 Guided breathing & calm mode"]), __jacJsx("li", {"className": "sidebar-item"}, ["🧾 Personalized Wellness Plans"]), __jacJsx("li", {"className": "sidebar-item"}, ["🫂 Community Support Forums"]), __jacJsx("li", {"className": "sidebar-item"}, ["📚 Professional Resources & Articles"]), __jacJsx("li", {"className": "sidebar-item"}, ["🕰️ 24/7 Chat Support"])])]), __jacJsx("main", {"className": "main-content"}, [__jacJsx("h2", {"className": "panel-title"}, ["Express Your Feelings"]), __jacJsx("p", {}, ["Type your feelings or use emojis below:"]), __jacJsx("div", {"className": "feeling-input"}, [__jacJsx("input", {"type": "text", "value": input, "onChange": e => {
    setInput(e.target.value);
  }, "onKeyPress": e => {
    if (e.key === "Enter") {
      addMood();
    }
  }, "placeholder": "Type your feelings here...", "className": "input-field"}, []), __jacJsx("div", {"className": "emoji-picker"}, [__jacJsx("span", {"className": "emoji-button", "onClick": _ => {
    addEmoji("\ud83d\ude0a");
  }}, ["😊"]), __jacJsx("span", {"className": "emoji-button", "onClick": _ => {
    addEmoji("\ud83d\ude14");
  }}, ["😔"]), __jacJsx("span", {"className": "emoji-button", "onClick": _ => {
    addEmoji("\ud83d\ude21");
  }}, ["😡"]), __jacJsx("span", {"className": "emoji-button", "onClick": _ => {
    addEmoji("\ud83d\ude22");
  }}, ["😢"]), __jacJsx("span", {"className": "emoji-button", "onClick": _ => {
    addEmoji("\ud83d\ude34");
  }}, ["😴"]), __jacJsx("span", {"className": "emoji-button", "onClick": _ => {
    addEmoji("\ud83e\udd17");
  }}, ["🤗"])]), __jacJsx("button", {"className": "btn-primary", "onClick": addMood}, ["Submit"])]), moodOutput && __jacJsx("div", {"className": "result-wrapper"}, [__jacJsx("div", {"className": "result-content output-panel"}, [__jacJsx("div", {"className": "result-header"}, [__jacJsx("span", {"className": "result-icon"}, ["💡"]), __jacJsx("p", {"className": "result-title"}, ["Insights"])]), __jacJsx("div", {"className": "translation-box"}, [__jacJsx("p", {"className": "translation-text"}, [moodOutput])])])])])])]);
}
function app() {
  return __jacJsx(Router, {}, [__jacJsx("div", {"className": "app-container"}, [__jacJsx(Navigation, {}, []), __jacJsx(Routes, {}, [__jacJsx(Route, {"path": "/", "element": __jacJsx(HomePage, {}, [])}, []), __jacJsx(Route, {"path": "/login", "element": __jacJsx(LoginPage, {}, [])}, []), __jacJsx(Route, {"path": "/signup", "element": __jacJsx(SignupPage, {}, [])}, []), __jacJsx(Route, {"path": "/jasiri", "element": __jacJsx(FeaturesPage, {}, [])}, [])])])]);
}
export { FeaturesPage, HomePage, LoginPage, Navigation, SignupPage, app };
