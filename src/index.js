import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200?grayscale";
source = (
  <div>
    <h1 className="heading"> My favourite food </h1>
    <div>
      <img alt="bacon" src={img} />
      <img
        className="food-img"
        src="https://static.toiimg.com/photo/72975551.cms"
      />
      <img
        className="food-img"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      />
      <img
        className="food-img"
        src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
      />
    </div>
  </div>
);
ReactDOM.render(source, document.getElementById("root"));
