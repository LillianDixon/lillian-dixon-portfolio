import React, { Component } from 'react';

let images = [
    // 'https://s2.gifyu.com/images/DancingWees.gif',
];

let randomImage = images[Math.floor(Math.random() * images.length)]

export default class About extends Component {
    render() {
        return(
            <div id="about" style={{backgroundImage: 'url(' + randomImage + ')'}}>
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>By day I am a Web Developer. By night... I sleep, it's one of my favorite things. I have many varied interest among which are: musical theater, opera, watercolor, knitting, baking, reading everything I can get my hands on, and the occasional Irish step dance. I love learning new things and meeting new people.</p>
                </div>
            </div>
        )
    }
}