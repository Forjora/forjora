import teampanel from "../images/undraw_team_mmq0.svg";
import {
    MdEmail,
    MdLock,
    MdVisibility,
    MdVisibilityOff
} from "react-icons/md";
import { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [ShowPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const verify = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://forjora.onrender.com/auth/login",
                {
                    username,
                    password
                },
                {
                    withCredentials: true
                }
            );

            console.log(response.status);
            console.log(response.data);

            if (response.status === 200) {
                navigate("/dashboard");
            }

        } catch (error) {
            console.log(error.response?.status);
            console.log(error.response?.data);
        }
    };

    return (
        <div className="login-main">
            <div className="login-container">

                <div className="login-first-sec">
                    <h1 className="Footer-main">
                        Forjora
                    </h1>

                    <div className="login-first-sec-desc">
                        <h2 className="footer-welcome">
                            Welcome back!
                        </h2>

                        <p className="footer-desc">
                            Log in to your forjora account and continue
                            building, collaborating and creating together.
                        </p>

                        <img
                            className="teampanelimg"
                            src={teampanel}
                            alt="Team panel illustration"
                        />
                    </div>
                </div>

                <div className="login-second-sec">

                    <div className="forjora-2-first">
                        <h1 className="main-login-heading">
                            Log in to Forjora
                        </h1>

                        <p>
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form
                        className="login-form"
                        onSubmit={verify}
                    >

                        <label className="footer-Email">
                            Email or Username
                        </label>

                        <div className="login-conatiner-footer">

                            <MdEmail className="email-icon" />

                            <input
                                type="text"
                                className="Email-box"
                                required
                                placeholder="you@example.com"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                            />

                        </div>

                        <label className="footer-Password">
                            Password
                        </label>

                        <div className="login-password-container">

                            <MdLock className="lock-icon" />

                            <input
                                className="Password-box"
                                required
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                type={
                                    ShowPassword
                                        ? "text"
                                        : "password"
                                }
                            />

                            {ShowPassword ? (
                                <MdVisibilityOff
                                    className="eye-icon"
                                    onClick={() =>
                                        setShowPassword(!ShowPassword)
                                    }
                                />
                            ) : (
                                <MdVisibility
                                    className="eye-icon"
                                    onClick={() =>
                                        setShowPassword(!ShowPassword)
                                    }
                                />
                            )}

                        </div>

                        <div className="forgot-password">
                            <Link to="/forgot-password">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="footer-login"
                        >
                            Login
                        </button>

                        <div className="button-divider">
                            <span></span>
                            <p>or</p>
                            <span></span>
                        </div>

                        <button
                            type="button"
                            className="footer-github"
                        >
                            Continue With Github
                            <span>
                                <i className="fa-brands fa-github"></i>
                            </span>
                        </button>

                        <div className="footer-last">
                            <p className="footer-final">
                                Don't have an account?
                                <Link to="/signup">
                                    sign up
                                </Link>
                            </p>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;