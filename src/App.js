import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import Cover from "./components/cover";
import About from "./components/about";
import Skills from "./components/skills";
import CardsComponent from "./components/cards";
import References from "./components/references";
import Footer from "./components/footer";
import reference1 from "./assets/reference1.mp4";
// import profile from "./assets/profile.jpg"; -----> put cv here import cv from assets here then put in in person object

function App() {
  let name = "ALI AL-AHMARY";
  let job = "WEB DEVELOPER, GRAPHIC DESIGNER, PHOTOGRAPHER";
  let person = {
    name,
    job,
    facebook: "",
    twitter: "",
    instagram: "",
    cv: "", //profile -----> put imported cv here,
  };
  let info = {
    name,
    welcomeMessage: `Hello! I am ${name} a ${job}.`,
    pref: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore sequi alias rem eos accusamus distinctio hic incidunt tempora voluptatem reiciendis eius adipisci",
    age: "24",
    email: "any@example.com",
    phone: "0096611111111",
    address: "jeddah saudi arabia",
    languages: "Arabic, English",
  };
  let skills = [
    {
      tech: "JAVASCRIPT",
      percentage: 95,
    },
    {
      tech: "BOOTSTRAP",
      percentage: 80,
    },
    {
      tech: "PHOTOSHOP",
      percentage: 90,
    },
    {
      tech: "Illustrator",
      percentage: 95,
    },
  ];
  let work = [
    {
      date: "MARCH 2016 - PRESENT",
      company: "CREATIVEM",
      position: "Front End Developer",
      descripttion:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
    {
      date: "APRIL 2014 - MARCH 2016",
      company: "WEBNOTE",
      position: "Web Developer",
      descripttion:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
    {
      date: "APRIL 2013 - FEBRUARY 2014",
      company: "WEBM",
      position: "Intern",
      descripttion:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
  ];
  let education = [
    {
      date: "2013 - 2015",
      degree: "Master's Degree",
      magority: "Master of Information Technology",
      place: "UNIVERSITY OF COMPUTER SCIENCE",
      descripttion:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
    {
      date: "APRIL 2014 - MARCH 2016",
      degree: "WEBNOTE",
      magority: "Web Developer",
      place: "UNIVERSITY OF COMPUTER SCIENCE",
      descripttion:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
    {
      date: "APRIL 2013 - FEBRUARY 2014",
      degree: "WEBM",
      magority: "Intern",
      place: "UNIVERSITY OF COMPUTER SCIENCE",
      descripttion:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
  ];
  let references = [
    {
      name: "Michael ",
      position: "CEO",
      company: "CREATIVEM",
      video: reference1,
    },
    {
      name: "Yousef",
      position: "CEO",
      company: "WEBM",
      video: reference1,
    },
    {
      name: "Mohamed ",
      position: "CEO",
      company: "WEBNOTE",
      video: reference1,
    },
  ];
  return (
    <div className="App bg-light">
      <NavbarComponent name={name} />
      <Cover person={person} />
      <section id="about">
        <About info={info} />
      </section>
      <section id="skills">
        <h2 className="text-center pt-5">Professional Skills</h2>
        <Skills skills={skills} />
      </section>
      <section id="experience">
        <h2 className="text-center pt-5">Work Experience</h2>
        <CardsComponent work={work} />
      </section>
      <section id="education">
        <h2 className="text-center pt-5">Education</h2>
        <CardsComponent education={education} />
      </section>
      <section id="references">
        <h2 className="text-center pb-4 pt-5">References</h2>
        <References references={references} />
      </section>
      <Footer person={person} info={info} />
    </div>
  );
}

export default App;
