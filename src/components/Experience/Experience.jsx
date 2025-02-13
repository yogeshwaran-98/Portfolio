import React, { useRef, useEffect, useState } from "react";
import History from "./History.json";
import Skills from "./Skills.json";
import styles from "./Experience.module.css";
import { collabApps } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export const ExperienceTilt = ({ children, className = "", setShowTitle }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const [isUserActive, setIsUserActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileScreen = window.innerWidth < 768;

    if (isMobileScreen) {
      setIsMobile(true);
    }
  }, []);

  const itemRef = useRef(null);
  const colors = ["#e0ef57", "#64a9e6", "#4eee93"];

  const [hoverColor, setHoverColor] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserActive && itemRef.current) {
        const { left, top, width, height } =
          itemRef.current.getBoundingClientRect();

        const fakeEvent = {
          clientX: left + width / 2,
          clientY: top + height / 2,
        };

        handleMouseMove(fakeEvent);
        setTimeout(handleMouseLeave, 1000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isUserActive]);

  useEffect(() => {
    const handleUserInteraction = () => {
      setIsUserActive(true);
      setTimeout(() => setIsUserActive(false), 2000);
    };

    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  const handleMouseEnter = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (isMobile) {
      setHoverColor(randomColor);
    }
    setHoverColor(randomColor);
  };

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 1) * 10;
    const tiltY = (relativeX - 1) * -10;

    setTransformStyle(
      `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1,1,1)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(800px) rotateX(0deg) rotateY(0deg)");
    setHoverColor(false);
  };

  useEffect(() => {
    if (!itemRef.current) return;

    gsap.fromTo(
      ".skills-container",
      { rotate: 0 },
      {
        rotate: 360,
        duration: 2,
        repeat: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          setShowTitle(true);
        },
      }
    );

    gsap.to(".center-container", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });

    ScrollTrigger.create({
      trigger: itemRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(itemRef.current, {
          backgroundColor: () =>
            colors[Math.floor(Math.random() * colors.length)],
          duration: 0.3,
          repeat: 3,
          yoyo: true,
          onComplete: () => {
            gsap.to(itemRef.current, { backgroundColor: "", duration: 0.3 });
          },
        });
      },
    });

    const tl = gsap.timeline({ delay: 2 });

    tl.to(itemRef.current, {
      backgroundColor: () => colors[Math.floor(Math.random() * colors.length)],
      duration: 0.5,
      yoyo: true,
      repeat: 1,
      stagger: 0.5,
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`${className} transition-transform duration-300 relative overflow-hidden z-10 `}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ transform: transformStyle, backgroundColor: hoverColor }}
    >
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 
                   pointer-events-none hover:opacity-100 z-0"
      />

      <div className="relative z-10 bg-gray-900/90 rounded-[2rem] p-6 border-[3px] border-transparent ">
        {children}
      </div>
    </div>
  );
};

{
  /* export const ExperienceCard = ({
  role,
  organisation,
  startDate,
  endDate,
  experiences,
}) => {
  return (
    <ExperienceTilt className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-[600px] even:py-14 odd:py-8 odd:my-4">
      <h4 className="h4 mb-4">{role}</h4>

      <div className="flex justify-between">
        <p className="organisation body-2 min-h-[4rem] mb-3 text-n-1/50">
          {organisation}
        </p>
        <p>{`${startDate} - ${endDate}`}</p>
      </div>

      <div className="flex items-center h-[5.5rem] mb-6">
        <div className="text-[1.5rem] leading-none font-bold">
          <ul className="text-[1rem] leading-relaxed font-medium text-gray-300 list-disc pl-4">
            {experiences.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </ul>
        </div>
      </div>
    </ExperienceTilt>
  );
}; */
}

const Experience = () => {
  const [showTitle, setShowTitle] = useState(false);
  const ballRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const totalLength = collabApps.length;
    const angleStep = 360 / totalLength;

    gsap.to(".orbiting-ball", {
      motionPath: {
        path: "M 30,0 A 30,30 0 1,1 -30,0 A 30,30 0 1,1 30,0",
        align: ".orbiting-ball",
        alignOrigin: [0.5, 0.5],
      },
      duration: 3,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className={styles.container} id="Experience">
      <h2 className="ml-12 md:ml-0   h1 text-n-2">Experience</h2>
      <div className={styles.content}>
        <div className=" xl:w-[38rem] mt-20 md:mt-20 ">
          <div className="skills-container relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className=" center-container w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient  rounded-full">
                <div className=" flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <div
                    ref={ballRef}
                    className="orbiting-ball absolute w-[1rem] h-[1rem] bg-white rounded-full top-[-0.5rem] left-1/2 -translate-x-1/2"
                  ></div>
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => {
                const totalLength = collabApps.length;
                const angle = 360 / totalLength;
                return (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom `}
                    style={{
                      transform: `rotate(${index * angle}deg)`,
                    }}
                  >
                    <div
                      ref={(el) => (iconsRef.current[index] = el)}
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl `}
                      style={{
                        transform: `rotate(-${index * angle}deg)`,
                      }}
                    >
                      <img
                        className="m-auto relative"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />

                      {showTitle && (
                        <span
                          className={`absolute text-sm md:text-lg 

                            ${
                              app.position == "top"
                                ? "-top-10"
                                : app.position == "bottom"
                                ? "-bottom-10"
                                : app.position == "left"
                                ? "-top-5 md:-left-28 md:top-5"
                                : app.position == "right"
                                ? "-top-5 md:-right-20 md:top-5"
                                : ""
                            }
                        
                        
                        `}
                        >
                          {app.title}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-[1rem] max-lg:flex-wrap mt-20 h-[600px ] ">
        {History.map((item) => (
          <ExperienceTilt
            setShowTitle={setShowTitle}
            key={item.role}
            className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-[600px] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 id="title" className={`h4 mb-4 `} style={{ color: item.color }}>
              {item.role}
            </h4>

            <div className="flex justify-between">
              <p className="organisation body-2 min-h-[4rem] mb-3 text-n-1/50">
                {item.organisation}
              </p>
              <p>{`${item.startDate} - ${item.endDate}`}</p>
            </div>

            <div className="flex items-center h-[5.5rem]  mt-10 mb-20 mb:mb-10">
              <>
                <div className="text-[1.5rem] leading-none font-bold">
                  <ul className="text-[1rem] leading-relaxed font-medium text-gray-300 list-disc pl-4">
                    {item.experiences.map((experience, index) => (
                      <li key={index}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </>
            </div>
          </ExperienceTilt>
        ))}
      </div>
    </section>
  );
};

export default Experience;
