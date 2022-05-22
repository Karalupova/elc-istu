import Headeradmin from "../Headeradmin/Headeradmin";
import s from "../News/News.module.css";
import React from "react";

const Adminnews = () => {
    return (
        <div>
          <Headeradmin />
            <div className={s.navigation} >
                <div className={s.item}>  <form>
                    <input type="text" placeholder="Введите запрос"  />
                    <button type="submit">Поиск</button>

                </form></div>
                <div></div>
                <div className={s.item}>   <button type="submit">Добавить новость</button> </div>
        </div>
        </div>
    );
}

export default Adminnews;
