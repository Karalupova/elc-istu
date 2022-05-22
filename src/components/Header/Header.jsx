import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.headerstyle}>
    <div className={s.itemtitle}> Центр электронного обучения ИРНИТУ </div>
        <div><NavLink to="/" activeClassName={s.active}>Главная </NavLink> </div>
        <div><NavLink to="/news" activeClassName={s.active}> Новости </NavLink> </div>
        <div><NavLink to="/documents" activeClassName={s.active}> Документы </NavLink> </div>
        <div><NavLink to="/centre" activeClassName={s.active}> О центре </NavLink> </div>
    </div>)
}

export default Header;