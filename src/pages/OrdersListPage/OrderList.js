import "./style.css";
import { useEffect, useState } from 'react';


const OrderList = () => {
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (e) {
        console.error('Ошибка получения заказов из вашего хранилища', e);
        setOrders([]);
      }
    }
  }, []);
  const handleDelete = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
  };

  return (
    <div className="page">
      <h2>Мои заказы</h2>
      {orders.length === 0 ? (
        <p>Вы пока ничего не заказали :(</p>
      ) : (
        <div className='orderlist'>
          {orders.map((order, index) => (
            <div className="ordercard" key={order.id}>
              <div className='card'>
              <h3>Заказ #{order.date}</h3>
              <div className="ordr">
              <p>Тип изделия: {order.category}</p>
              <p>Размер: {order.size}</p>
              <p>Материал: {order.material}</p>
              <p>Количество: {order.quantity}</p>
              <p>Стоимость: {order.totalCost} ₽</p>
              </div>
              </div>
            <button className="deletebtn" onClick={() => handleDelete(index)}>Удалить из списка</button>
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default OrderList;