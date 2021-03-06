import React, { Component } from 'react';
import Bottega from "../../../static/assets/images/Bottega.png";
import HTML from "../../../static/assets/images/HTML.png";
import CSS from "../../../static/assets/images/CSS.png";
import SCSS from "../../../static/assets/images/SCSS.png";
import python from "../../../static/assets/images/python.png";
import javascript from "../../../static/assets/images/javascript.png";
import github from "../../../static/assets/images/github.png";
import react from "../../../static/assets/images/react.png";
import angular from "../../../static/assets/images/angular.png";
import DCC from "../../../static/assets/images/DCC-Logo.png"


export default class experience extends Component {
    render() {
        return (
            <div id="experience">
                <div className="heading">
                    <h1 >Experience</h1>
                </div>
                <div className="bottega">
                    <img src={Bottega} />
                    <img src={DCC}/>
                </div>
                <div className="logos">
                    <img src={HTML} />
                    <img src={CSS} />
                    <img src={SCSS} />
                    <img src={python} />
                    <img src={javascript} />
                    <img src={react} />
                    <img src={github} />
                    {/* <img src={angular} /> */}

                </div>

            </div>
        );
    }
}