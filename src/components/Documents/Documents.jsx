import React from "react";
import s from './Documents.module.css';
import pol18 from './../../assets/documents/pol_18.pdf';
import polebol from './../../assets/documents/pol_el_ob.pdf';
import poljalinga from '../../assets/documents/pol_jalinga.pdf';
import polporad from '../../assets/documents/pol_porad_rachet.pdf';
import Header from "../Header/Header";


const Documents = () => {
    return (
        <div  className={s.documetsstyle}>
            <Header />
            <div className={s.banner}> Документы </div>
    <div>
        <div className={s.group}> Центр электронного обучения </div>

<div  className={s.item }> <a href={pol18}> Положение о Центре электронного обучения </a> </div>
  <div  className={s.item}>     <a href={polebol}> Положение о планировании и реализации образовательных программ с
      применением электронного обучения, дистанционных образовательных технологий </a> </div>
     <div  className={s.item}>  <a href={poljalinga}> Положение о порядке использования Программно-аппаратного
         комплекса «Jalinga Premium» </a> <br/><br/> </div>


    <div className={s.group}> Учет ЭОР в эффективном контракте </div>
<div className={s.item}>   <a href={polporad}> Положение о порядке расчета показателей результативности академической
    деятельности по разработке электронных образовательных ресурсов и электронных тестов по дисциплинам учебных планов ИРНИТУ </a>
    // Приказ №359-О от 30.06.2021 "О введении в действие положения организации"
</div>
        </div> <br/>

        </div>
    )

}

export default Documents;