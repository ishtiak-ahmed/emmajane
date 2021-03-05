import React from 'react';
// import { Link, Router } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {

    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;