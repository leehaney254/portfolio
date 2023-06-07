import capstone from '../assets/tutors.png';
import dash from '../assets/dashboard.png';
import world from '../assets/word.png';
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillHome, AiOutlineFundProjectionScreen, AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdArticle } from "react-icons/md";
import javaScript from '../assets/javascript.svg';
import ruby from '../assets/ruby.svg';
import c from '../assets/c.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import typescript from '../assets/typescript.svg';
import rails from '../assets/rails.svg';
import node from '../assets/node.svg';
import postgres from '../assets/postgres.svg';
import mongo from '../assets/mongodb.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import vs from '../assets/visualStudio.svg';
import diverse from '../assets/diversity.jpg'

export const name = 'Leehaney Gerorge';

export const profession = "I'm a Software Developer";

export const catchPhrase = "Crafting code with passion and precision. If you like what you see, don't hesitate to contact me.";

export const socilaMedia = [
  {
    link: 'https://www.linkedin.com/in/leehaney-george/',
    icon: FaLinkedinIn,
  },
  {
    link: 'https://github.com/leehaney254',
    icon: FaGithub,
  },
  {
    link: 'https://twitter.com/Lee06785586',
    icon: FaTwitter,
  },
  {
    link: 'mailto:georgeleehaney20@gmail.com',
    icon: SiGmail,
  },
];

export const aboutParagraph = "Allow me to introduce myself—a driven and dedicated junior software developer with a passion for crafting exceptional web applications. Equipped with a degree in mechatronics engineering and armed with a full-stack web developer certificate from Microverse, I thrive on the challenges and opportunities that arise in this ever-evolving field. Collaborating with diverse individuals from around the globe, I have honed my skills in developing solution-oriented applications that make a tangible impact. Not only am I a proficient team player, but I also possess strong leadership abilities. Beyond coding, you'll find me indulging in my adventurous side, exploring nature through invigorating hikes, pushing my limits at the gym, or delving into captivating documentary series. With an insatiable appetite for growth and innovation, I am eager to contribute my expertise and enthusiasm to create remarkable digital experiences.";

export const Project = [
  {
    image: capstone,
    title: 'Tutors Appointment',
    description: '🌟 Seeking Quality Education? Look No Further! 📚✨ 🔥 Introducing Tutors-appointment! 🎓 Your ultimate destination for booking top-notch tutors tailored to your learning needs! With authentication and authorization implimented privilages and roles have been easily assigned to users and administrators.💪',
    technologies: ['React js', 'Redux', 'Tailwind', 'Ruby on Rails', 'Postgresql'],
    live: 'https://starlit-syrniki-d3f2fe.netlify.app/login',
    github: 'https://github.com/leehaney254/tutors-appointment-frontend',
  },
  {
    image: dash,
    title: 'Customizable dashboard',
    description: '🌟This intuitive and customizable tool allows users to monitor and manage their website\'s performance. It provides quick access to key metrics and insights critical to success. The dashboard is essential for making informed decisions and taking real-time action based on displayed data. Its fully customizable interface allows users to tailor the app to their needs and preferences.💪',
    technologies: ['React js', 'React-icons', 'Tailwind', 'React-contet', 'Syncfusion', 'webpack'],
    live: 'https://dashboard-c0k0.onrender.com/',
    github: 'https://github.com/leehaney254/dashboard',
  },
  {
    image: world,
    title: 'World-Info',
    description: '🌟 This is an exciting mobile web application that provides an immersive experience for all geography lovers out there. With this app, you can easily discover and learn more about countries around the world in just a few clicks. The app is user-friendly, with a simple interface that allows you to filter countries by continent or search for specific countries by name.💪',
    technologies: ['React js', 'Redux', 'Redux', 'React-icons', 'Webpack'],
    live: 'https://world-info.onrender.com/',
    github: 'https://github.com/leehaney254/world-info',
  },
];

export const languages = [
  {
    link: javaScript,
    name: 'JS',
  },
  {
    link: ruby,
    name: 'ruby'
  },
  {
    link: c,
    name: 'C'
  }];

export const libraries = [
  {
    link: react,
    name: 'react'
  },
  {
    link: redux,
    name: 'redux'
  },
  {
    link: typescript,
    name: 'typescript'
  },
  {
    link: rails,
    name: 'rails'
  },
  {
    link: node,
    name: 'node'
  }
];

export const db = [
  {
    link: postgres,
    name: 'postgres'
  },
  {
    link: mongo,
    name: 'mongo'
  }];

export const tools = [
  {
    link: git,
    name: 'git'
  },
  {
    link: github,
    name: 'github'
  },
  {
    link: vs,
    name: 'vs'
  }];

export const posts = [
  {
    Image: diverse,
    heading: "Benefits of diversity",
    date: "30 Jan 2023",
    genre: "GENERAL",
    like: 100,
    description: "Come with me on an adventure on how diversity can boost work output and quality",
  },
  {
    Image: diverse,
    heading: "Benefits of diversity",
    date: "30 Jan 2023",
    genre: "GENERAL",
    like: 100,
    description: "Come with me on an adventure on how diversity can boost work output and quality",
  },
  {
    Image: diverse,
    heading: "Benefits of diversity",
    date: "30 Jan 2023",
    genre: "GENERAL",
    like: 100,
    description: "Come with me on an adventure on how diversity can boost work output and quality",
  },
  {
    Image: diverse,
    heading: "Benefits of diversity",
    date: "30 Jan 2023",
    genre: "GENERAL",
    like: 100,
    description: "Come with me on an adventure on how diversity can boost work output and quality",
  },
  {
    Image: diverse,
    heading: "Benefits of diversity",
    date: "30 Jan 2023",
    genre: "GENERAL",
    like: 100,
    description: "Come with me on an adventure on how diversity can boost work output and quality",
  },
  {
    Image: diverse,
    heading: "Benefits of diversity",
    date: "30 Jan 2023",
    genre: "GENERAL",
    like: 100,
    description: "Come with me on an adventure on how diversity can boost work output and quality",
  },
]

export const menu = [
  {
    name: 'Intro',
    icon: AiFillHome,
  },
  {
    name: 'About',
    icon: CgProfile,
  },
  {
    name: 'Projects',
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: 'Articles',
    icon: MdArticle,
  },
  {
    name: 'Contact',
    icon: AiOutlineMessage,
  },
]