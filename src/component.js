import React from "react";
import { useState, useEffect } from "react";
import { destinations } from "./data";
import "./style.css";

const Destinations = () => {
  const [heading, setHeading] = useState("our tours");
  const [data, setData] = useState(destinations);
  const [readbtn, setReadbtn] = useState("Read More");
  const [text, setText] = useState(false);

  //the function for NOT INTERESTED button

  const remove = (id) => {
    setData(
      data.filter((newData) => {
        return newData.id !== id;
      })
    );
  };

  //function to make the things as they were initially set

  const reload = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    if (data.length <= 0) {
      setHeading("no tours left");
    }
  }, [data.length]);

  if (data.length > 0) {
    return (
      <div className='container'>
        <h2 className='main-heading'>{heading}</h2>
        {data.map(
          ({ place, image, title, content, price, id, moreContent }) => {
            return (
              <article key={id} className='card'>
                <img
                  src={image}
                  alt={`scenery from ${place}`}
                  className='image'
                />
                <section className='card-content'>
                  <div className='header'>
                    <h4 className='title'>{title}</h4>
                    <span className='price'>
                      <b>{price}</b>
                    </span>
                  </div>
                  <p className='content'>
                    {content}
                    {text && moreContent}
                  </p>
                  <button
                    className='read-more'
                    onClick={() => {
                      setText(!text);
                      setReadbtn(text ? "Read More" : "Read Less");
                    }}
                  >
                    {readbtn}
                  </button>
                  <button className='btn' onClick={() => remove(id)}>
                    Not Interested
                  </button>
                </section>
              </article>
            );
          }
        )}
      </div>
    );
  } else {
    return (
      <>
        <h1 className='main-heading-2'>{heading}</h1>
        <button className='refresh' onClick={() => reload()}>
          Refresh
        </button>
      </>
    );
  }
};

export default Destinations;
