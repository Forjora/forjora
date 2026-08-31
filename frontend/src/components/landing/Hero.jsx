import heroimg from "../../images/undraw_team-collaboration_phnf.svg"
import {useNavigate} from "react-router-dom"
const Hero=()=>{
    const navigate = useNavigate();
    const Dashboardreturn =(e)=>{
        e.preventDefault();
        navigate("/dashboardlayout")
    }
    return(
        <div className="divison">
            <div className="first-sec">
            <span className="hero-badge">✨ AI Powered Team Matching</span>
            <h1 className="heading">Find the right people.
            <span className="special">Build amazing things together</span></h1>
            <p className="bio">Discover like-minded students, find the right teammates, and turn ideas into reality. Explore projects, research papers, hackathons, and events—all while building meaningful connections and collaborating with people who share your interests and ambitions.</p>
            <div className="buttons">
            <button onClick={Dashboardreturn} className="start-btn">Get started for free <span className="arrow">&#8599;</span> </button>
            <button className="login-button">Login to dashboard</button>
            </div>
            </div>
            <img src={heroimg} className="CollabImg" alt="team-collaboration-img"></img>
        </div>
    )
}
export default Hero;