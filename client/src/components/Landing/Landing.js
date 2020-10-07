import React from 'react'
import "./Landing.css"

function Landing() {
    return (
        <div className="landing">
           <div className="pl-logo">
               <img src={require("../../images/logo.png")} id="logo" alt="logo"/>
           </div>
        </div>
    )
}



export default Landing

