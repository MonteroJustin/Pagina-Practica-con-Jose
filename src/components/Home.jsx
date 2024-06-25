import React from 'react';
import { Carousel } from 'react-bootstrap';
import blusa1 from '../imagenes/blusa1.png';
import blusa2 from '../imagenes/blusa2.png';
import blusa3 from '../imagenes/blusa3.png';
import blusa4 from '../imagenes/blusa4.png';
import blusa5 from '../imagenes/blusa5.png';
import blusa6 from '../imagenes/blusa6.png';
import blusa7 from '../imagenes/blusa7.png';
import blusa8 from '../imagenes/blusa8.png';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Bienvenido a Mi Tienda</h1>
      <div className="container mt-5">
        <Carousel className="carousel-container">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={blusa1}
              alt="Blusa 1"
            />
            <Carousel.Caption>
              <h3>Blusa 1</h3>
              <p>Descripción de la blusa 1.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={blusa2}
              alt="Blusa 2"
            />
            <Carousel.Caption>
              <h3>Blusa 2</h3>
              <p>Descripción de la blusa 2.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={blusa3}
              alt="Blusa 3"
            />
            <Carousel.Caption>
              <h3>Blusa 3</h3>
              <p>Descripción de la blusa 3.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={blusa4}
              alt="Blusa 4"
            />
            <Carousel.Caption>
              <h3>Blusa 4</h3>
              <p>Descripción de la blusa 4.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={blusa5}
              alt="Blusa 5"
            />
            <Carousel.Caption>
              <h3>Blusa 5</h3>
              <p>Descripción de la blusa 5.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={blusa6}
              alt="Blusa 6"
            />
            <Carousel.Caption>
              <h3>Blusa 6</h3>
              <p>Descripción de la blusa 6.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={blusa7}
              alt="Blusa 7"
            />
            <Carousel.Caption>
              <h3>Blusa 7</h3>
              <p>Descripción de la blusa 7.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={blusa8}
              alt="Blusa 8"
            />
            <Carousel.Caption>
              <h3>Blusa 8</h3>
              <p>Descripción de la blusa 8.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
