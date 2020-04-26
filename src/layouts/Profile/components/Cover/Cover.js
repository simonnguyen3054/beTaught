import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { image1, image2, image3 } from "../../../../assets";
import "./style.scss";

const Cover = () => {
  const highlights = [
    {
      url: image1,
    },
    { url: image2 },
    {
      url: image3,
    },
  ];
  return (
    <div className="highlights">
      {highlights.map((image, i) => {
        return <img key={i} src={image.url} className="highlights-image"/>;
      })}
    </div>
  );
};

export default Cover;
