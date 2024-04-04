import React from "react";
import Start from "./Start.jsx";
import "./Home.css";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

function Home(){
    const navigate = useNavigate();

    const navigateToStart = () => {
      navigate("/start");
    };

        return (
            
            <div>
                <img className="mImg" src="./public/mental.jpeg"></img>
                <h2>- UpliftMe -</h2>
                <p>Let's help you take charge of your mental health.</p>
                <button onClick={navigateToStart} className="anchor"
                 >Continue</button>
            </div>
        )    
        }


export default Home;

