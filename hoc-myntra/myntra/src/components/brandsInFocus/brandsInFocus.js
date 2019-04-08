import React, { Component } from "react";
import ImagesJson from "../../images.json";
import { BrandsList, Heading, P, Li } from "./style";

export default class BrandsInFocus extends Component {
  render() {
    const images = ImagesJson["brands-focus-images"];

    return (
      <section>
        <Heading>BRANDS IN FOCUS</Heading>
        <P>Show some brand love</P>
        <BrandsList>
          {images.map((e, i) => (
            <Li image={e.image}>
              <span>
                <h4>{e["brand-name"]}</h4>
                <h5>{e.message}</h5>
              </span>
            </Li>
          ))}
        </BrandsList>
      </section>
    );
  }
}
