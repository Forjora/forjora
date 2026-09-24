import axios from "axios";
import "../styles/signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    // const URL = import.meta.env.API_URL;


    const register = (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {
            console.log("Password didn't match");
            return;
        }

        const response = axios.post(`https://forjora.onrender.com/auth/register`, 
            {
                name,
                email,
                password,
                username,
            }
        );
        console.log(response.data);
        navigate("/login");
    }

    return (
        <div className="signup-main">

            <div className="signup-container">

                <div className="signup-heading">
                    <h1>Create an account</h1>
                    <p>
                        Join Forjora and start building amazing things together.
                    </p>
                </div>

                <form className="signup-form" onSubmit={register}>

                    <div className="signup-field">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="signup-field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="signup-field">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Choose a username"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="signup-field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="signup-field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}

                        />
                    </div>

                    <button
                        type="submit"
                        className="signup-submit-btn"
                    >
                        Create Account
                    </button>

                </form>

                <div className="signup-login">
                    <p>
                        Already have an account?
                        
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Signup;