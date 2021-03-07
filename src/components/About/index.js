import React from "react";
import {
  AboutBtn,
  AboutContainer,
  AboutP,
  AboutTitle,
  AboutWrapper,
  AboutContent,
  ImgContainer,
} from "./AboutElements";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <AboutContainer>
        <svg
          viewBox="0 0 1440 150"
          style={{ position: "absolute", top: 0, zIndex: 0 }}
        >
          <path
            fill="blue"
            fillOpacity="0.8"
            d="M0,128L48,106.7C96,85,192,43,288,53.3C384,64,480,128,576,133.3C672,139,768,85,864,74.7C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <AboutWrapper>
          <ImgContainer></ImgContainer>
          <AboutContent>
            <AboutTitle>𝓐𝓑𝓞𝓤𝓣 𝓜𝓔</AboutTitle>
            <AboutP>
              I am Abdusamatov Shohzod,I was born on October 1 ,2000 year in
              Jizzax region and currently studying at Tashkent University of
              Information Technology. I am frontEnd developer now, but I will be
              fullStack Web developer in this year.
            </AboutP>
            <table>
              <tbody>
                <tr>
                  <td>🌏Address:&nbsp;</td>
                  <td>
                    <a
                      href="https://goo.gl/maps/uvAKVeczTcSXfeij9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jizzax G'allaorol
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>💌Email:&nbsp;</td>
                  <td>
                    <a href="mailto:shohzodabdusamatov10@gmail.com">
                      shohzodabdusamatov10@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>☎️Phone:&nbsp;</td>
                  <td>
                    <a href="tel:+998915935121">+998 91 593 51 21</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <h1>
              <span>12 </span> Project complete
            </h1>
            <p>
              <AboutBtn>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a href="./CV.pdf" download>
                  <FaDownload />
                  &nbsp; Download CV
                </a>
              </AboutBtn>
            </p>
          </AboutContent>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
