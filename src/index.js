import React from "react";
import reactDom from "react-dom";
import SiteContent from "./component";

const Site = () => {
  return <SiteContent />;
};

reactDom.render(<Site />, document.getElementById("root"));
