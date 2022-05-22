import React from "react";
import s from "./login.module.css";






const Login = () => {
    return <div className={s.login} >
Введите логин и пароль для авторизации:
        <form>
            <input type="text" placeholder="Логин"  />
            <input type="text" placeholder="Пароль" />
            <button type="submit">Авторизоваться</button>

        </form>
    </div>
}

export default Login;