import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
const Navbar =()=>{
    const navigate = useNavigate();
    const handlelogin=(e) =>{
    e.preventDefault();
    navigate("/login")
    }
    const handlesignup=(e) =>{
    e.preventDefault();
    navigate("/signup")
    }
 return(
    <nav className="navbar">
    <div className="logo-folder">
        <span src="favicon-32x32" alt="Forjora Logo"></span>
        <span className="name">Forjora</span>
    </div>
    <div className="navlinks">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#working">How it works</a>
        <a href="#About">About us</a>
    </div>
    <div className="nav-actions">
        <button className="login-btn" onClick={handlelogin}
        >Login</button>
        <button onClick={handlesignup} className="signup-btn">Signup</button>
    </div>
    </nav>
 )
}
export default Navbar;