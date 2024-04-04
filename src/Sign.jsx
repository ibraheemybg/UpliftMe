import React from "react";
import "./Sign.css";
import "./Login.jsx";
import "./Terms.jsx";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import {auth} from "./firebase.js";
import { useState } from "react";

function Sign(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();
    const navigateToTerms = () => {
      navigate("/terms");
    };

    const navigateToLogin = () => {
      navigate("/login");
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        await sendEmailVerification(userCredential.user);
        window.location.href="https://mail.google.com";
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    return (
        <div>
        <img className="sImg" src="./public/static/images/mental.jpeg"></img>
        <h3>- UpliftMe -</h3>
        <p>Create your account for free.</p>
        <h6>Already have an account? <span><a onClick={navigateToLogin}>Sign in</a></span></h6>
        <form onSubmit={handleSubmit}>
            <input required value={email} placeholder="Email Address" type="email" onChange= {(e) => {
              setEmail(e.target.value)
            }}></input><br></br>
            <input required value={password} placeholder="Password" type="password" onChange={(e) => {
              setPassword(e.target.value)
            }}></input> <br></br>
            <input required type="checkbox" id="a"></input>
            <label className="agree" for="a">I agree to UpliftMe's <a onClick={navigateToTerms}>terms and conditions.</a></label> <br/>
            <button className="createBtn" disabled={loading} type="submit">{loading?"Creating Account...": "Create Account"}</button>
        </form> 

        </div>
    )    
}


export default Sign;

