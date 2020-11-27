import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./style.css"
import { Provider } from "react-redux"
import { createStore } from "redux"

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    default:
      return state
  }
}

const store = createStore(counterReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
