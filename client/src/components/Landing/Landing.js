import React from 'react'
import "./Landing.css"

function Landing() {
    return (
        <div className="landing">
               <img src={require("../../images/logo.png")} id="logo" alt="logo"/>
           <h1 className="title">Get the latest news of Premier League football</h1>
        </div>
    )
}



export default Landing

