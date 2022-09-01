import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel fade controls={false} indicators={false} className="Carousel">
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2040&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
