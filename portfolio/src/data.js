import WebStoneSS from "./assets/images/Webstone-SS.png";
import CrudemonSS from "./assets/images/Crudemon-SS.png";

export const skillsList = [
  { title: "JavaScript", value: 90 },
  { title: "React JS", value: 80 },
  { title: "Angular", value: 85 },
  { title: "C#", value: 80 },
  { title: ".NET", value: 85 },
  { title: "SQL", value: 85 },
  { title: "Powershell", value: 75 },
  { title: "Playwright", value: 70 }
];

export const experienceList = [
  {
    id: 0,
    company: "Nashville Software School",
    title: "Software Engineer Apprentice",
    duration: "February 2022 - August 2022",
    overview:
      "Intensive full-time 6-month full-stack web development boot-camp supplementing learning with both individual and team-based projects. Learned not only languages such as React, JavaScript, C#, .NET, and SqlServer, and tools such as Github, DBDiagram, Canva, and Figma but also got a lot of valuable experience learning how to actually work in a software development environment and the important soft skills that are required.",

    links: {
      website: "https://nashvillesoftwareschool.com/",
      facebook: "https://www.facebook.com/NashvilleSoftwareSchool",
      instagram: "https://www.instagram.com/nashvillesoftwareschool/",
    },
  },
  {
    id: 1,
    company: "Navihealth",
    title: "Associate Software Engineer",
    duration: "October 2022 - Current",
    overview:
      `At naviHealth, part of Optum/UnitedHealth Group, we enhance healthcare for over 10 million seniors in post-acute care management. I played a key role as a full-stack developer, skillfully integrating technologies like Angular, .NET Core, C#, MSSQL Server, and Web API for robust web applications.

      Collaboration was at the core of our success. I closely worked with product owners and business analysts to ensure project alignment and optimization. Our SCRUM team showcased exceptional proficiency, delivering high-quality solutions with self-organization.
      
      I developed an extensive suite of automated system tests using PowerShell, improving internal processes and efficiency. I also led the transition from PowerShell to C# with WinForms for automated testing.
      
      Throughout the Software Development Life Cycle, I actively participated in SCRUM, engaging in peer planning, code reviews, and design refinement. My contributions were recognized with a Grand Prix nomination and a Bravo award, highlighting my positive impact on the organization's mission to provide better healthcare experiences for seniors`    
    ,

    links: {
      website: "https://navihealth.com/",
      facebook: "https://www.facebook.com/naviHealthInc/",
      instagram: "https://www.instagram.com/navihealth/?hl=en",
    },
  },
];

export const projectList = [
  {
    id: 1,
    title: "WebStone",
    overview: "Full-Stack web app that allows you to play a fantasy card game (emulating Hearthstone) in your browser!",
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
    overview: "Front-end web application that allows you to create pokemon and then battle with them!",
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
