import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <div>Выбрать набор данных:</div>
            <div><NavLink to='/bigdata'>Большой</NavLink></div>
            <div><NavLink to='/smalldata'>Маленький</NavLink></div>
        </div>
    )
}

export default Header;