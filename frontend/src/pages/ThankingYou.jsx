 import "../styles/ThankingYou.css"
 import {useNavigate} from "react-router-dom"
const ThankingYou=()=>{
    const navigate=useNavigate();
    const Backtologin=()=>{
    navigate("/");
    }
return(
<div className="Thanking-main">
<div className="ThankingYou-Container">
<h1 className="Shukriya">Thank You 🎉,we'll keep you notified.</h1>
<div className="Home-page-button-container">
<button onClick={Backtologin} className="HomePage-return">Back to HomePage</button>
</div>
</div>
</div>
)
}
export default ThankingYou;