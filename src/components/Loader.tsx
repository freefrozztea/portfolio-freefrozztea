import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader-container'>
      <span className='loader-text'>Cargando </span>
      <span className="loader"></span>
    </div>
  );
}

export default Loader;