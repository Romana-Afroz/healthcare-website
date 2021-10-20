import React from "react";
import { Carousel } from "react-bootstrap";
import img2 from "../../../images/banner/img2.jpg";
import img3 from "../../../images/banner/img3.jpg";
import img4 from "../../../images/banner/img4.jpg";
import img5 from "../../../images/banner/img5.jpg";

const Banner = () => {
  return (
    <>
      <Carousel fade className="container rounded img-fluid">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
