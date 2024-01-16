import {
  LumappsLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aurélien Dentan",
  initials: "AD",
  location: "Lyon, France",
  locationLink: "https://www.google.com/maps/place/Lyon",
  about:
    "Full Stack Engineer and data engineer that love to build product and learn new tings",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/42159026?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "aurelien.dentan@gmail.com",
    tel: "+33674079507",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/auredentan ",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adentan/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Montpellier University of science",
      degree: "Master in Computational Physics",
      start: "2016",
      end: "2018",
    },
  ],
  work: [
    {
      company: "LumApps",
      link: "https://lumapps.com",
      badges: [],
      title: "Full Stack Developer",
      logo: LumappsLogo,
      start: "2018",
      end: "2021",
      description:
        "Maintainance of olf apps, creation and setup of new apps and some devops work. Technologies: React, TypeScript, Python",
    },
   
  ],
  skills: [
    "SQL",
    "TypeScript",
    "React/Next.js/Remix",
    "Python",
  ],
  projects: [
    
  ],
} as const;
