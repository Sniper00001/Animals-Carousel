// src/components/CarouselItem.js
import React from 'react';
import '../App.css';

const CarouselItem = ({ item}) => {
  return (
    <div className="item">
      <img  className="picture" src={item.image} alt={item.title} />
      <div className="content">
        <div className="author">{item.author}</div>
        <div className="title">{item.title}</div>
        <div className="topic">{item.topic}</div>
        <div className="des">{item.description}</div>
        <div className="buttons">
          <button>SEE MORE</button>
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;