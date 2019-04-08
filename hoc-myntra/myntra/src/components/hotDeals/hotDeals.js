import React, { Component } from "react";
import ImagesJson from "../../images";
import { HotDealsList, Li, Caption } from "./style";

export default class HotDeals extends Component {
  render() {
    const images = ImagesJson["deals-card-images"];

    return (
      <HotDealsList>
        {images.map((e, i) => (
          <Li image={e.image}>
            <h4>HOT DEALS</h4>
            <Caption>{e.message}</Caption>
            <h5>+ SHOP NOW</h5>
          </Li>
        ))}
      </HotDealsList>
    );
  }
}
