import React, { useState, useEffect } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import ImgContainer from './components/ImgContainer/ImgContainer';
import axios from 'axios';
import Loader from './img/spinner.gif';

const App = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");
      setImage(res.data[0].url);
    }
    catch (err) {
      alert('Error getting image ${err}');
    }
    finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    setTimeout(() => {
      getImages();
    }, 2000); 
  }, []);

  return (
    <div className="content-wrapper">
      <h1>¿Qué gatite sos hoy?</h1>
      <div className="content-wrapper">
        {loading ?
        <img src={Loader} alt="Loading" className="loader"/>
        :
        <ImgContainer src={image} />
        }
    
        <Button onClick={getImages} />
      </div>
    </div>
    
  );
}

export default App;
