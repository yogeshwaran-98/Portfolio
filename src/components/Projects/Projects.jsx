import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import styles from "./Projects.module.css";

import { FrontendProjects, MernProjects, DevopsProjects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const [projectType, setProjectType] = useState(FrontendProjects);
  const [activeProject, setActiveProject] = useState("1");
  return (
    <section id="Projects">
      <h2 className={`text-n-2 h1 ${styles.container} `}>Projects</h2>
      <div className="flex gap-4 mt-4 items-center justify-center">
        <button
          className={`px-4 py-2 ${
            activeProject == "1"
              ? "bg-blue-600  text-white rounded-lg"
              : "bg-gray-300 text-black rounded-lg"
          } `}
          onClick={() => {
            setProjectType(FrontendProjects);
            setActiveProject("1");
          }}
        >
          Frontend
        </button>
        <button
          className={`px-4 py-2 ${
            activeProject == "2"
              ? "bg-blue-600 text-white rounded-lg "
              : "bg-gray-300 text-black rounded-lg"
          } `}
          onClick={() => {
            setProjectType(MernProjects);
            setActiveProject("2");
          }}
        >
          MERN Stack
        </button>
        <button
          className={`px-4 py-2 ${
            activeProject == "3"
              ? "bg-blue-600 text-white rounded-lg"
              : "bg-gray-300 text-black rounded-lg"
          } `}
          onClick={() => {
            setProjectType(DevopsProjects);
            setActiveProject("3");
          }}
        >
          DevOps
        </button>
      </div>

      <div className="container mt-20 ">
        <div className="relative bg-black rounded-3xl">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] group">
            <div className="absolute top-0 left-0 md:w-3/5 xl:w-auto h-dvh w-screen">
              <img
                className={`w-full h-full object-cover md:object-right  `}
                width={800}
                height={730}
                alt="Smartest AI"
                src={projectType[0].image}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h1 mb-4" style={{ color: "#FFC876" }}>
                {projectType[0].name}
              </h4>
              <p>
                {projectType[0].description[0]}
                <br />
                <br />
                {projectType[0].description[1]}
              </p>
            </div>

            <a
              href={projectType[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center mt-96 md:mt-0  transition-opacity duration-300 
                opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <button className="bg-white text-black px-6 py-3 rounded-lg font-bold">
                {projectType[0].action}
              </button>
            </a>
          </div>

          {projectType != DevopsProjects && (
            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
              <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden group">
                <div className="absolute inset-0">
                  <img
                    src={projectType[1].image}
                    className="h-full w-full object-cover"
                    width={630}
                    height={750}
                    alt="robot"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h1 mb-4" style={{ color: "#AC6AFF" }}>
                    {projectType[1].name}
                  </h4>
                  <p>{projectType[1].description}</p>
                </div>

                <a
                  href={projectType[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center mt-40 md:mt-0  transition-opacity duration-300 
                opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-bold">
                    {projectType[1].action}
                  </button>
                </a>
              </div>

              <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] relative group">
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h1 mb-4" style={{ color: "#FF776F" }}>
                    {projectType[2].name}
                  </h4>
                  <p>{projectType[2].description}</p>
                </div>
                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                  <img
                    src={projectType[2].image}
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt="Scary robot"
                  />
                </div>

                <a
                  href={projectType[2].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center mt-48 md:mt-0 transition-opacity duration-300 
                opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-bold">
                    {projectType[2].action}
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
