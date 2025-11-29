function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
import "./styles.scss";
import { Router, Routes, Route, Link, Navigate, useNavigate, jacSignup, jacLogin, jacLogout, jacIsLoggedIn, jacGetCurrentUser } from "@jac-client/utils";
function Navigation() {
  var isLoggedIn = jacIsLoggedIn();
  var navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    jacLogout();
    navigate("/login");
  }
  if (isLoggedIn) {
    return __jacJsx("nav", {
      "className": "button-base"
    }, [__jacJsx("div", {
      "className": "title"
    }, [__jacJsx("i", {}, ["Jasiri-Ke Wellness"])]), __jacJsx("div", {
      "className": "button-link"
    }, [__jacJsx(Link, {
      "to": "/jasiri",
      "className": "button-link"
    }, ["Home"]), __jacJsx("button", {
      "onClick": handleLogout,
      "className": "button-link"
    }, ["Logout"])])]);
  }
  return __jacJsx("nav", {
    "className": "button-base"
  }, [__jacJsx("div", {
    "className": "title"
  }, ["Jasiri-Ke Wellness"]), __jacJsx("div", {
    "className": "button-link"
  }, [__jacJsx(Link, {
    "to": "/login",
    "className": "button-link"
  }, ["Login"]), __jacJsx(Link, {
    "to": "/signup",
    "className": "back-link"
  }, ["Sign up"])])]);
}
function LoginPage() {
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var navigate = useNavigate();
  function handleLogin(_x) {
    return _handleLogin.apply(this, arguments);
  }
  function _handleLogin() {
    _handleLogin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var success;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!username || !password)) {
              _context.n = 1;
              break;
            }
            setError("Please check both username and password.");
            return _context.a(2);
          case 1:
            _context.n = 2;
            return jacLogin(username, password);
          case 2:
            success = _context.v;
            if (success) {
              navigate("/jasiri");
            } else {
              setError("Invalid username or password.");
            }
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _handleLogin.apply(this, arguments);
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  var errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {
      "className": "error-message"
    }, [error]);
  }
  return __jacJsx("div", {
    "className": "container"
  }, [__jacJsx("div", {
    "className": "card"
  }, [__jacJsx("h2", {
    "className": "card-title"
  }, ["Login"]), __jacJsx("form", {
    "onSubmit": handleLogin
  }, [__jacJsx("input", {
    "type": "text",
    "value": username,
    "onChange": handleUsernameChange,
    "placeholder": "Username",
    "className": "input-field"
  }, []), __jacJsx("input", {
    "type": "password",
    "value": password,
    "onChange": handlePasswordChange,
    "placeholder": "Password",
    "className": "input-field"
  }, []), errorDisplay, __jacJsx("button", {
    "type": "submit",
    "className": "button-primary"
  }, ["Login"])]), __jacJsx("p", {
    "className": "info-text"
  }, ["No account yet? ", __jacJsx(Link, {
    "to": "/signup"
  }, ["Sign up"])])])]);
}
function SignupPage() {
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    username = _useState8[0],
    setUsername = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    password = _useState0[0],
    setPassword = _useState0[1];
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    error = _useState10[0],
    setError = _useState10[1];
  var navigate = useNavigate();
  function handleSignup(_x2) {
    return _handleSignup.apply(this, arguments);
  }
  function _handleSignup() {
    _handleSignup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var result;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!username || !password)) {
              _context2.n = 1;
              break;
            }
            setError("Please check both username and password.");
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return jacSignup(username, password);
          case 2:
            result = _context2.v;
            if (result["success"]) {
              navigate("/jasiri");
            } else {
              setError(result["error"] ? result["error"] : "Signup failed. Try a different username/password.");
            }
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return _handleSignup.apply(this, arguments);
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  var errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {
      "className": "error-message"
    }, [error]);
  }
  return __jacJsx("div", {
    "className": "container"
  }, [__jacJsx("div", {
    "className": "card"
  }, [__jacJsx("h2", {
    "className": "card-title"
  }, ["Sign Up"]), __jacJsx("form", {
    "onSubmit": handleSignup
  }, [__jacJsx("input", {
    "type": "text",
    "value": username,
    "onChange": handleUsernameChange,
    "placeholder": "Username",
    "className": "input-field"
  }, []), __jacJsx("input", {
    "type": "password",
    "value": password,
    "onChange": handlePasswordChange,
    "placeholder": "Password",
    "className": "input-field"
  }, []), errorDisplay, __jacJsx("button", {
    "type": "submit",
    "className": "button-primary"
  }, ["Sign Up"])]), __jacJsx("p", {
    "className": "info-text"
  }, ["Already have an account? ", __jacJsx(Link, {
    "to": "/login"
  }, ["Login here"])])])]);
}
function HomePage() {
  if (jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/jasiri"
    }, []);
  }
  return __jacJsx(Navigate, {
    "to": "/login"
  }, []);
}
function FeaturesPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
  return __jacJsx("div", {
    "className": "home-page"
  }, [__jacJsx("header", {
    "className": "app-header"
  }, [__jacJsx("h1", {
    "className": "main-title"
  }, ["Jasiri-Ke Harmony Space ✨"]), __jacJsx("p", {
    "className": "sub-title"
  }, ["Your safe space for mental wellness 💚"])]), __jacJsx("div", {
    "className": "home-container"
  }, [__jacJsx("aside", {
    "className": "sidebar"
  }, [__jacJsx("h2", {
    "className": "sidebar-title"
  }, ["Explore"]), __jacJsx("ul", {
    "className": "features-list"
  }, [__jacJsx("li", {
    "className": "features-item"
  }, ["🧠 Track your mood daily"]), __jacJsx("li", {
    "className": "features-item"
  }, ["📔 Maintain a private journal"]), __jacJsx("li", {
    "className": "features-item"
  }, ["💬 Chat with emotional AI"]), __jacJsx("li", {
    "className": "features-item"
  }, ["📊 View mood insights over time"]), __jacJsx("li", {
    "className": "features-item"
  }, ["🧘 Guided breathing & calm mode"]), __jacJsx("li", {
    "className": "features-item"
  }, ["🧾 Personalized Wellness Plans"]), __jacJsx("li", {
    "className": "features-item"
  }, ["🫂 Community Support Forums"]), __jacJsx("li", {
    "className": "features-item"
  }, ["📚 Professional Resources & Articles"]), __jacJsx("li", {
    "className": "features-item"
  }, ["🕰️ 24/7 Chat Support"])])]), __jacJsx("main", {
    "className": "main-content"
  }, [__jacJsx("h2", {
    "className": "panel-title"
  }, ["Express Your Feelings"]), __jacJsx("p", {}, ["Type, speak, or use emoji to share how you feel:"]), __jacJsx("textarea", {
    "placeholder": "Type your feelings here...",
    "rows": 1,
    "className": "feeling-input"
  }, []), __jacJsx("div", {
    "className": "voice-emoji-buttons"
  }, [__jacJsx("button", {}, ["🎤 Voice"]), __jacJsx("button", {}, ["😊 Emoji"])])])])]);
}
function app() {
  return __jacJsx(Router, {}, [__jacJsx("div", {
    "className": "app-container"
  }, [__jacJsx(Navigation, {}, []), __jacJsx(Routes, {}, [__jacJsx(Route, {
    "path": "/",
    "element": __jacJsx(HomePage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/login",
    "element": __jacJsx(LoginPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/signup",
    "element": __jacJsx(SignupPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/jasiri",
    "element": __jacJsx(FeaturesPage, {}, [])
  }, [])])])]);
}
export { FeaturesPage, HomePage, LoginPage, Navigation, SignupPage, app };