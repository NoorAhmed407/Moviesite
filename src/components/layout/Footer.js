import React, { Component } from 'react'

export class Footer extends Component {
    
    state = {
        footerText: " Noor uddin Ahmed"
    } 
    render() {
        return (
            <div className="footer bg-dark mt-4">
                <div className="container">
                    <h5 className="text-center p-5 text-white"> Developed By <span className="text-warning"> 
                        {this.state.footerText}</span> through the external API <a href="http://www.omdbapi.com/">OMDB API</a>
                    </h5>
                </div>
            </div>
        )
    }
}

export default Footer;
