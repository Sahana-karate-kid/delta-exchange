import React, { Component } from "react";
import {  Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/signup/Signup";
import Login from "./Components/login/Login";
import "./App.css"
function App() {
  return (
    
    <nav > 
        <Router >
          <Routes>
            <Route  path="/" element={<Home/>} exact></Route>
            <Route  path="/signup" element={<Signup/>}></Route>
            <Route  path="/login" element={<Login/>}></Route>            
            <Route path="*">Ups</Route>
            </Routes>
        </Router>
         
      </nav>      
     
  );
}

export default App;
