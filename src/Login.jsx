import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { useState } from "react";


function Login(){
    const navigate = useNavigate();

    const navigateToSignUp = () => {
      navigate("/signup");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);  


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          setLoading(false);
          navigate("/dash");
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }

    return (
        <div>
        <img className="sImg" src="./public/mental.jpeg"></img>
        <h3>- UpliftMe -</h3>
        <p>Log in.</p>
        <h6>Don't have an account? <span><a onClick={navigateToSignUp} href="">Sign up now</a></span></h6>
        <form onSubmit={handleSubmit}>
            <input required placeholder="Enter Email Address" type="text" onChange= {(e) => {
              setEmail(e.target.value)
            }}></input> <br/>
            <input required placeholder="Password" type="password" onChange={(e) => {
              setPassword(e.target.value)
            }}></input> <br></br>
            <button disabled={loading} className="createBtn" type="submit">{loading?"Logging in...": "Login"}</button> <br/>
            <a>Reset Password</a>
        </form> 
        </div>
    )    
}


export default Login;

