import React from 'react';
import "./Header.css";
import { MdFavoriteBorder  } from "react-icons/md"
import { FavouriteState } from '../context/Context';
import { Link } from 'react-router-dom';

const Header = () => {
    const {
        state:{favourite}
    } = FavouriteState();

  return (
    <div className='header'>
        <div className='menu-section'>
            <div className='logo'><h5>Rent A Property</h5></div>
            <div className='menu'>
                <a href='#'><p>Rent</p></a>
                <a href='#'><p>Buy</p></a>
                <a href='#'><p>Sell</p></a>
                <a href='#'><p>Manage Property</p></a>
                <a href='#'><p>Resources</p></a>
            </div>
        </div>
        <div className='login-section'>
            <button id="login-button">Login</button>
            <button id="register-button">Register</button>
            <div><Link to="./Favourite"><MdFavoriteBorder />{favourite.length}</Link></div>

        </div>
    </div>
  )
}

export default Header