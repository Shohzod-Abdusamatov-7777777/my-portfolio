import React from "react";
import { useScrollSections } from "react-scroll-section";
import {
  HomeContainer,
  HomeWrapper,
  HomeContent,
  ImgContainer,
  HomeH1,
  HomeP,
  HomeBtn,
} from "./HomeElements";
import bgVideo from "../../images/video.mp4";

const Home = () => {
  const sections = useScrollSections();

  return (
    <HomeContainer>
      <video loop autoPlay>
        <source src={bgVideo} type="video/mp4"></source>
      </video>
      <HomeWrapper>
        <HomeContent>
          <h3
            style={{
              color: "yellow",
              fontSize: "clamp(1.5rem,4vw,2rem)",
            }}
          >
            Hello!
          </h3>
          <HomeH1>
            <span style={{ color: "#fff" }}>I'M&nbsp;</span>SHohzod Abdusamatov
          </HomeH1>
          <HomeP>A Frontend Developer 2 years Experience</HomeP>
          <p>
            <HomeBtn yellow={true}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {sections
                .filter(({ id }) => id === "about")
                .map(({ id, onClick, selected }) => (
                  <li key={id} onClick={onClick} selected={selected}>
                    {id} me👇
                  </li>
                ))}
            </HomeBtn>
            <HomeBtn yellow={false}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {sections
                .filter(({ id }) => id === "projects")
                .map(({ id, onClick, selected }) => (
                  <li key={id} onClick={onClick} selected={selected}>
                    {id}
                  </li>
                ))}
            </HomeBtn>
          </p>
        </HomeContent>
        <ImgContainer></ImgContainer>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
