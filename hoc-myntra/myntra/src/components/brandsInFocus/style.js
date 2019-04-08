import styled from "styled-components";

export const BrandsList = styled.ul`
  margin-top: 40px;
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const Li = styled.li`
  width: 21%;
  height: 270px;
  margin-bottom: 40px;
  cursor: pointer;
  position: relative;
  background: ${props => `url(${props.image}) no-repeat`};
  background-size: cover;

  span {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 110px;
    background: white;
  }

  h4 {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    padding: 10px;
    transform: translateX(-50%);
    font-size: 20px;
    border-bottom: 1px solid #fff;
  }

  h5 {
    position: absolute;
    bottom: 7px;
    width: 80%;
    transform: translateX(-50%);
    left: 50%;
    font-weight: 600;
    text-align: center;
    font-size: 13px;
    letter-spacing: 1px;
  }
`;

export const Heading = styled.h2`
  font-size: 24px;
  width: 60%;
  margin: 60px 0 0 100px;
  text-align: left;
  padding: 0;
  line-height: 0;
  letter-spacing: 2px;
`;
export const P = styled.p`
  font-size: 13px;
  padding: 0;
  line-height: 0;
  width: 60%;
  margin: 25px 0 30px 100px;
  text-align: left;
  letter-spacing: 1px;
`;
