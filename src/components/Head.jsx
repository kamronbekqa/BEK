import React from 'react'
import "./Head.css";

function Head() {
    return (
      <>
        <header>
          <div className="container">
            <div className="header-wrapper">
              <div className="header-left">
                <h1>Exclusive</h1>
              </div>
              <div className="header-main">
                <h3>Home</h3>
                <h3>Contact</h3>
                <h3>About</h3>
                <h3>Sign Up</h3>
              </div>
              <div className="header-right">
                <input type="text" placeholder="What are you looking for?" />
              </div>
            </div>
          </div>
        </header>
      </>
    );
}

export default Head
