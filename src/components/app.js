import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Nav from './nav';
import Skills from "./pages/skills";



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Nav />

            <Switch>
              <Route exact path="/"  component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/skills" component={Skills}/>
            </Switch>
          </div>
        </Router>

        {/* <Home />
        <Projects /> 
        <About />
        <Skills />
        <Contact /> */}




      </div>
    );
  }
}