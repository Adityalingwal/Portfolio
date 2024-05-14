import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    iphone,
    brainwave,
    yoom,
    genv,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "ReactJs",
      icon: mobile,
    },
    {
      title: "Tailwind-Css",
      icon: backend,
    },
    {
      title: "Nodejs",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  

  
  const projects = [
    {
      name: "GenV",
      description:
        "GenV is a versatile Software as a Service (SaaS) application that brings together a curated set of powerful AI tools to unleash your creativity. Whether you're a developer, designer, or artist, GenV provides cutting-edge capabilities to generate text, code, images, 3-second short videos, and music clips. Say goodbye to creative blocks and welcome a new era of inspiration with GenV.",
      tags: [
        {
          name: "NextJs",
          color: "white-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
       
      ],
      image: genv,
      source_code_link: "https://github.com/Adityalingwal/GenV-AI-application.git",
      live_link: "https://genv-ai-application.vercel.app",
    },
    {
      name: "Iphone-landing-page",
      description:
        "This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
      tags: [
        {
          name: "ReactJs",
          color: "white-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "Threejs",
          color: "orange-text-gradient",
        },
      ],
      image: iphone,
      source_code_link: "https://github.com/Adityalingwal/Iphone-landing-page.git",
      live_link:"https://iphone-landing-page-iota.vercel.app"
    },
    {
      name: "Yoom-video-conferencing",
      description:
        "Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
      tags: [
        {
          name: "Nextjs",
          color: "white-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
        
      ],
      image: yoom,
      source_code_link: "https://github.com/Adityalingwal/Yoom-video-conferencing.git",
      live_link:'https://yoom-video-conferencing.vercel.app'
    },
    {
      name: "Brainwave-AI-landing",
      description:
        "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
      tags: [
        {
          name: "Reactjs",
          color: "white-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "green-text-gradient",
        },
        
      ],
      image: brainwave,
      source_code_link: "https://github.com/Adityalingwal/Brainwave-Ai-landingpage.git",
      live_link:"https://brainwave-ai-landingpage.vercel.app"

    },
    {
      name: "Figma",
      description:
        "A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.",
      tags: [
        {
          name: "Nextjs",
          color: "white-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "green-text-gradient",
        },
        
      ],
      image: figma,
      source_code_link: "https://github.com/Adityalingwal/figma-clone.git",
      live_link:'https://figma-tawny-nine.vercel.app'
    },
  ];
  
  export { services, technologies, projects };