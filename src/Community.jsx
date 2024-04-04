import React from "react";
import "./Community.css"
import { useNavigate } from "react-router-dom";

function Community(){
    const navigate = useNavigate();

    const navigateToSignUp = () => {
      navigate("/signup");
    };

    return (
        <div>
        <img className="sImg" src="./public/mental.jpeg"></img>
        <h3>- UpliftMe -</h3>
        <p>Join our WhatsApp Community</p>
        <h6>Don't have an account? <span><a onClick={navigateToSignUp} href="">Sign up now</a></span></h6>
        <a className="mainA" href="https://chat.whatsapp.com/BppCfAx41AnBaCXKDvWBiR">Join Community</a>
        </div>
    )    
}


export default Community;

