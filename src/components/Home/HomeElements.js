import styled from "styled-components";
import myImg from "../../images/finish_1.png";
import homeImg from "../../images/homeImg_8.jpg";

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: url(${homeImg});
  width: 100%;
  user-select: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  position: relative;
  & video {
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: -1;
    min-height: 100%;
    background-size: cover;
    object-fit: cover;
    display: none;
  }
`;
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  padding: 0 5%;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    text-align: left;
  }
`;

export const HomeH1 = styled.h1`
  color: yellow;
  font-size: clamp(1.5rem, 4vw, 5rem);
  margin-bottom: clamp(0.1rem, 4vw, 0.5rem);
  margin-top: clamp(0.1rem, 4vw, 0.5rem);
  & > * {
    font-size: clamp(1.5rem, 4vw, 5rem);
    margin-bottom: clamp(0.2rem, 4vw, 0.5rem);
    margin-top: clamp(0.2rem, 4vw, 0.5rem);
  }
`;
export const HomeP = styled.p`
  color: #fff;
  font-size: clamp(1rem, 4vw, 1.7rem);
`;
export const HomeBtn = styled.button`
  border-radius: 50px;
  line-height: 1.5;
  color: ${(props) => (props.yellow ? "yellow" : "cyan")};
  background: ${(props) => (props.yellow ? "transparent" : "transparent")};
  outline: none;
  padding: 0.2rem clamp(0.5rem, 2.5vw, 1rem);
  border: ${(props) =>
    props.yellow ? "yellow dashed 2px" : " cyan dashed 2px"};
  margin-left: ${(props) => (props.yellow ? "0rem" : " 0.5rem")};
  font-family: sans-serif;
  font-weight: bold;
  font-size: clamp(0.5rem, 2.5vw, 1.4rem);
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  & span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: ${(props) => (props.yellow ? "yellow" : "cyan")};
    transform: translateY(150%);
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    border-radius: 50%;
    z-index: -1;
    text-align: center;
  }
  & li {
    color: #fff;
    text-decoration: none;
    list-style-type: none;
    text-transform: capitalize;
  }
  & li:hover {
    color: #000;
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

export const ImgContainer = styled.div`
  bottom: 0;
  width: 60%;
  height: calc(100vh - 30px);
  background: url(${myImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  /* background-color: transparent; */
  z-index: 1;
  position: relative;
  box-sizing: border-box;
  margin-top: 30px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  clip-path: polygon(
    1% 0%,
    99% 1%,
    100% 99%,
    88% 98%,
    90% 97%,
    80% 99%,
    73% 98%,
    73% 98%,
    64% 99%,
    59% 96%,
    56% 98%,
    49% 98%,
    40% 99%,
    34% 97%,
    27% 99%,
    23% 97%,
    19% 99%,
    14% 97%,
    0% 99%
  );
  @media screen and (max-width: 992px) {
    width: 80%;
    height: 80vh;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 50vh;
    margin-bottom: 0;
  }
`;
