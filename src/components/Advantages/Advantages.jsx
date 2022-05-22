import React from "react";
import s from "./Advantages.module.css";

const Advantages = () => {
    return <div>
        <div className={s.itemtitle}><div className={s.title}>Преимущества электронного образования</div>
           </div>
             <div className={s.body}>
            <div> </div>
            <div className={s.item}>

                <div className={s.name}>Увеличение вовлеченности в процесс</div>
                <div>Использование элементов геймификации, интерактивных возможностей, соревнование и самоконтроль
                    за прохождением курса являются мощными инструментами вовлечения в учебный процесс. </div>

            </div>
            <div className={s.item}>
                <div className={s.name}>Развитие навыков</div>
                <div>Электронное образование позволяет студенту получить навыки командной работы, оценки чужих
                    курсовых и лабораторных работ, самоконтроля. </div>
            </div>
            <div> </div>
            <div className={s.item}>
                <div className={s.name}>Повышение эффективности</div>
                <div>Система электронного образования позволяет автоматизировать многие рутинные процессы и получить
                    даже больше информации об успеваемости чем при традиционном обучении. </div>
            </div>
            <div className={s.item}>
                <div className={s.name}>Престиж</div>
                <div>Наличие электронной версии курса не только удобно для студента и преподавателя, но и показывает
                    Вашу заинтересованность в мировых тенденциях в образовании. </div>
            </div>
        </div>
    </div>
}

export default Advantages;