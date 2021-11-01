import React from "react";
import { useState } from "react";

const Place = ({ image, place, title, price, content, id, removeItem }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <>
      <img src={image} alt={`senery from ${place}`} className='image' />
      <section className='card-content'>
        <div className='header'>
          <h4 className='title'>{title}</h4>
          <span className='price'>
            <b>{price}</b>
          </span>
        </div>
        <p className='content'>
          {showFullDescription ? content : `${content.slice(0, 170)}...`}
        </p>
        <button
          className='content-toggle'
          onClick={() => {
            setShowFullDescription(!showFullDescription);
          }}
        >
          {showFullDescription ? "Hide" : "Show more"}
        </button>
        <button className='btn' onClick={() => removeItem(id)}>
          Not Interested
        </button>
      </section>
    </>
  );
};

export default Place;
