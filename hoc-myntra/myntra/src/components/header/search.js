import React from "react";
import { Input, SearchBar, SearchIcon } from "./styles";
const Search = () => {
  return (
    <SearchBar>
      <SearchIcon className="fas fa-search" />
      <Input placeholder="Search for products, brands and more" />
    </SearchBar>
  );
};
export default Search;
