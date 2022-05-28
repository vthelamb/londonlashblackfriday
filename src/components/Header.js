import React from 'react'
import logo from './londonlashlogo.jpg';
import image from './Londonlash.jpg';

function Header(){
    return (
        <div>
            <img src={logo} alt="logo" className="logo" />
            <h2>Black Friday 2022</h2>
            <h3>Start preparing for Black Friday sales!</h3>
            <img src={image} alt="image" className="main-image" />
            <br></br>
        </div>
    )
}
export default Header;