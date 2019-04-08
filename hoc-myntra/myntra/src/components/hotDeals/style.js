import styled from "styled-components";

const HotDealsList = styled.ul`
  margin-top: 40px;
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 0;
  justify-content: space-around;
  list-style-type: none;
`;

export const Li = styled.li`
  width: 20%;
  height: 180px;
  cursor: pointer;
  position: relative;
  background: linear-gradient(to right, #000, transparent),
    ${props => `url(${props.image}) no-repeat`};
  background-size: cover;

  h4 {
    position: absolute;
    color: #fff;
    top: 20px;
    left: 20px;
    font-size: 10px;
    border-bottom: 1px solid #fff;
  }

  h5 {
    position: absolute;
    color: #fff;
    bottom: 20px;
    left: 20px;
    font-weight: 200;
    font-size: 10px;
    letter-spacing: 1px;
  }
`;

export const Caption = styled.h3`
  position: absolute;
  display: inline-block;
  font-size: 20px;
  color: #fff;
  left: 20px;
  width: 60%;
  text-align: left;
  top: 50px;
`;

export { HotDealsList };
