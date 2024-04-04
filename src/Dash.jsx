import React from "react";
import "./Dash.css";
import { useNavigate } from "react-router-dom";
document.body.style = "background: linear-gradient(135deg, #EA9AF4, #E9AE3A)";

function bored(){
    alert("Hello there, we recommend you Play Game");
};


function sad(){
    alert("Hello there, we recommend you chat with our Bot");
};


function worried(){
    alert("Hello there, we recommend you Talk to Professional");
};


function depressed(){
    alert("Hello there, we recommend you Chat with our Bot");
};



function Dash(){
    const navigate = useNavigate();

    const navigateToCommunity = () => {
      navigate("/community");
    };

    const navigateToProfessional = () => {
        navigate("/professional");
      };

      const navigateToGame = () => {
        navigate("/game");
      };

      const navigateToBot = () => {
        navigate("/bot");
      };


    return (
            <div className="dDiv">
            <img className="dImg" src="./mental.jpeg"></img>
            <h3>- UpliftMe -</h3>
            <p>Welcome</p>
            <h3>How do you feel today?</h3>
            <button onClick={bored} className="fBtn">🥱Bored</button>
            <button onClick={sad} className="fBtn">😥Sad</button>
            <button onClick={worried} className="fBtn">😟Worried</button>
            <button onClick={depressed} className="fBtn">😕Depressed</button> <br/> 
            <button onClick={navigateToGame} className="iBtn"><img className="iImg" src="/game.png"></img></button>
            <button onClick={navigateToBot} className="iBtn"><img className="iImg" src="/chat.png"></img></button>
            <h4>Play Game&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chat with Bot</h4>
            <button onClick={navigateToProfessional} className="iBtn"><img className="iImg" src="/pro.png"></img></button>
            <button onClick={navigateToCommunity} className="iBtn"><img className="iImg" src="/community.jpg"></img></button>
            <h4>Talk to Professional&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join Community</h4>
        </div>
    )
}
export default Dash;