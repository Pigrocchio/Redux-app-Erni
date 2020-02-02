import React from "react";
import "./App.css";
import { Component } from "react";
import Button from "./button/button";
import Counter from "./counter/counter";
import Imagen from "./imagen/imagen";

class App extends Component {
   render() {
    return (
      <div className="App">
        <header className="App-header">
          <Imagen />
          <Counter />
          <Button  />
        </header>
      </div>
    );
  }
}

export default App;
