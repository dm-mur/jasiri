# Frontend
 import from react {
    useState,
    useEffect
}

cl import ".styles.scss";

cl import from "@jac-client/utils" {
    Router,
    Routes,
    Route,
    Link,
    Navigate,
    useNavigate,
    jacSignup,
    jacLogin,
    jacLogout,
    jacIsLoggedIn,
    jacGetCurrentUser
}




    # Naviogation
    def Navigation() -> any {
        let isLoggedIn = jacIsLoggedIn();
        let navigate = useNavigate();

        def handleLogout(e: any) -> None {
            e.preventDefault();
            jacLogout();
            navigate("/login");
        }

        if isLoggedIn {
            return <nav className="button-base">
            <div
                className="title">
                <i>Jasiri-Ke Wellness</i>
            </div>
            <div className="button-link">
                <Link
                    to="/jasiri"
                    className="button-link"
                >
                    Home
                </Link>
                <button
                    onClick={handleLogout}
                    className="button-link"
                >
                    Logout
                </button>
            </div>
        </nav>; 
        }
        return <nav className="button-base"
        >
        <div
            className="title">
            Jasiri-Ke Wellness
        </div>
        <div className="button-link">
            <Link
                to="/login"
                className="button-link"
            >
                Login
            </Link>
            <Link
                to="/signup"
                className="back-link"
            >
                Sign up
            </Link>
        </div>
    </nav>;

    }

    # Login Page
    def LoginPage() -> any {
        let [username, setUsername] = useState("");
        let [password, setPassword] = useState("");
        let [error, setError] = useState("");
        let navigate = useNavigate();

        async def handleLogin(e: any) -> None {
            e.preventDefault();
            setError("");
            if not username or not password {
                setError("Please check both username and password.");
                return;
            }
            success = await jacLogin(username, password);
            if success {
                navigate("/jasiri");
            } else {
                setError("Invalid username or password.");
            }
        }

        def handleUsernameChange(e: any) -> None {
            setUsername(e.target.value);
        }

        def handlePasswordChange(e: any) -> None {
            setPassword(e.target.value);
        }

        let errorDisplay = None;
        if error {
            errorDisplay = <div 
                className="error-message"
            >
                {error}
            </div>;
        }

        return <div
            className="container"
        >
            <div
                className="card"
            >
                <h2
                className="card-title"
                >
                    Login
                </h2>
                <form
                    onSubmit={handleLogin}
                >
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        className="input-field"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className="input-field"
                    />
                    {errorDisplay}
                    <button
                        type="submit"
                        className="button-primary"
                    >
                        Login
                    </button>
                </form>
                <p 
                    className="info-text"
                >
                    No account yet? 
                    <Link to="/signup">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>;

    }

    # Signup Page
    def SignupPage() -> any {
        let [username, setUsername] = useState("");
        let [password, setPassword] = useState("");
        let [error, setError] = useState("");
        let navigate = useNavigate();

        async def handleSignup(e: any) -> None {
            e.preventDefault();
            setError("");
            if not username or not password {
                setError("Please check both username and password.");
                return;
            }
            result = await jacSignup(username, password);
            if result["success"] { 
                navigate("/jasiri");
            } else {
                setError(result["error"] if result["error"] else "Signup failed. Try a different username/password.");
            }

        }

        def handleUsernameChange(e: any) -> None {
            setUsername(e.target.value);
        }

        def handlePasswordChange(e: any) -> None {
            setPassword(e.target.value);
        }

        let errorDisplay = None;
        if error {
            errorDisplay = <div 
                className="error-message"
            >
                {error}
            </div>;
        }
        return <div
            className="container"
        >
            <div
                className="card"
            >
                <h2
                className="card-title"
                >
                    Sign Up
                </h2>
                <form
                    onSubmit={handleSignup}
                >
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        className="input-field"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className="input-field"
                    />
                    {errorDisplay}
                    <button
                        type="submit"
                        className="button-primary"
                    >
                        Sign Up
                    </button>
                </form>
                <p 
                    className="info-text"
                >
                    Already have an account? 
                    <Link to="/login">
                        Login here
                    </Link>
                </p>
            </div>
        </div>;
    }

    # Home Page
        def HomePage()  -> any {
            if jacIsLoggedIn() {
                return <Navigate to="/jasiri" />;
            }
            return <Navigate to="/login" />;
        }



    def FeaturesPage() {
        #// Check if logged in
        if not jacIsLoggedIn() {
            return <Navigate to="/login" />;
        }

        let [moods, setMoods] = useState([]);
        let [input, setInput] = useState("");
        let [moodText, setMoodText] = useState("");
        let [moodOutput, setMoodOutput] = useState("");
        
        # Load existing mood on mount
        useEffect(
            lambda -> None { async def loadMoods() -> None {
                result = root spawn generate_response(text=input.trim());
                setMoods(result.reports if result.reports else []);
            }
            loadMoods();
        }, []
        );

        def handleMoodSubmit() {
            spawn generate_response(text=moodText);
        }


        # Add mood handler


        async def addMood() -> None {
            if not input.trim() {
                return;
            }
            result = root spawn generate_response(text=input.trim());

            console.log(result);
            
            setMoodOutput(result.reports[0][0]) if result.reports else moods;
            setInput("");
        }

        async def getsupportiveResponse(e:any) -> None {
            setMoods(e.target.value);
            
        }


    return (
        <div className="home-page">
            <header className="app-header">
                <h1 className="main-title">Jasiri-Ke Harmony Space ✨</h1>
                <p className="sub-title">Your safe space for mental wellness 💚</p>
            </header>

            <div className="home-container">
                <aside className="sidebar">
                    <h2 className="sidebar-title">Explore</h2>
                    <ul className="sidebar-list">
                        <li className="sidebar-item">🧠 Track your mood daily</li>
                        <li className="sidebar-item">📔 Maintain a private journal</li>
                        <li className="sidebar-item">💬 Chat with emotional AI</li>
                        <li className="sidebar-item">📊 View mood insights over time</li>
                        <li className="sidebar-item">🧘 Guided breathing & calm mode</li>
                        <li className="sidebar-item">🧾 Personalized Wellness Plans</li>
                        <li className="sidebar-item">🫂 Community Support Forums</li>
                        <li className="sidebar-item">📚 Professional Resources & Articles</li>
                        <li className="sidebar-item">🕰️ 24/7 Chat Support</li>
                    </ul>
                </aside>

                <main className="main-content">
                    <h2 className="panel-title">Express Your Feelings</h2>
                    <p>Type your feelings or use emojis below:</p>

                    <div className="feeling-input">
                        <input
                            type="text"
                            value={input}
                            placeholder="Type your feelings here..."
                            className="input-field"
                            onChange={lambda e: any -> None { setInput(e.target.value); }}
                            onKeyPress={lambda e: any -> None { if e.key == "Enter" { addMood(); } }}
                        />

                    <div className="emoji-picker">
                        <span 
                            className="emoji-button"
                            onClick={lambda _: any -> None { addEmoji("😊"); }}
                        >
                            😊
                        </span>
                        <span 
                            className="emoji-button"
                            onClick={lambda _: any -> None { addEmoji("😔"); }}
                        >
                            😔
                        </span>
                        <span 
                            className="emoji-button"
                            onClick={lambda _: any -> None { addEmoji("😡"); }}
                        >
                            😡
                        </span>
                        <span 
                            className="emoji-button"
                            onClick={lambda _: any -> None { addEmoji("😢"); }}
                        >
                            😢
                        </span>
                        <span 
                            className="emoji-button"
                            onClick={lambda _: any -> None { addEmoji("😴"); }}
                        >
                            😴
                        </span>
                        <span 
                            className="emoji-button"
                            onClick={lambda _: any -> None { addEmoji("🤗"); }}
                        >
                            🤗
                        </span>
                        
                    </div>
                        <button className="btn-primary" onClick={addMood}>Submit</button>
                    </div>
                    # Display AI Insight
                    {moodOutput and (
                        <div className="result-wrapper">
                            <div className="result-content output-panel">
                                <div className="result-header">
                                    <span className="result-icon">💡</span>
                                    <p className="result-title">Insights</p>
                                </div>
                                <div className="translation-box">
                                    <p className="translation-text">{moodOutput}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}


    # Main Application
    def app() -> any {
        return <Router>
            <div 
                className="app-container"
            >
                <Navigation />
                <Routes>
                    <Route 
                        path="/"
                        element={<HomePage />}
                    />
                    <Route 
                        path="/login"
                        element={<LoginPage />}
                    />
                    <Route 
                        path="/signup"
                        element={<SignupPage />}
                    />
                    <Route 
                        path="/jasiri"
                        element={<FeaturesPage />}
                    />
                </Routes>
            </div>
        </Router>; 

    }
