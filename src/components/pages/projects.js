import React, {Component} from 'react';
import JoanneHallArt from '../../../static/assets/images/joanneHallArt.png';
import DevFries from '../../../static/assets/images/dev-fries.png';
import Pong from '../../../static/assets/images/pong.png';
import BookIndex from '../../../static/assets/images/bookIndex.png';
import starWarsMadLibs from "../../../static/assets/images/star-wars-mad-libs.png"
import reactExersises from "../../../static/assets/images/reactExersises.png"
import AmazonClone from "../../../static/assets/images/amazon-clone.jpg"

export default function(){
    return(
        <div id="projects">
            <div className="heading">
                <h1 >Projects</h1>
            </div>
            <div className="project-items">

                
            <div className='project-item'>
                    <a href='https://clone-de5d1.web.app/' >
                        <div className="background-image" style={{backgroundImage: 'url(' + AmazonClone + ')'}}>
                            
                        </div>
                    </a>
                        <div className="text-wrapper">
                            <a href="https://clone-de5d1.web.app/">
                                <h2>Amazon Clone</h2>
                            </a>
                            <p>My current project is an Amazon clone.  It is built with React.js CSS and has a Firebase backend.  Currently It has full login/sign in functionality. Go ahead and check it out!</p>
                        
                            <a href="https://github.com/LillianDixon/amazon-clone">Check out the code</a>
                        </div>
                </div>

                {/* <div className='project-item'> */}
                {/* <a href='https://joanne-hall-art.herokuapp.com/' > */}
                    {/* <div className="link-items"> */}
                        {/* <div className='background-image' style={{backgroundImage: 'url(' + JoanneHallArt + ')'}}> */}
                    
                        {/* </div> */}
                {/* </a> */}
                        {/* <div className="text-wrapper"> */}
                            {/* <h2>Joanne Hall Art</h2> */}
                            {/* <p>This website was created for a local artist, She wanted somewhere to show off past works of art plus pieces she was currently working on. I created this site in React and SCSS and a backend in Python and Flask.  I built several features for this site including; CRUD, Login and email.</p> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}

                <div className='project-item'>
                    <a href='https://li-book-index.herokuapp.com/' >
                        <div className="background-image" style={{backgroundImage: 'url(' + BookIndex + ')'}}>
                            
                        </div>
                    </a>
                        <div className="text-wrapper">
                            <a href="https://li-book-index.herokuapp.com/">
                                <h2>Book Index</h2>
                            </a>
                            <p>This was a project I built to practice my RESTful API's. It has full CRUD capabilities connecting to a python backend I built.  Go ahead and add your favorite book, I'm always looking for new things to read.</p>
                            
                        <a href="https://www.youtube.com/playlist?list=PLZpl_iok1mPZKE_1UCgtilnY83gCf-Vti">Check out how I made it</a>
                        </div>
                </div>
                
                <div className='project-item'>
                    <a href='https://star-wars-mad-libs-project.herokuapp.com/' >
                        <div className="background-image" style={{backgroundImage: 'url(' + starWarsMadLibs + ')'}}>
                            
                        </div>
                    </a>
                        <div className="text-wrapper">
                            <a href="https://star-wars-mad-libs-project.herokuapp.com/">
                                <h2>Star Wars Mad Libs</h2>
                            </a>
                            <p>This was a super fun project build in Reactjs and Scss.  My sister gave me a Star Wars mad-libs book for christmas and we laughed for hours while playing with it, I wanted to recreate it so others could have as much fun with it.</p>

                            <a href="https://github.com/LillianDixon/mad-libs-project">Check out the code</a>
                            
                        </div>
                </div>
                    
                <div className='project-item'>
                    <a href='https://dev-fries.herokuapp.com/' >
                        <div className="background-image" style={{backgroundImage: 'url(' + DevFries + ')'}}>
                            
                        </div>
                    </a>
                        <div className="text-wrapper">
                            <a href="https://dev-fries.herokuapp.com/">
                                <h2>DevCamp Fries</h2>
                            </a>
                            <p>A group collaboration of a mock-up restaurant.  This site was created in HTML and CSS implementing experience such as Flexbox and Grid.</p>

                            <a href="https://github.com/LillianDixon/dev-fries">Check out the code</a>
                        </div>
                </div>

                <div className='project-item'>
                    <a href='https://codesandbox.io/s/lpw7w8v80m?file=/src/index.js' >
                        <div className="background-image" style={{backgroundImage: 'url(' + reactExersises + ')'}}>
                            
                        </div>
                    </a>
                        <div className="text-wrapper">
                            <a href="https://codesandbox.io/s/lpw7w8v80m?file=/src/index.js">
                                <h2>React Exersises</h2>
                            </a>
                            <p>I built this project while learing react. I found a list of simple projects to build to help learn react and built them for myself. Take a look, they are my really cool react exersises!</p>

                        </div>
                </div>

                <div className='project-item'>
                    <a href='https://javascript-pong-game.herokuapp.com/' >
                        <div className="background-image" style={{backgroundImage: 'url(' + Pong + ')'}}>
                            
                        </div>
                    </a>
                        <div className="text-wrapper">
                            <a href="">
                                <h2>Javascript Pong Game</h2>
                            </a>
                            <p>This project was super fun to build. It is a simple pong game built entirely in HTML and Javascript. It was a small coding exersise that I had a great time doing.</p>
                        </div>
                </div>

            </div>
        </div>
    )
}