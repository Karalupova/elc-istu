import React from "react";
import s from "./Centre.module.css";
import Header from "../Header/Header";

const Centre = () => {
    return <div>
        <Header />
        <div className={s.itemtitle}><div className={s.title}>О центре</div>
        <div>Назначение Центра электронного обучения - реализация политики ИРНИТУ в области электронного обучения и
            дистанционных образовательных технологий.
        </div> </div>
        <div className={s.titles}>Сотрудники  </div>
        <div className={s.centre}>
            <div> </div>
            <div className={s.item}>
                <div className={s.post}>Руководитель центра</div>
                <div className={s.name}>Лукьянов Никита Дмитриевич</div>
                <div>lukyanovnd@istu.edu</div>
                <div> ауд. Б-112, тел. 40-56-16</div>
            </div>
            <div className={s.item}>
                <div className={s.post}>Специалист по учебно-методической работе</div>
                <div className={s.name}>Попова Ирина Константиновна</div>
                <div>ауд. Б-116, тел. 40-56-52</div>
                <div className={s.tasks}>Основные задачи</div>
                <div className={s.description}>разработка методических указаний по составлению электронных курсов
                    консультации преподавателей по наполнению электронных курсов
                    оказание помощи студентам по освоению системы электронного обучения
                </div>
            </div>
            <div> </div>
            <div className={s.item}>
                <div className={s.post}>Программист</div>
                <div className={s.name}>Алексеев Роман Вячеславович</div>
                <div>raceo187@el.istu.edu</div>
                <div className={s.tasks}>Основные задачи</div>
                <div>ауд. Б-112</div>
                <div className={s.description}>разработка и поддержка сайта электронного обучения ИРНИТУ
                    техническая поддержка пользователей системы
                </div>
            </div>
            <div className={s.item}>
                <div className={s.post}>Программист</div>
                <div className={s.name}>Жошкин Владимир Владимирович</div>
                <div>vj@el.istu.edu</div>
                <div className={s.tasks}>Основные задачи</div>
                <div>ауд. Б-112</div>
                <div className={s.description}>разработка и поддержка сайта электронного обучения ИРНИТУ
                    техническая поддержка пользователей системы
                </div>
            </div>
        </div>
    </div>
}

export default Centre;