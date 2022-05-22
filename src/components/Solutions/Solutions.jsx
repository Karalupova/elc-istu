import React from "react";
import s from './Solutions.module.css';
import hat from './../../assets/images/icons/hat.svg';
import course from './../../assets/images/icons/course.svg';
import phone from '../../assets/images/icons/phone.svg';


const Solutions = () => {
    return <div>
        <div> <h2> Решения </h2> </div>
        <div className={s.solutions}>
            <div><div> <img src={hat}/></div>
                <div>Электронное обучение</div>
                <div>Для кого: для студентов и преподавателей ИРНИТУ.
                    Что: электронные курсы в дополнение к традиционным лекциям и практикам, олимпиады.</div>
                <div><button> Перейти на el.istu.edu </button></div>
            </div>
            <div><div><img src={course}/></div>
                <div>Открытые курсы</div>
                <div>Для кого: для всех желающих.
                    Что: электронные курсы по самым актуальным темам.</div>
                <div><button> Перейти на open.istu.edu </button></div>
            </div>
            <div><div><img src={phone}/></div>
                <div>Мобильное приложение</div>
                <div>Для кого: для студентов и преподавателей ИРНИТУ.
                    Что: Мобильное приложжение с оффлайн доступом к материалам курсов и моментальными уведомлениями</div>
                <div><button> Подробнее </button></div>
            </div>
        </div>
    </div>
}

export default Solutions;