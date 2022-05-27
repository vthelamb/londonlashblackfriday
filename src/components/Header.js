import React from 'react'
import logo from './londonlashlogo.jpg';
import image from './Londonlash.jpg';

function Header(){
    return (
        <div>
            <h1>Black Friday</h1>
            <img src={logo} alt="logo" className="logo" />
            <h3>Start preparing for Black Friday sales!</h3>
            <img src={image} alt="image" className="main-image" />
            <br></br>
            <h3>Subscribe to receive the latest news about our offers!</h3>
        </div>
    )
}
export default Header;