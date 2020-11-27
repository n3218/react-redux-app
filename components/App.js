import React, { Component } from "react"
import Clicker from "./Clicker"

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>React Clicker</h1>
        <Clicker />
      </div>
    )
  }
}
