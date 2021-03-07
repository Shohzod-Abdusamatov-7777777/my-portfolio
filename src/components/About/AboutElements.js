import styled from "styled-components";
import myImg from "../../images/img_14.png";

export const AboutContainer = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  user-select: none;
  position: relative;
  .svgStyle {
    background: url(${myImg});
  }
`;
export const AboutWrapper = styled.div`
  margin-top: -100px;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 96%;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  @media screen and (max-width: 992px) {
    width: 98%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ImgContainer = styled.div`
  margin-right: 1rem;
  width: 60%;
  height: calc(100vh - 60px);
  background: url(${myImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: transparent;
  z-index: 1;
  @media screen and (max-width: 1100px) {
    width: 50%;
    height: 80vh;
    border-radius: 50px;
  }
  @media screen and (max-width: 992px) {
    width: 40%;
    height: 50vh;
    border-radius: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    height: 50vh;
    display: block;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    height: 50vh;
    display: block;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media screen and (max-width: 992px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    display: block;
    width: 90%;
    height: auto;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    text-align: left;
  }

  & table {
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #888;
    font-weight: 600;
  }
  & table tr {
    line-height: 2.5;
  }
  & table tr td:nth-child(1) {
    font-weight: bold;
    color: #fff;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }
  & table tr td:nth-child(2) {
    font-size: clamp(0.8rem, 2.5vw, 1rem);
  }
  & table tr td a:hover {
    text-decoration: none;
  }

  & h1 {
    color: #fff;
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    margin-top: 1.2rem;
    margin-bottom: 1rem;
  }
  & h1 span {
    color: goldenrod;
  }
`;

export const AboutTitle = styled.h2`
  color: yellow;
  z-index: 1;
  font-size: clamp(1.4rem, 4vw, 3rem);
  margin-bottom: clamp(0.1rem, 4vw, 0.5rem);
  margin-top: clamp(0.1rem, 4vw, 0.5rem);
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const AboutP = styled.p`
  color: #888;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 992px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const AboutBtn = styled.button`
  border-radius: 50px;
  line-height: 1.5;
  color: goldenrod;
  background: transparent;
  outline: none;
  padding: 0.2rem clamp(0.5rem, 2.5vw, 1rem);
  border: 3px solid goldenrod;
  font-family: sans-serif;
  font-weight: bold;
  font-size: clamp(0.5rem, 2.5vw, 1.4rem);
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: auto;
  & a {
    color: #fff;
    text-decoration: none;
  }
  & a:hover {
    color: #000;
  }
  & span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: goldenrod;
    transform: translateY(150%);
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    border-radius: 50%;
    z-index: -1;
    text-align: center;
  }
  &:active {
  }

  &:focus {
    outline: none;
  }
  &:hover {
    color: #000;
    transition: 0.5s;
    font-weight: bold;
  }

  &:hover span {
    transform: translateY(0) scale(2);
  }

  & span:nth-child(1) {
    --n: 1;
  }
  & span:nth-child(2) {
    --n: 2;
  }
  & span:nth-child(3) {
    --n: 3;
  }
  & span:nth-child(4) {
    --n: 4;
  }
`;
