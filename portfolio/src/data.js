import WebStoneSS from "./assets/images/Webstone-SS.png";
import CrudemonSS from "./assets/images/Crudemon-SS.png";

export const skillsList = [
  { title: "JavaScript", value: 85 },
  { title: "React JS", value: 80 },
  { title: "C#", value: 80 },
  { title: ".NET", value: 75 },
  { title: "SqlServer", value: 70 },
  { title: "Firebase", value: 50 },
];

export const experienceList = [
  {
    id: 0,
    company: "Nashville Software School",
    title: "Software Engineer Apprentice",
    duration: "Feb 2022 - August 2022",
    overview:
      "Intensive full-time 6-month full-stack web development boot-camp supplementing learning with both individual and team-based projects. Learned not only languages such as React, JavaScript, C#, .NET, and SqlServer, and tools such as Github, DBDiagram, Canva, and Figma but also got a lot of valuable experience learning how to actually work in a software development environment and the important soft skills that are required.",

    links: {
      website: "https://nashvillesoftwareschool.com/",
      facebook: "https://www.facebook.com/NashvilleSoftwareSchool",
      instagram: "https://www.instagram.com/nashvillesoftwareschool/",
    },
  },
];

export const projectList = [
  {
    id: 1,
    title: "WebStone",
    overview:
      "Full-Stack web app that allows you to play a fantasy card game (emulating Hearthstone) in your browser!",
    extendedOverview: `WebStone is an application designed
for card game fans that allows you to
create and interact with decks to play a
Hearthstone styled fantasy card game
directly in your browser. It's a full-stack web api application utilizing React for the client-side and C#, .NET and SqlServer for the server-side.
`,
    technologies: ["ReactJS", "C#", ".NET", "SQLServer"],
    link: "https://github.com/JavontaeH/WebStone",
    frontImage: WebStoneSS,
  },

  {
    id: 2,
    title: "Crudemon",
    overview:
      "Front-end web application that allows you to create pokemon and then battle with them!",
    extendedOverview: `CRUD-EMON is a client-side application leveraging React, that is
designed for Pokemon and video
game fans. It allows you to create,
edit, or delete your own
Pokemon/character and then battle it
out with them in a turn-based
Pokemon-style game with animated
attacks, sounds and fully realized win
conditions.

`,
    technologies: ["ReactJS", "JSON", "GSAP"],
    link: "https://github.com/JavontaeH/CRUD-EMON",
    frontImage: CrudemonSS,
  },
];
