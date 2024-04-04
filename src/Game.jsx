import React from "react";
import "./Game.css"
import { useNavigate } from "react-router-dom";
const {useState} = React;
function NumberTaker(props) {
  return(
    <div>
    <img className="sImg" src="/mental.jpeg"></img>
    <h3>- UpliftMe -</h3> <br/>
      <h2>Welcome to MindfulMaze.</h2>
      <h4>Think you're smart? Try to guess 3 numbers correctly in one minute🤓</h4> <br/>
      <form onSubmit={props.onSubmit}>
        <label>
          Enter Your Guess:
          <input type='number' placeholder="Enter a Number from 0 to 10" name='number' /><br/>
        </label>
        <button className="createBtn" type='submit'>Check</button>
      </form>
    </div>
  )
}

function Game() {
    function refreshPage() {
        window.location.reload(false);
      }

  const randomNumber = Math.floor(Math.random()*10);  
  const [number, setNumber] = useState(null);
  function submitHandler(e) {
    e.preventDefault();
    setNumber(e.currentTarget.number.value)
  }
  if (number == null) {
    return <NumberTaker onSubmit={submitHandler} />
  }else if (number > 10 && number < 0) {
    return (
        <div>
    <h2>❌Wrong!❌</h2>
        <h3>Please enter a number within the specified range..
        </h3>
        <button onClick={refreshPage}>▶️ TRY AGAIN...</button>
    </div>
    )
  }  else if(number == randomNumber){
    return (
        <div>
        <h2>🥳✅Correct!!!!!!!!!!!!!!✅🥳</h2>
        <h3>🥳Your guessed number is: {number}, and the random
            generated number is: {randomNumber}🥳
        </h3>
        <button onClick={refreshPage}>▶️ PLAY AGAIN...</button>
        </div> 
      )
  } else {
    return (
        <div>
        <h2>❌Wrong!❌</h2>
            <h3>Your guessed number is: {number}, and the random
                generated number is: {randomNumber}
            </h3>
            <button onClick={refreshPage}>▶️ TRY AGAIN...</button>
    
        </div>
        
      )
  }
}



export default Game;

