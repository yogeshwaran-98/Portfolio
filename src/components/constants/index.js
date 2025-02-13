import { Mail, Linkedin, Github } from "lucide-react";
import {
  Html,
  Css,
  React,
  Node,
  Mongodb,
  Aws,
  Docker,
  Kubernetes,
  Jenkins,
} from "../../../assets/skills";

import frontend1 from "../../assets/services/project1.png";
import frontend2 from "../../assets/services/project2.webp";
import frontend3 from "../../assets/services/project3.png";
import mern1 from "../../assets/services/mern1.webp";
import mern2 from "../../assets/services/mern2.webp";
import mern3 from "../../assets/services/mern3.jpg";
import devops1 from "../../assets/services/devops1.jpg";

export const collabApps = [
  {
    id: "0",
    title: "Html",
    icon: Html,
    width: 26,
    height: 36,
    position: "top",
  },
  {
    id: "1",
    title: "Css",
    icon: Css,
    width: 34,
    height: 36,
    position: "right",
  },
  {
    id: "2",
    title: "React",
    icon: React,
    width: 36,
    height: 28,
    position: "right",
  },
  {
    id: "3",
    title: "Node",
    icon: Node,
    width: 34,
    height: 35,
    position: "right",
  },
  {
    id: "4",
    title: "Mongodb",
    icon: Mongodb,
    width: 34,
    height: 34,
    position: "bottom",
  },
  {
    id: "5",
    title: "Aws",
    icon: Aws,
    width: 34,
    height: 34,
    position: "bottom",
  },
  {
    id: "6",
    title: "Docker",
    icon: Docker,
    width: 38,
    height: 38,
    position: "left",
  },
  {
    id: "7",
    title: "Kubernetes",
    icon: Kubernetes,
    width: 38,
    height: 32,
    position: "left",
  },
  {
    id: "8",
    title: "Jenkins",
    icon: Jenkins,
    width: 38,
    height: 32,
    position: "left",
  },
];

export const socials = [
  {
    id: "0",
    title: "Mail",
    iconUrl: Mail,
    url: "mryogeshwaran1998@gmail.com",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: Linkedin,
    url: "https://www.linkedin.com/in/yogeshwaran-mr",
  },
  {
    id: "2",
    title: "Github",
    iconUrl: Github,
    url: "https://github.com/yogeshwaran-98",
  },
];

export const FrontendProjects = [
  {
    index: 1,
    name: "Artify AI",
    description: [
      "Generate stunning AI-powered images effortlessly with Brainwave.",
      "Transform ideas into visuals with cutting-edge technology in just seconds.",
    ],
    image: frontend1,
    action: "View Live Page",
    url: "https://aiartify.netlify.app/",
  },
  {
    index: 2,
    name: "UniWorld",
    description: [
      "Elevate your gaming experience with UniWorld Metagame.",
      "Analyze strategies, track performance, and gain insights to stay ahead of the competition.",
    ],
    image: frontend2,
    action: "View Live Page",
    url: "https://uni-world.netlify.app/",
  },
  {
    index: 3,
    name: "PeakView",
    image: frontend3,
    description: [
      "Empower your business with real-time insights and analytics.",
      " Track performance, visualize data, and make informed decisions effortlessly.",
    ],
    action: "View Live Page",
    url: "https://peakview.netlify.app/",
  },
];

export const MernProjects = [
  {
    index: 1,
    name: "LandBNB",
    description: [
      "A real estate applcation for seamless property listings and bookings.",
      "Built with cutting-edge technologies for a smooth user experience.",
    ],
    image: mern1,
    action: "View Source Code",
    url: "https://github.com/yogeshwaran-98/LandBNB-V2",
  },
  {
    index: 2,
    name: "JobKaro",
    description: [
      "A job searching platform connecting job seekers with top companies.",
      "Offers advanced filtering, job recommendations, and application tracking.",
    ],
    image: mern2,
    action: "View Source Code",
    url: "https://github.com/yogeshwaran-98/Job-searching-application",
  },
  {
    index: 3,
    name: "PingMe",
    image: mern3,
    description: [
      "A real-time chat application with instant messaging features.",
      "Secure, fast, and user-friendly communication for individuals and teams.",
    ],
    action: "View Source Code",
    url: "https://github.com/yogeshwaran-98/realtime-chatapp",
  },
];
export const DevopsProjects = [
  {
    index: 1,
    name: "DevOps Projects",
    description: [
      "Worked on multiple DevOps projects involving CI/CD, cloud automation, and infrastructure management.",
      "Visit the blog to explore detailed case studies and insights on DevOps implementations.",
    ],
    image: devops1,
    action: "View Blog",
    url: "https://yogeshwaran-mr.blogspot.com/",
  },
];
