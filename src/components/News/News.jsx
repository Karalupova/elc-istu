import React from "react";
import s from './News.module.css';
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

const News = () => {
    return <div>
        <Header />
        <Banner />
 <div className={s.navigation} >


     <div> Теги
            mobile
         mooc
         Moodle
         Мероприятия



     </div>
     <div></div>
<div className={s.item}>  <form>
    <input type="text" placeholder="Введите запрос"  />
    <button type="submit">Поиск</button>

</form></div>




 </div>


    </div>
}

export default News;