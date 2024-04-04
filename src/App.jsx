import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import './App.css'
import Home from "./Home";
import Sign from "./Sign";
import Start from "./Start";
import Login from "./Login";
import Dash from "./Dash";
import Terms from './Terms';
import Community from './Community';
import Professional from './Professional';
import Game from './Game';
import Bot from './Bot';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/signup" element={<Sign />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dash" element={<Dash />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/professional" element={<Professional />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/bot" element={<Bot />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
