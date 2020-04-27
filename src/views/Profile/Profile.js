import React from "react";
import { phone, email, instagram } from "../../assets/icons";
import "./style.scss";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
} from "../../assets/images";
import Masonry from "react-masonry-component";

function Profile() {
  const images = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image9,
    },
    { url: image8 },
    {
      url: image6,
    },
    {
      url: image3,
    },
    {
      url: image7,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
    {
      url: image10,
    },
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image9,
    },
    { url: image8 },
    {
      url: image6,
    },
    {
      url: image3,
    },
    {
      url: image7,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
    {
      url: image10,
    },
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image9,
    },
    { url: image8 },
    {
      url: image6,
    },
    {
      url: image3,
    },
    {
      url: image7,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
    {
      url: image10,
    },
  ];
  return (
    <div>
      <div className="contact">
        <div className="contact-icons">
          <img src={phone} alt="phone" />
        </div>
        <div className="contact-divider" />
        <div className="contact-icons">
          <img src={email} alt="email" />
        </div>
        <div className="contact-divider" />
        <div className="contact-icons">
          <img src={instagram} alt="instagram" />
        </div>
      </div>

      <Masonry>
        {images.map((image, i) => (
          <img key={i} className="grid" src={image.url} />
        ))}
      </Masonry>
    </div>
  );
}

export default Profile;
