// hooks
import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// components
import ImageCard from "../ImageCard/ImageCard";

// data
import { images1, images2, mobileImages } from "../../data/images";

// styles
import "./hero.css";
import { desktopAnim, mobileAnim, tabAnim } from "./animations";

const Hero = () => {
  const mainRef = useRef();
  const tl = useRef();
  const tabTl = useRef();
  const mobileTl = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

    const mm = gsap.matchMedia();

    const title = document.querySelector(".title");

    const newTitle = new SplitText(title, { type: "chars" });

    newTitle.chars.forEach((char) => {
      char.classList.add("char");
    });

    gsap.set(".char", { y: "100%" });
    gsap.set(".subtitle", { opacity: 0 });

    mm.add("(min-width: 901px)", () => {
      desktopAnim(tl);
    });

    mm.add("(min-width: 551px) and (max-width: 899px)", () => {
      tabAnim(tabTl);
    });

    mm.add("(max-width: 550px)", () => {
      mobileAnim(mobileTl);
    });

    ScrollTrigger.create({
      start: 1,
      end: "max",
      scrub: 1,
      onLeave: (self) => self.scroll(2),
      onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
    }).scroll(2);
  }, [{ scope: mainRef.current }]);

  return (
    <main className="main" ref={mainRef}>
      <div className="main-content infinite-scroll">
        <div className="main-heading">
          <h1 className="title">
            <span className="duration">48 hours in</span>
            <span className="place">Tokyo</span>
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
