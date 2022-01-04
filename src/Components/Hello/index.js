import React, { Component } from 'react';
import "./index.css"
import Image from "./resim.png"
import Arrow from "./arrow.png"
import {
    Link
} from 'react-router-dom';
class Hello extends Component {
    render() {
        return(
            <div className='my-container'>
                <p className="my-title">Hello 👋</p>
                <p className='my-text'>I hope everyone is safe and sound.
                    I designed different type of lending pages,application. it can help others to develop more ideas from this. I keep it simple and minimal. 
                    It can also help you find different options in exploring and improving your skills.

                    I am available for new projects. I hope you show me your support 😄

                    I wish you luck,
                     Drax❤️ </p>
                <img src={Arrow} alt="arr" className='arrow'/>
                <Link to = "/login-page">
                <div className='bottom-container'>
                <button component={Link} to="/LoginPage" className="my-button" type="submit">Buy me a Coffee</button>
                </div>
                </Link>

                <img src= {Image} alt="im" className='image'/>  
            </div>
        )
    }
}

export default Hello;