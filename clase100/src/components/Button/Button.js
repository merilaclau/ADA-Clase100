import React from 'react';
import './Button.scss';

const Button = ({onClick}) => {
  return (
    <button type="button" className="random-img-btn" onClick={onClick}>{'🐱 MIAU 🐱'}</button>
  );
}

export default Button;
