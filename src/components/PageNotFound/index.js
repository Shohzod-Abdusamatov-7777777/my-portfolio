import React from "react";
import { Navbar } from "../Navbar/index";
import gif from "../../images/not2.gif";
import image from "../../images/bgImg.jpg";
import styled from "styled-components";

const Not = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: black;
  width: 100%;
  height: calc(100vh);
  z-index: 200;

  h1 {
    color: red;
    font-size: clamp(1.2rem, 8vw, 4rem);
  }
  h1 span {
    background: url(${image}) center;
    font-size: clamp(2rem, 8vw, 6rem);
    background-clip: text;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-family: "Steelfish Rg", "helvetica neue", helvetica, arial, sans-serif;
    animation: animate_img 3s infinite ease-in-out;
  }

  @keyframes animate_img {
    0% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const PageNotFound = () => {
  return (
    <div style={{ maxHeight: "100vh" }}>
      <Navbar />
      <Not>
        <h1>
          <span>404</span> Page Not Found
        </h1>
        <img src={gif} alt="page not found"></img>
      </Not>
      {/* <Footer /> */}
    </div>
  );
};

export default PageNotFound;
