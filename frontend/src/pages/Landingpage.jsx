import Navbar from "../components/landing/Navbar.jsx";
import "../styles/landing.css";
import Hero from "../components/landing/Hero.jsx";
import Features from "../components/landing/Features.jsx"
import HowItWorks from "../components/landing/How it works.jsx";
import Action from "../components/landing/Cta.jsx";
import Footer from "../components/landing/Footer.jsx";
import {Link} from "react-router-dom";

const LandingPage=()=>{
    return(
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <Action/>
        <Footer/>
    </div>
    )
}
export default LandingPage;
