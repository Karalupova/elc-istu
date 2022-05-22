import React from "react";
import {NavLink} from "react-router-dom";
import s from './Headeradmin.module.css';

const Header = () => {
    return (
        <div className={s.headerstyle}>
            <div className={s.itemtitle}> Панерь администратора </div>
            <div><NavLink to="/" activeClassName={s.active}>Перейти на сайт</NavLink> </div>
            <div><NavLink to="/centre" activeClassName={s.active}> Выйти </NavLink> </div>
        </div>)
}

export default Header;