import React from "react";
import reactDom from "react-dom";
import SiteContent from "./component";
import { useState, useEffect } from "react";

const Site = () => {
  const [component, setComponent] = useState("Loading...");

  useEffect(() => {
    setTimeout(() => {
      setComponent(<SiteContent />);
    }, 1500);
  }, []);

  let styling = component === "Loading..." ? "loading" : "";

  return <div className={styling}>{component}</div>;
};

reactDom.render(<Site />, document.getElementById("root"));
