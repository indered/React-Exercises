import styled from "styled-components";

const Logo = styled.div`
  background: url("https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png")
    no-repeat -290px -61px;
  width: 50px;
  margin: 20px 0 20px 30px;
  float: left;
  height: 36px;
`;

const Navbar = styled.ul`
  list-style-type: none;
  float: left;
  margin: 10px 0;
  font-size: 14px;
  font-weight: 500;
  margin: 30px 0 20px 0px;

  vertical-align: top;
  & li {
    list-style-type: none;
    display: inline-block;
    margin-right: 30px;
    padding-bottom: 10px;

    &:hover {
      border-bottom: 3px solid #ee5f73;
      cursor: pointer;
    }
  }
`;

const SearchBar = styled.div`
  background: #f5f5f6;
  float: right;
  width: 28%;
  padding: 3px;
  margin: 20px 0 20px 0px;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 10px 0;
  background: #f5f5f6;
  border: none;
  width: 84%;
  outline: none;
`;

const SearchIcon = styled.i`
  font-size: 15px;
  color: #828285;
  margin-right: 20px;
`;

const ProfileIcon = styled.span`
  background: url("https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png")
    no-repeat -603px -117px;
  width: 33px;
  display: block;
  margin: 0 0 7px 15px;
  height: 32px;
`;

const SecNav = styled.ul`
  list-style-type: none;
  float: right;
  margin: 10px 30px 20px 0px;
  display: flex;
  width: 15%;
  font-weight: 500;
  font-size: 20px;
  align-items: flex-start;
  justify-content: space-around;

  & li {
    transform: scale(0.6);
    cursor: pointer;
  }
`;

const WishlistIcon = styled.span`
  background: url("https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png")
    no-repeat -650px -117px;
  display: block;
  width: 24px;
  height: 32px;
  margin: 0 0 7px 20px;
`;

const Bag = styled.span`
  background: url("https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png")
    no-repeat 24.793% 65.73%;
  width: 32px;
  display: block;
  margin: 0 0 7px 0;
  height: 32px;
`;

export {
  SecNav,
  ProfileIcon,
  WishlistIcon,
  SearchIcon,
  SearchBar,
  Logo,
  Navbar,
  Bag,
  Input
};
