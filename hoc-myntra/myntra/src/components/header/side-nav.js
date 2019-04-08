import React from "react";
import { ProfileIcon, Bag, SecNav, WishlistIcon } from "./styles";

const SideNav = () => {
  return (
    <SecNav>
      <li>
        <ProfileIcon />
        Profile
      </li>
      <li>
        <WishlistIcon />
        Wishlist
      </li>
      <li>
        <Bag />
        Bag
      </li>
    </SecNav>
  );
};
export default SideNav;
