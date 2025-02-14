import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [scrollTrue, setScrollTrue] = useState(false);

  useEffect(() => {
    gsap.set("#hero", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
      boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.6)",
    });
    gsap.from("#hero", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div>
      <div
        id="hero"
        className="container relative flex items-center justify-center h-[100vh] z-10  border  "
      >
        <div className="relative  max-w-[62rem] text-center   ">
          <h1 className="h1 mb-6">I am YOGESHWARAN MR</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Versatile MERN stack developer and DevOps enthusiast, skilled in
            building scalable apps and optimizing cloud workflows.
          </p>
          <Button href="https://drive.google.com/uc?export=download&id=1o-gb-o91cAEC6iP3rMuWajmWSkvk-OJE">
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
