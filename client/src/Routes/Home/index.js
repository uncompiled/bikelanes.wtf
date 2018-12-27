import React from "react"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="home">
      <p className="description">
        This app reports obstructions in bicycle lanes. Take a picture and
        we'll post it along with your current location.
      </p>

      <Link to="/camera" className="button">
        Report Obstruction
      </Link>
    </div>
  )
}

export default Home
