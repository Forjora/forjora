import "../../styles/ForgotPassword.css";
import {Link} from "react-router-dom"
import {useState} from "react"

const ForgotPassword=()=>{
    const[email,setemail]=useState("");
    const[message,setmessage]=useState("");
    const handleSubmit=(e)=>{
    e.preventDefault();
    setmessage("Reset link requested");
    console.log(`Reset link requested for Email: ${email}`);
}
 return(
    
    <div className="forgot-main">
    <div className="forgotpassword-container">
        <div>
        <h1>Forgot Password</h1>
        <p>Enter your email address and we will send you a link</p>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="youxyz@gmail.com" required
            onChange={(e)=>setemail(e.target.value)}></input>
            <button className="Send-Request-Btn">Send Reset Link</button>
        </form>
    {message && (
    <div className="Request-Message">
        <p className="Success-Message">{message}</p>
    </div>
    )}
        <div className="Back-to-login">
            <Link to="/login">
            <p>← Back to Login</p>
            </Link>
        </div>
    </div>
    </div>
 )
}
export default ForgotPassword;