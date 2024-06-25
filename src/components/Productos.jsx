import React from 'react';
import blusaImage from '../imagenes/blusa123.png';

const Productos = () => {
  return (
    <div className="container mt-5">
      <h2>Nuestros Productos</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={blusaImage} className="card-img-top" alt="Blusa" />
            <div className="card-body">
              <h5 className="card-title">Blusa</h5>
              <p className="card-text">Una hermosa blusa para cualquier ocasión.</p>
              <a href="#" className="btn btn-primary">Comprar ahora</a>
            </div>
          </div>
        </div>
        {/* Agrega más productos aquí */}
      </div>
    </div>
  );
};

export default Productos;
