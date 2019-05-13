import React from 'react';

import logo from "../../static/assets/images/logo.svg"


export default function(){
    return(
        <div className="nav-wrapper">
            <img src={logo} className= "logo"></img>

            <div className="nav-btn">
                <label htmlFor="toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div> 

            <input type='checkbox' id="toggle"/>
            
            <div className="nav-right">
                <div className="link">
                    <a href="#home">Home</a>
                </div>
                <div className="link">
                    <a href="#projects">Projects</a>
                </div>
                <div className="link">
                    <a href="#about">About</a>
                </div>
                <div className="link">
                    <a href="#skills">Skills</a>
                </div>
                <div className="link">
                    <a href="#contact">Contact</a>
                </div>


            </div>
            
            
        </div>
    )
}