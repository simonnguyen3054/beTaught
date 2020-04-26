import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { image1, image2, image3, image4, image5, image6, profile } from "../../../../assets";
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
    {
      url: image4,
    },
    { url: image5 },
    {
      url: image6,
    },
  ];
  return (
    <div>
      <div className="highlights">
        {highlights.map((image, i) => {
          return <img key={i} src={image.url} className="highlights-image" />;
        })}
      </div>
      <div className="profile">
        <div className="profile-outer">
          <div className="profile-inner">
            <img src={profile} />
          </div>
        </div>
        <div className="profile-summary">
          <h3>Hailey Steinfield</h3>
          <h4>Nail Technician</h4>
          <h5>@ H.E.R Beauty Lounge</h5>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Cover;
