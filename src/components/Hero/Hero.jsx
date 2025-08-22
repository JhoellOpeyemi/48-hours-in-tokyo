// hooks
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// components
import ImageCard from "../ImageCard/ImageCard";

// data
import { images1, images2, mobileImages } from "../../data/images";

// styles
import "./hero.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const mainRef = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      start: 1,
      end: "max",
      scrub: 1,
      onLeave: (self) => self.scroll(2),
      onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
    }).scroll(2);
  });

  return (
    <main className="main" ref={mainRef}>
      <div className="main-content infinite-scroll">
        <div className="main-heading">
          <h1 className="title">
            <span>48 hours in</span>
            <span>Tokyo</span>
          </h1>

          <p className="subtitle">
            A two-day culinary adventure through alleys, markets, and midnight
            food stalls
          </p>
        </div>

        <div className="image-container">
          <div className="image-column up">
            {images1.map((image, index) => {
              return <ImageCard image={image} key={index} />;
            })}
          </div>

          <div className="image-column down">
            {images2.map((image, index) => {
              return <ImageCard image={image} key={index} />;
            })}
          </div>
        </div>

        <div className="mobile-image-container">
          <div className="image-column">
            {mobileImages.map((image, index) => {
              return <ImageCard image={image} key={index} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
