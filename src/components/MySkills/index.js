import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MySkillsElements.css";

const MySkills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.9)",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      className="container-fluid text-center"
    >
      <div className="container">
        <h1 className="title-text m-2" data-aos="zoom-in">
          ꧁ ༺ 𝓜𝓨 𝓢𝓚𝓘𝓛𝓛𝓢 ༻ ꧂
        </h1>
        <div className="s-cards">
          <div
            data-aos="fade-up-right"
            // data-aos-anchor-placement="top-center"
            className="skills-card m-3 rounded"
          >
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    90<span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className="text"> 𝓗𝓣𝓜𝓛</h2>
            </div>
          </div>
          <div data-aos="fade-up-left" className="skills-card m-3 rounded">
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    85<span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className="text"> 𝓒𝓢𝓢 / 𝓑𝓞𝓞𝓣𝓢𝓣𝓡𝓐𝓟 </h2>
            </div>
          </div>
          <div data-aos="fade-up-right" className="skills-card m-3 rounded">
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    75<span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className="text">𝓙𝓐𝓥𝓐𝓢𝓒𝓡𝓘𝓟𝓣 </h2>
            </div>
          </div>
          <div data-aos="fade-up-left" className="skills-card m-3 rounded">
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    45<span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className="text">𝓡𝓔𝓐𝓒𝓣</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
