import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutImg from "../../assets/about/aboutImage.png";

import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".about-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.container} id="About" ref={aboutRef}>
      <h1 className=" ml-24 mb-10 sm:mb-0 sm:ml-0  h1 text-n-2">About</h1>
      <div className={styles.content}>
        <img
          src={AboutImg}
          alt="Me sitting with a laptop"
          className="w-48 h-48  md:mr-20"
        />
        <ul className={styles.aboutItems}>
          <li className={`${styles.aboutItem} about-item`}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png"
              className="w-10 h-10 mr-10"
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3 className="text-n-2 mb-5">Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} about-item`}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4829/4829008.png"
              className="w-10 h-10 mr-10"
              alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3 className="text-n-2 mb-5">Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} about-item`}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/371/295/non_2x/devops-icon-illustration-free-vector.jpg"
              className="w-10 h-10 mr-10"
              alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3 className="text-n-2 mb-5">DevOps Engineer</h3>
              <p>
                I have implemented CI/CD pipelines, automated deployments using
                Jenkins and Docker, and optimized cloud infrastructure with
                Kubernetes and Terraform.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
