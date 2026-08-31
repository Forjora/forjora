import { useNavigate } from "react-router-dom";
const Footer=()=>{
    const navigate =useNavigate();
    const ThankYou=(e)=>{
    e.preventDefault();
    navigate("/Thank-You");
    } 
    return(
        <div className="footer-big-container">
        <div className="footer-container">
            <div className="footer-1">
            <h3 className="footer-name-heading">Forjora</h3>
            <p className="footer-desc-1">Building teams.Building ideas.<span className="extra">Building the future.</span></p>
            <div className="footer-icons">
                <i className="fa-brands logo-1 fa-twitter"></i>
                <i className="fa-brands logo-1 fa-discord"></i>
                <i className="fa-brands logo-1 fa-instagram"></i>
                <i className="fa-brands logo-1 fa-linkedin-in"></i>
                <i className="fa-brands logo-1 fa-github"></i>
            </div>
            </div>
            <div className="footer-2">
            <h3 className="footer-toppers">Product</h3>
            <a>Features</a>
            <a>How it Works</a>
            <a>Pricing</a>
            <a>Roadmap</a>
            </div>
            <div className="footer-3">
            <h3 className="footer-toppers">Company</h3>
            <a>About Us</a>
            <a>Blog</a>
            <a>Careers</a>
            <a>Contact Us</a>
            </div>
            <div className="footer-4">
            <h3 className="footer-toppers">Contact Us</h3>
            <p className="footer-contact-info"><i className="fa-regular logo-2 fa-envelope"></i>support@forjora.com</p>
            <p className="footer-contact-info"><i className="fa-solid logo-2 fa-headphones"></i>+91  8360526401</p>
            <p className="footer-contact-info"><i className="fa-solid logo-2 fa-location-dot"></i>
             Chandigarh,India</p>
            </div>
            <div className="footer-4">
                <h3 className="footer-toppers">Stay in the loop</h3>
                <p className="footer-desc-2">Get updates on new features,hackathons<span className="extra">and research papers</span></p>
                <form onSubmit={ThankYou} >
                    <input type="email" required placeholder="Enter Your Email" className="email-info"
                    ></input>
                    <button type="submit" className="submit-btn"  aria-label="submit">↗</button>
                </form>
            </div>
        </div>
        <p className="Last-line">2026 Forjora . All rights reserved</p>
        </div>
    )
}
export default Footer;