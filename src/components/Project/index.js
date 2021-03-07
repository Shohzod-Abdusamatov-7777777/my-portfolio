import React, { useState, useEffect } from "react";
import { data } from "../../data";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectElements.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Gallery({ items, setIndex }) {
  return (
    <div className="container text-center pb-2">
      <div className="card-deck">
        {items.map((item) => (
          <motion.div
            className="card"
            key={item.id}
            onClick={() => setIndex(item)}
            layoutId={item.id}
            data-aos={item.id % 2 === 0 ? "fade-down-left" : "fade-down-right"}
          >
            <img className="card-img" src={item.image} alt={item.title} />
            <div className="card-img-overlay">
              <div className="hoverEffect">
                <h3 className="text-light">{item.name.toUpperCase()}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SingleImage({ index, onClick }) {
  const { name, id, date, href, desc, image } = index;
  return (
    <div className="single-image-container" onClick={onClick}>
      <motion.div layoutId={id} className="single-image">
        <div className="card">
          <img className="card-img-top" src={image} alt={name} />
          <div className="card-body">
            <h5 className="card-title text-dark">{name}</h5>
            <p className="card-text text-dark">{desc}</p>
            <h6 className="card-text text-muted">last update {date}</h6>
            <p className="card-text">
              <a
                className="btn btn-primary font-weight-bold"
                href={href}
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View Project👁️‍🗨️
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Projects() {
  const [index, setIndex] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <React.Fragment>
      <div
        className=" bg-style container-fluid text-center"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <h1 className="text-center title ">༺ 𝓟𝓡𝓞𝓙𝓔𝓒𝓣𝓢 ༻</h1>

        <AnimateSharedLayout>
          <Gallery items={data} setIndex={setIndex} />
          <AnimatePresence>
            {index !== false && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="overlay"
                className="overlay"
                onClick={() => setIndex(false)}
              />
            )}

            {index !== false && (
              <SingleImage
                key="image"
                index={index}
                setIndex={setIndex}
                onClick={() => setIndex(false)}
              />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </React.Fragment>
  );
}

export default Projects;
