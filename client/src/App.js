import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { geolocated } from "react-geolocated"

import Home from "./Home"
import Camera from "./Camera"

import "./App.css"

class App extends Component {
  render () {
    return (
      <div className="App">
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
