import React from "react";
import s from './Start.module.css';

const Start = () => {
    return <div className={s.start}>
        <div> <h2> C чего начать</h2></div>
        <div className={s.wrapper} >

    <div className={s.number}> 1</div>
    <div>  Получите данные для входа <br/>
        Для преподавателей. <br/>
        Для получения логина и пароля для входа на сайт электронного образования обратитесь в ауд. Б-112 к руководителю
        Центра электронного обучения Лукьянову Никите Дмитриевичу, тел. 40-56-16. <br/>
        Для студентов. <br/>
        Воспользуйтесь  <a href="#"> инструкцией </a>.
    </div>


                <div> Войдите в систему <br/>
                    Перейдите на сайт электронного обучения el.istu.edu и введите полученные на
                    предыдущем шаге логин и пароль. <br/>
                    После чего Вам станут доступны курс, демонстрирующий возможности системы и обучающий курс, а также
                    возможность создавать собственные электронные курсы.
                </div>
                <div className={s.number}> 2</div>


                <div className={s.number}> 3</div>
                <div> Остались вопросы? <br/>
                    Ищите ответы в справке (el.istu.edu/help) или задайте Ваш вопрос в техподдержку: support@el.istu.edu
                </div>


        </div>
    </div>
}

export default Start;