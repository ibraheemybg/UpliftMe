import React from "react";
import "./Start.css";
import "./Sign.jsx";
import "./Login.jsx";
import { useNavigate } from "react-router-dom";

function Start(){
    const navigate = useNavigate();

    const navigateToSignUp = () => {
      navigate("/signup");
    };

    const navigateToLogin = () => {
        navigate("/login");
      };

    return (
        <div>
        <img className="jImg" src="./public/mental.jpeg"></img>
            <h2>- UpliftMe -</h2>
            <button onClick={navigateToSignUp} className="new">REGISTER</button> <br/>
            <button onClick={navigateToLogin} className="old">LOGIN</button>
        </div>
    )    
}


export default Start;

