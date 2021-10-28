import react from "react";
import { useState, useEffect } from "react";
import { destinations } from "./data";

const Destinations = () => {
  const [heading, setHeading] = useState("our tours");
  const [data, setData] = useState(destinations);

  const remove = (id) => {
    setData(
      data.filter((newData) => {
        return newData.id !== id;
      })
    );
  };

  return (
    <article>
      <h1 className='main-heading'>{heading}</h1>
      {data.map(({ place, image, title, content, price, id, moreContent }) => {
        return (
          <section key={id} className='card'>
            <img src={image} alt={`scenery from ${place}`} className='image' />
            <h4 className='title'>{title}</h4>
            <span className='price'>
              <b>{price}</b>
            </span>
            <p className='content'>{content}</p>
            <button className='read-more'>Read more</button>
            <button className='btn' onClick={() => remove(id)}>
              {data.length}
            </button>
          </section>
        );
      })}
    </article>
  );
};

export default Destinations;
