import "./style.css";

const StartPage = () => {
  return (
    <section className="nachalo" id="nachalo">
        <div className="uplink">
             <a target="blank" href="https://www.avito.ru/user/47ad2edc543199117853db85122ae7dc/profile?src=sharing#login?next=authCallback&authsrc=pubpro_items" className="social">avito</a>
             <a target="blank" href="https://t.me/Egor_Craftman" className="social tg">telegram</a>
             <a target="blank" href="https://vk.com/a_z_i_m_y_t" className="social">vk</a>
        </div>
      <header>
        <img
          className="LogoIMG"
          src="https://egorcraftman.ru/img/Logo3.svg"
          alt="Логотип Egor CraftMan"
        />
        <span className="logotxt">Egor CraftMan</span>
      </header>
      <h1 className="start">СОЗДАЁМ УНИКАЛЬНЫЙ МЕРЧ</h1>
    </section>
  );
};

export default StartPage;