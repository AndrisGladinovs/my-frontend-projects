import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className = {classes.header}>
            <div className='container'>
                <nav className = {classes.nav}>
                    <NavLink className={classes['nav-link']} to="/" activeClassName = {classes.active} exact>Home</NavLink>
                    <NavLink className={classes['nav-link']} to="/products" activeClassName = {classes.active}>Products</NavLink>
                    <NavLink className={classes['nav-link']} to="/add" activeClassName = {classes.active}>Add</NavLink>
                    <NavLink className={classes['nav-link']} to="/cart" activeClassName = {classes.active}>Cart</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;