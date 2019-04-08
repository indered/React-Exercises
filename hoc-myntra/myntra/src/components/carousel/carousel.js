import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import ImagesJson from "../../images.json";
import { Image } from "./style";

export default class HomeCarousel extends Component {
  render() {
    const images = ImagesJson["carousel-images"];

    return (
      <Carousel interval={2000} controls={false}>
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <Image src={img} alt={`Carousel image ${i + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
