import React from "react";
import s from './Opencourses.module.css';
import palette from '../../assets/images/icons/palette.svg';
import past from '../../assets/images/icons/past.svg';
import diamond from '../../assets/images/icons/diamond.svg';



const Opencourses = () => {
    return <div>
        <div> <h2> Массовые открытые онлайн-курсы </h2> </div>
        <div className={s.opencourses}>
            <div>
           <div className={s.item}>
               <img src={diamond}/>
                Камень в дизайне художественных и промышленных изделий</div>
                <div>Автор: Лобацкая Раиса Моисеевна — профессор института недропользования ИРНИТУ, доктор геолого-минералогических наук, зав. Кафедрой геммологии, кавалер Ордена им. Михаила Перхина Международного Фонда К. Фаберже за вклад в развитие ювелирного дела России.
                    Описание: Узнайте о истории применения камня в художественных изделиях и современном дизайне. Познакомьтесь с камнерезными шедеврами от доисторических времен до наших дней и технологиям обработки камня.</div>
                <div><button> Подробнее </button></div> </div>

            <div>
                <div className={s.item}><img src={past}/>
                Прошлое глазами археолога</div>
                <div>Автор: Харинский Артур Викторович — профессор кафедры истории и философии ИРНИТУ, доктор исторических наук, заведующий лабораторией археологии, палеоэкологии и систем жизнедеятельности народов Северной Азии.
                    Описание: Окунитесь в прошлое, побывайте на раскопках и ощутите дух приключений. Вы получите базовые навыки археолога и узнаете много нового о жизни древних людей.</div>
                <div><button> Подробнее </button></div> </div>

           <div>
               <div className={s.item}><img src={palette}/>
                Синтез изобразительных искусств и архитектуры</div>
                <div>Автор: Элоян Сергей Норикович — профессор кафедры архитектурного проектирования ИРНИТУ, Заслуженный художник России.
                    Описание: Познакомьтесь с основными принципами работы художника и дизайнера в архитектурном пространстве Князе-Владимирского храма. Курс знакомит с историей христианской культовой архитектуры и храмовой росписи.</div>
                <div><button> Подробнее </button></div> </div>

        </div>
    </div>
}

export default Opencourses;