import React from "react";
import s from './Footer.module.css';

const Footer = () => {
    return <div className={s.footerstyle}>
        <div> © 2014-2022 Центр электронного обучения ИРНИТУ. </div>
        <a href="#">↑ Наверх</a>
        <a href="mailto:support@el.istu.edu">support@el.istu.edu</a>
    </div>
}

export default Footer;