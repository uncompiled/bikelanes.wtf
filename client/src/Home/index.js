import React from "react"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <h1>bikelanes.wtf</h1>
      <p>
        This app will report obstructions in bicycle lanes. Take a picture
        and we'll send the picture and your current location to the municipal
        government.
      </p>

      <Link to="/camera">Report Obstruction</Link>
    </div>
  )
}

export default Home
