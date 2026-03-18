import { useNavigate, NavLink, useLocation, } from "react-router-dom";
import { useEffect } from 'react';
import "./style.css";

const Header = ({ scrollToSection }) => {
  const location = useLocation();
  const navigate = useNavigate(); 

  const handleScrollClick = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection(sectionId);
    }
  };
  useEffect(() => {
    if (location.pathname === '/') {
    }
  }, [location]);

  return (
    <nav className="nav">
      <ul className="navrow">
          <NavLink to="/OrderList" className="point">Мои заказы</NavLink>
          <a href="#about" className="point" onClick={handleScrollClick('infoSection')}>О нас</a>
          <a href="#order" className="point getsm" onClick={handleScrollClick('orderSection')}>
            Заказать
          </a>
    
      </ul>
    </nav>
  );
};

export default Header;