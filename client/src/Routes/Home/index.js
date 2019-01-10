import React from "react"
import { Link } from "react-router-dom"

import BrowserWarning from "./BrowserWarning"

export const Home = () => {
  return (
    <div className="home">
      <h1 className="header">
        <a className="twitter" href="https://twitter.com/bikelanesWTF">
          bikelanes.wtf
        </a>
      </h1>

      <p className="description">
        This app reports obstructions in bicycle lanes. Take a picture and we'll
        post it along with your current location.
      </p>

      <p className="description">
        When prompted, you will need to allow this website to access your
        current location and turn on your camera.
      </p>

      <BrowserWarning />

      <Link to="/camera" className="button">
        Report Obstruction
      </Link>
    </div>
  )
}

export default Home
