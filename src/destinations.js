import React from "react";
import { useState, useEffect } from "react";
import { destinations } from "./data";
import Place from "./place";
import "./style.css";

//complete site code [Parent Component of Place.js]

const Destinations = () => {
  const [heading, setHeading] = useState("our tours");
  const [data, setData] = useState(destinations);

  //function to make the things as they were initially set

  const reload = () => {
    window.location.reload(false);
  };

  const remove = (id) => {
    setData(
      data.filter((newData) => {
        return newData.id !== id;
      })
    );
  };

  useEffect(() => {
    if (data.length <= 0) {
      setHeading("no tours left");
    }
  }, [data.length]);

  if (data.length > 0) {
    return (
      <>
        <div className='container'>
          <h2 className='main-heading'>{heading}</h2>
          {data.map((innerData) => {
            innerData.removeItem = remove;
            return (
              <article className='card'>
                <Place key={innerData.id} {...innerData} />
              </article>
            );
          })}
        </div>
      </>
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
