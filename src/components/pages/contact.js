import React, {Component} from 'react';

export default class Contact extends Component{
    constructor(){
        super()

        this.state={
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.clearContactForm = this.clearContactForm.bind(this);
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault()
       fetch(`https://ld-porfolio-api.herokuapp.com/email`, {
           method: 'POST',
           headers: {
               'Content-Type': "application/json"
           },
           body: JSON.stringify({name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message})
       })
        .then(response => {return response.json();})
        .then(responseData => {console.log(responseData)})
        .catch(error => {
            console.log('handlesubmit error' + error)
        })
        this.clearContactForm()
    }

    clearContactForm(){
        this.setState({
            
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    render(){
        return(
            <div id="contact">
                <div className="contact-form">
                    <h1>HIRE ME!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-elements">
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </label>
                        </div>
                        <div className="form-elements">
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </label>
                        </div>
                        <div className="form-elements">
                            <label>
                                Subject:
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    onChange={this.handleChange}
                                    value={this.state.subject}
                                />
                            </label>
                        </div>
                        <div className="form-elements">
                            <label>
                                Message:
                                <textarea
                                    type="text"
                                    name="message"
                                    placeholder="Your Message"
                                    onChange={this.handleChange}
                                    value={this.state.message}
                                />
                            </label>
                        </div>
                    </form>
                    <button className="btn" type="send" onClick={e => this.handleSubmit(e)} value="Submit">Send</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/lillian-dixon-3a619417b/">linkedin</a>
                        <a href="https://github.com/LillianDixon">Github</a>
                    </div>
                    {/* <h1>PLEASE!</h1> */}
                </div>
            </div>
            
        )

    }
}