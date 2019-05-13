import React, {Component} from 'react';
import JoanneHallArt from '../../../static/assets/images/joanneHallArt.png';
import DevFries from '../../../static/assets/images/dev-fries.png';
import Pong from '../../../static/assets/images/pong.png';
import BookIndex from '../../../static/assets/images/BookIndex.png';

export default function(){
    return(
        <div id="projects">
            <h1 >Projects</h1>
            <hr />
            <div className="project-items">
                <a href='https://joanne-hall-art.herokuapp.com/' >
                    {/* <div className="link-items"> */}
                        <div className='background-image' style={{backgroundImage: 'url(' + JoanneHallArt + ')'}}>
                    
                        </div>
                        <div className="text-wrapper">
                            <h2>Joanne Hall Art</h2>
                            <p>This website was created for a local artist, She wanted somewhere to show off past works of art plus pieces she was currently working on. I created this site in React and SCSS and a backend in Python and Flask.  I built several features for this site including; CRUD, Login and email.</p>
                        </div>
                    {/* </div> */}
                </a>
                <a href='https://li-book-index.herokuapp.com/' >
                    <div className="background-image" style={{backgroundImage: 'url(' + BookIndex + ')'}}>
                        
                    </div>
                    <div className="text-wrapper">
                        <h2>Book Index</h2>
                        <p>This was a project I built to practice my RESTful API's. It has full CRUD capabilities connecting to a python backend I built.  Go ahead and add your favorite book, I'm always looking for new things to read.</p>
                    </div>
                </a>
                
                <a href='https://dev-fries.herokuapp.com/' >
                    <div className="background-image" style={{backgroundImage: 'url(' + DevFries + ')'}}>
                        
                    </div>
                    <div className="text-wrapper">
                        <h2>DevCamp Fries</h2>
                        <p>A group collaboration of a mock-up restaurant.  This site was created in HTML and CSS implementing skills such as Flexbox and Grid.</p>
                    </div>
                </a>
                <a href='https://javascript-pong-game.herokuapp.com/' >
                    <div className="background-image" style={{backgroundImage: 'url(' + Pong + ')'}}>
                        
                    </div>
                    <div className="text-wrapper">
                        <h2>Javascript Pong Game</h2>
                        <p>This project was super fun to build. It is a simple pong game built entirely in HTML and Javascript. It was a small coding exersise that I had a great time doing.</p>
                    </div>
                </a>
            </div>
        </div>
    )
}