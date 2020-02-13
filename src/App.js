import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import {  AppBar, Toolbar, } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar style={{ background: "blue" }} position="staic">
          <Toolbar>My Music App</Toolbar>
        </AppBar>
        <Login />
      </div>
    );
  }
}

export default App;