import gsap from "gsap";

export const desktopAnim = (tl) => {
  tl.current = gsap
    .timeline({
      defaults: { ease: "power4.out" },
    })
    .from(".down", { y: "-100%", duration: 4, delay: 1 })
    .from(
      ".down .image-card",
      {
        y: "-70%",
        duration: 0.6,
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
      "<+1"
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
};

export const tabAnim = (tl) => {
  tl.current = gsap
    .timeline({
      defaults: { ease: "power4.out" },
    })
    .from(".mobile-image-container .image-card", {
      y: "120vh",
      duration: 2,
      stagger: { each: 0.2, from: "start" },
    })
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
};

export const mobileAnim = (tl) => {
  tl.current = gsap
    .timeline({
      defaults: { ease: "power4.out" },
    })
    .to(".char", {
      y: 0,
      duration: 0.75,
      stagger: { each: 0.03, from: "start" },
    })
    .to(".subtitle", { opacity: 1, duration: 0.75 })
    .from(".mobile-image-container .image-card", {
      y: "100vh",
      duration: 2,
      stagger: { each: 0.2, from: "start" },
    });
};
