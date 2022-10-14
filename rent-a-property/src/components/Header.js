import React from 'react';
import "./Header.css";
import { MdFavoriteBorder  } from "react-icons/md"
import { FavouriteState } from '../context/Context';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const {
        state:{favourite}
    } = FavouriteState();

  return (
    <div className='header'>
        <div className='menu-section'>
            <div className='logo'><h5>Rent A Property</h5></div>
            <div className='menu'>
            <NavLink exact activeClassName="active" className={"menuItem"} to="/"  ><p>Rent</p></NavLink>
            <NavLink activeClassName="active" className={"menuItem"} to="noLink"  ><p>Buy</p></NavLink>
            <NavLink activeClassName="active" className={"menuItem"} to="noLink"  ><p>Sell</p></NavLink>
            <NavLink activeClassName="active" className={"menuItem"} to="noLink"  ><p>Manage Property</p></NavLink>
            <NavLink activeClassName="active" className={"menuItem"} to="/favourite" ><p>Favourite</p></NavLink>
            </div>
        </div>
        <div className='login-section'>
            <button id="login-button">Login</button>
            <button id="register-button">Register</button>
            <Link to="/favourite"><div><MdFavoriteBorder /><sub>{favourite.length}</sub></div></Link>

        </div>
    </div>
  )
}

export default Header