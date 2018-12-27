import React from "react"

const Header = () => {
  return (
    <React.Fragment>
      <img className="logo" src="/favicon.png" alt="Bike Lane Logo" />
      <h1 className="header">
        <a className="twitter" href="https://twitter.com/bikelanesWTF">
          bikelanes.wtf
        </a>
      </h1>
    </React.Fragment>
  )
}

export default Header
