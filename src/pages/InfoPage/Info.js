import OrderAdd from "../OrdersAddPage/OrderAdd";
import StartPage from './../../pages/StartPage/StartPage';
import "./style.css"
import Carusel from "../../components/Carusel/Carusel";


const Info = () => {
    return ( 
        <div className="base">
            <StartPage />
            <div className="content" id="infoSection">
                <h1 className="exhead">
                    Я — Егор, мастер лазерного станка.<br />
                    <span className="exh2">
                        Мои работы уже осчастливили десятки людей и запечатлели дорогие воспоминания и эмоции в сувенирах.
                    </span>
                </h1>
                <div className="blocks">
                    <div className="block">
                        Я работаю с небольшими заказами по всей России. 
                        Для вашего комфорта доступны пункты выдачи Ozon, Яндекс, Wildberries и Авито. 
                        Трепетное отношение к качеству, широкий выбор форм и материалов, качественная упаковка — это то, за что меня выбирают!
                    </div>
                    <div className="block bl1">
                        Хочешь увидеть свой дизайн на брелке?<br />
                        Подарить подруге уникальный скетчбук или альбом?<br />
                        Нет сувениров по вашим любимым произведениям?<br />
                        Хотите памятную вещь для друга, сослуживца или другого близкого? ВЫ ПО АДРЕССУ!<br />
                    </div>
                </div>
            <Carusel />
            <section id="orderSection">
            <OrderAdd />
            </section>
            </div>
        </div>

     );
}
 
export default Info;