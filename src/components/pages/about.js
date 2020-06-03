import React, { Component } from 'react';

import MyPhoto from "../../../static/assets/images/myPhoto.jpg"

let images = [
    // 'https://s2.gifyu.com/images/DancingWees.gif',
    // 'https://s3.amazonaws.com/ldixon-2019/WeeScoots.gif',
];

// let randomImage = images[Math.floor(Math.random() * images.length)]

export default class About extends Component {
    render() {
        return(
            <div id="about" >
                <div className="about-text">
                    <div className="heading">
                        <h1>About Me</h1>
                    </div>
                    <div className='photo'>
                        <img src={MyPhoto} />
                    </div>
                    <p>I am currently working as the computer coding instructor for the coding program at Dawson Community College. I teach full-stack web development and I probably learn just as much as the students, every day I am trying to improve myself and learn more.</p>

                    <p>I come from a very large family and was taught at an early age to work hard. I am a person who keeps busy and always has several projects going on. I get along with almost everyone and make friends easily.</p>

                    <p>I can make the best sourdough bread you've ever had and can sing an opera aria that will make you cry (you'll have to find out if it's from how good or bad I am). I love a good pun and can quote Disney movies all day. I've never met an ice cream flavor I didn't like. </p>
                </div>
            </div>
        )
    }
}