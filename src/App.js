import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderAdd from './pages/OrdersAddPage/OrderAdd';
import OrderList from './pages/OrdersListPage/OrderList';
import Info from './pages/InfoPage/Info';
import { Helmet } from 'react-helmet';
import Carusel from './components/Carusel/Carusel';
import StartPage from './pages/StartPage/StartPage';


function App() {
    const servicesRef = useRef(null);

    const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="Заказ уникальных сувениров ОНЛАЙН. Гравировки по вашему дизайну." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Egor CraftMan</title>
      </Helmet>
      <Router>
      <Header scrollToSection={scrollToSection} />
        <Routes>
            <Route path='/OrderAdd' element={<OrderAdd />}></Route>
            <Route path='/OrderList' element={<OrderList />}></Route>
            <Route path='/' element={<Info />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
