import React, { useEffect, useRef } from 'react';
import '../StyleSheets/Carousel.scss'; 

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0; 
      } else {
        carousel.scrollLeft += 1; 
      }
    };

    const interval = setInterval(handleScroll, 15); 

    return () => clearInterval(interval); 
  }, []);

  const images = [
    '/hotjar.png',
    '/hotjar.png',
    '/hotjar.png',
    '/hotjar.png',
    '/hotjar.png',
    '/hotjar.png',
  ];
  return (
    <>
      <div className='carousel-container'>
        <h1 className='carousel-title'>USED BY OVER 50 ENTERPRISES</h1>
        <div className="carousel-image">
          
    <div className="carousel" ref={carouselRef}>
      {images.map((src, index) => (
        <img key={index} src={src} alt="Carousel" className="carousel-img" />
      ))}
    </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
