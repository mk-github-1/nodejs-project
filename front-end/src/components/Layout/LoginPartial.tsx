import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LoginPartial = () => {
    const isLogin = true; // ログインの状態に応じてtrueまたはfalseを設定する

    return (
        <>
            <ul className="navbar-nav">
                {/* ログイン済み or 未ログイン */}
                {isLogin ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="">
                                Login user name
                            </Link>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline" action="">
                                <button type="submit" className="nav-link btn btn-link text-dark">
                                    Logout
                                </button>
                            </form>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="">
                                Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="">
                                Login
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </>
    );
};

export default LoginPartial;
