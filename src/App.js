import React from "react";
import "./App.css";
import logo from "./assets/Logo.png";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Qly logo" />
      <h1>Registration Form</h1>
      <Form />
    </div>
  );
}

export default App;
