import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
    return (
        <div>
            <div className="navbar-img-container">
                <img src="./img/icon-left-font-monochrome-white.png" alt="logo groupomania"/>
            </div> 
            <div className='navbar-container'>
                <FontAwesomeIcon icon="fa-solid fa-house" />
            </div>
        </div>
    );
};

export default NavBar;