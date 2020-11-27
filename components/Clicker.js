import React, { Component } from "react"
import { connect } from "react-redux"

const Clicker = ({ clicks, increment }) => {
  return (
    <div id="Clicker-container">
      <h1>You've click this {clicks} times.</h1>
      <p>
        <button onClick={increment}>increment</button>
      </p>
    </div>
  )
}

// read from redux
const mapStateToProps = state => ({ clicks: state + 1 })
// write to redux
const mapDispatchToProps = dispatch => ({ increment: () => dispatch({ type: "INCREMENT" }) })

export default connect(mapStateToProps, mapDispatchToProps)(Clicker)
