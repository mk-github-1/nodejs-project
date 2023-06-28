import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginPartial from "./components/shared/LoginPartial";
import LoginUser from "./pages/LoginUser/LoginUser";
import LoginUserEdit from "./pages/LoginUser/loginUserEdit";

function App() {
    return (
        <div className="App d-flex flex-column overflow-hidden" style={{ background: "#f8f9fa", height: "100vh" }}>
            <Router>
                {/* Header & Menu */}
                <header>
                    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="./">
                                React × Nest.js sample application
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                                <ul className="navbar-nav flex-grow-1">
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark" to="Index">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark" to="Privacy">
                                            Privacy
                                        </Link>
                                    </li>
                                </ul>
                                {/* ヘッダの右上にLoginPartialコンポーネントを注入 */}
                                <div className="right-corner">
                                    <LoginPartial />
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                {/* Contents */}
                <div className="container flex-grow-1 d-flex flex-column">
                    <main role="main" className="pb-3 flex-grow-1">
                        <div className="text-start">
                            <nav>
                                <Link to="/">Homeへ画面遷移</Link>　|　
                                <Link to="/login-user">LoginUserへ画面遷移</Link>　|　
                                <Link to="/login-user-edit">LoginUserEditへ画面遷移</Link>
                            </nav>
                        </div>

                        <Routes>
                            <Route path="/login-user" element={<LoginUser />} />
                            <Route path="/login-user-edit" element={<LoginUserEdit />} />
                        </Routes>
                    </main>
                </div>

                {/* Footer */}
                <footer className="border-top footer text-muted">
                    <div className="container">
                        &copy; 2023 - React × Nest.js sample application {" ( "} Edit <code>src/App.tsx</code> and save to reload.{" "}
                        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                            Learn React
                        </a>
                        {" ) "}
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </footer>
            </Router>
        </div>
    );
}

export default App;
