import React from "react";
import "./Professional.css"
import { useNavigate } from "react-router-dom";

function Professional(){
    const navigate = useNavigate();

    const navigateToSignUp = () => {
      navigate("/signup");
    };

    return (
        <div>
        <img className="sImg" src="/mental.jpeg"></img>
        <h3>- UpliftMe -</h3>
        <p>Text a mental health professional now!</p>
        <h6>Don't have an account? <span><a onClick={navigateToSignUp} href="">Sign up now</a></span></h6>
        <a className="profA" href="https://wa.me/2348106179081?text=From%20UpliftMe,%20Hello">Chat with Professional</a>
        </div>
    )    
}


export default Professional;

