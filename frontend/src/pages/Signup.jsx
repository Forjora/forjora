import "../styles/Signup.css";

const Signup = () => {
    return (
        <div className="signup-main">

            <div className="signup-container">

                <div className="signup-heading">
                    <h1>Create an account</h1>
                    <p>
                        Join Forjora and start building amazing things together.
                    </p>
                </div>

                <form className="signup-form">

                    <div className="signup-field">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Choose a username"
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            required
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