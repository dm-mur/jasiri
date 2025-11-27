# Full Stack Jasiri-Ke Wellness Application
cl import from react {
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

# Backend - nodes
node Mood {
    has text: str;

}

# Backend - walkers
walker create_mood {
    has text: str;

    can create with `root entry {
        new_mood = here ++> Mood(text=self.text);
        report new_mood;
    }
}

walker read_mood {
    can read with `root entry {
        visit [-->(`?Mood)];
    }

    can report_mood with Mood entry {
        report here;
    }
}

walker toggle_mood {
    can toggle with Mood entry {
        here.done = not here.done;
        report here;
    }
}

# Frontend
cl {
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
                Jasiri-Ke Wellness
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
            return <Navigate to="/todos" />;
        }
        return <Navigate to="/login" />;
    }



    def FeaturesPage() -> any {
        if jacIsLoggedIn() {
            return (
                <div className="features-container">
                <h2 className="features-title">
                    Your Space - Jasiri-Ke Harmony Space ✨
                </h2>
                <p className="harmony-subtext">Your safe space for mental wellness 💚</p>

                <ul className="features-list">
                    <li className="features-item">🧠 Track your mood daily</li>
                    <li className="features-item">📔 Maintain a private journal</li>
                    <li className="features-item">💬 Chat with emotional AI</li>
                    <li className="features-item">📊 View mood insights over time</li>
                    <li className="features-item">🧘 Guided breathing & calm mode</li>
                    <li className="features-item">🧾 Personalized Wellness Plans</li>
                    <li className="features-item">🫂 Community Support Forums</li>
                    <li className="features-item">📚 Professional Resources & Articles</li>
                    <li className="features-item">🕰️ 24/7 Chat Support</li>
                </ul>
                <div className="back-link">
                    <a href="/">Back to Home</a>
                </div>
                </div>
            );
        }
        return <Navigate to="/login" />;
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
}
