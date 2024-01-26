import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="app">
      <Header title={"Todo Wala"} />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;
