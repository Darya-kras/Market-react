import { useState, useEffect } from "react";
import "./style.css";

const Carusel = () => {
  const photoIds = [];
  for (let i = 1; i <= 21; i++) photoIds.push(i);

  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [largeImageSrc, setLargeImageSrc] = useState('');

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photoIds.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, [photoIds.length]);

  const handleImageClick = (id) => {
    setLargeImageSrc(`${process.env.PUBLIC_URL}/img/${id}.jpg`);
    setModalOpen(true);
  };

  return (
    <>
    <div className="carousel">
      <div 
        className="slides" 
        style={{
          transform: `translateX(-${current * 12}em)`,
        }}
      >
        {photoIds.map((id) => (
          <div className="slide" key={id}>
            <img
              className="Photocka"
              src={`${process.env.PUBLIC_URL}/img/${id}.jpg`}
              alt={`Фото ${id}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleImageClick(id)}
            />
          </div>
        ))}
      </div>
    </div>
          {modalOpen && (
      <div
        className="BIGPH"
          onClick={() => setModalOpen(false)}
        >
          <img 
            src={largeImageSrc} 
            className="BIGIMG"
            alt="Большое изображение"
          />
        </div>
    )}
    </>
  );
};
export default Carusel;