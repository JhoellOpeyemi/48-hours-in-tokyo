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
      tl.current = gsap
        .timeline({
          defaults: { ease: "power4.out" },
        })
        .from(".down", { y: "-100%", duration: 5.5, delay: 1 })
        .from(
          ".down .image-card",
          {
            y: "-70%",
            duration: 0.8,
            stagger: { each: 0.25, from: "end" },
          },
          "<"
        )
        .from(
          ".up .image-card",
          {
            y: "120vh",
            duration: 2,
            stagger: { each: 0.2, from: "start" },
          },
          "-=4"
        )
        .to(
          ".char",
          {
            y: 0,
            duration: 0.75,
            stagger: { each: 0.03, from: "start" },
          },
          "<"
        )
        .to(".subtitle", { opacity: 1, duration: 0.75 }, "<+1");
    });

    mm.add("(min-width: 551px) and (max-width: 899px)", () => {
      tabTl.current = gsap
        .timeline()
        .from(".mobile-image-container", {
          y: "-100%",
          duration: 3.5,
          delay: 1,
        })
        .from(
          ".mobile-image-container .image-card",
          {
            y: "-70%",
            duration: 0.75,
            stagger: { each: 0.2, from: "end" },
          },
          "<"
        )
        .to(
          ".char",
          {
            y: 0,
            duration: 0.75,
            stagger: { each: 0.03, from: "start" },
          },
          "<+1"
        )
        .to(".subtitle", { opacity: 1, duration: 0.75 }, "<+1");
    });

    mm.add("(max-width: 550px)", () => {
      mobileTl.current = gsap
        .timeline()
        .to(".char", {
          y: 0,
          duration: 0.75,
          stagger: { each: 0.03, from: "start" },
        })
        .to(
          ".char",
          {
            opacity: 0,
            duration: 0.75,
          },
          "+=2"
        )
        .to(".subtitle", { opacity: 1, duration: 0.75 })
        .to(".subtitle", { opacity: 0, duration: 0.75 }, "+=3")
        .from(".mobile-image-container", {
          y: "-100%",
          duration: 3.5,
        })
        .from(
          ".mobile-image-container .image-card",
          {
            y: "-100%",
            duration: 0.75,
            stagger: { each: 0.2, from: "end" },
          },
          "<"
        );
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
