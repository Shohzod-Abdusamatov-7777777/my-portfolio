import styled from "styled-components";
import myImg from "../../images/myImg.jpg";
export const ContactContainer = styled.div`
  background: #000;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  color: #fff;

  /* map style */
  & .map {
    border: 2px dashed #444;
    padding: 0;
    overflow: hidden;
    height: 100%;
    @media screen and (max-width: 768px) {
      margin-bottom: 1rem;
      height: 50vh;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    @media screen and (max-width: 992px) {
      margin-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  ul li {
    list-style: none;
  }

  ul li a {
    line-height: 100%;
    padding-right: 2px;
    font-weight: bold;
  }
  ul li a .fa {
    position: absolute;
    top: 8px;
    font-size: 20px;
    color: #262626;
    transition: 0.5s;
  }

  ul li a span {
    position: absolute;
    top: 8px;
    left: 30px;
    color: #262626;
    letter-spacing: 1.5px;
    transition: 0.5s;
    font-size: 11px;
    font-weight: bold;
  }

  ul li a {
    text-decoration: none;
    display: absolute;
    display: block;
    width: 100px;
    height: 36px;
    background: #fff;
    text-align: left;
    padding-left: 8px;
    transform: rotate(-30deg) skew(25deg) translate(0, 0);
    transition: 0.5s;
    box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.5);
  }
  ul li a:before {
    content: "";
    position: absolute;
    top: 4px;
    left: -8px;
    height: 100%;
    width: 8px;
    background: #b1b1b1;
    transform: 0.5s;
    transform: rotate(0deg) skewY(-45deg);
  }
  ul li a:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: -4px;
    height: 8px;
    width: 100%;
    background: #b1b1b1;
    transform: 0.5s;
    transform: rotate(0deg) skewX(-45deg);
  }

  ul li a:hover {
    transform: rotate(-30deg) skew(25deg) translate(8px, -6px);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
  }

  ul li:nth-child(1) .fa {
    color: blue;
  }
  ul li:nth-child(2) .fa {
    color: #00aced;
  }
  ul li:nth-child(3) .fa {
    color: red;
  }
  ul li:hover .fa {
    color: #fff;
  }

  ul li:hover span {
    color: #fff;
  }

  ul li:hover:nth-child(1) a {
    background: #3b5998;
  }
  ul li:hover:nth-child(1) a:before {
    background: #365492;
  }
  ul li:hover:nth-child(1) a:after {
    background: #4a69ad;
  }

  ul li:hover:nth-child(2) a {
    background: #00aced;
  }
  ul li:hover:nth-child(2) a:before {
    background: #097aa5;
  }
  ul li:hover:nth-child(2) a:after {
    background: #53b9e0;
  }

  ul li:hover:nth-child(3) a {
    background: #dd4b39;
  }
  ul li:hover:nth-child(3) a:before {
    background: #b33a2b;
  }
  ul li:hover:nth-child(3) a:after {
    background: #e66a5a;
  }
`;

export const ContactTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: clamp(1rem, 4vw, 3rem);
  margin-bottom: 1rem;
  letter-spacing: 4px;
  color: #00a1ff;
`;
export const ContactElements = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-around;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactImg = styled.div`
  background: url(${myImg});
  background-size: cover;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 1rem;
  position: relative;

  @media screen and (max-width: 992px) {
    height: 150px;
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;
export const ContactList = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    flex-direction: column;
  }
  & .contact {
    display: flex;
    text-align: center;
    flex-direction: row;
    @media screen and (max-width: 768px) {
      flex-direction: row;
    }
  }

  & h1 {
    font-size: clamp(1rem, 2vw, 1.2rem);
  }
  & a {
    font-size: clamp(0.8rem, 2vw, 1rem);
    text-decoration: none;
  }
`;
