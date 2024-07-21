// src/components/Thumbnail.js
import React from 'react';
import '../App.css';

const Thumbnail = ({ item, isActive }) => {
  return (
    <div className={`thumbnail-item ${isActive ? 'active' : ''}`}>
    <img src={item.image} alt={item.title} />
  </div>
  );
};

export default Thumbnail;