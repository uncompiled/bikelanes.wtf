import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { geolocated } from "react-geolocated"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Header from "./Header"
import Home from "./Routes/Home"
import Camera from "./Routes/Camera"

import "./App.css"

class App extends Component {
  render () {
    return (
      <div className="app">
        <Header />
        <ToastContainer />
        <Router>
          <React.Fragment>
            <Route path="/" exact component={Home} />
            <Route
              path="/camera"
              component={geolocated({
                positionOptions: {
                  enableHighAccuracy: true
                },
                userDecisionTimeout: 5000
              })(Camera)}
            />
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App
