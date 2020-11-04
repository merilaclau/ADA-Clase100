import React from 'react';
import './ImgContainer.scss';

const ImgContainer = ({src}) => {
  return (
    <article className="img-container">
      { src && <img src={src} alt="cat"/> } 
    </article>
  );
}

export default ImgContainer;