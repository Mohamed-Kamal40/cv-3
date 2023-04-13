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
  let name = "Adam ben abdallah";
  let job = "PHARMACIST";
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
    pref: "Strong teamwork and networking skills, commercial and business awareness, excellent communication and presentation skills, an outgoing and persuasive manner and negotiating skills, sales and customer relationship skills, confidence and persistence, patience and self-motivation.",
    age: "24",
    email: "adam_benabdallah@hotmail.com",
    phone: "+971-56818108",
    address: "Boulevard street dubai",
    languages: "Arabic, English",
  };
  let skills = [
    {
      tech: "Microsoft Excel",
      percentage: 40,
    },
    {
      tech: "Microsoft Word",
      percentage: 100,
    },
    {
      tech: "PowerPoint",
      percentage: 95,
    },
    {
      tech: "PHOTOSHOP",
      percentage: 90,
    },
  ];
  let work = [
    {
      date: "MARCH 2008 - 2010",
      company: "MIG",
      position: "Budget Director",
      descripttion:
        "This is a description of your work experience. Concisely describe your previous position in a way that’s easy for readers to scan quickly.",
    },
    {
      date: "APRIL 2010 - MARCH 2013",
      company: "CREATIVEM",
      position: "Business Administration",
      descripttion:
        "This is a description of your work experience. Concisely describe your previous position in a way that’s easy for readers to scan quickly.",
    },
    {
      date: "APRIL 2014 - PRESENT",
      company: "WEBNOTE",
      position: "Finance Director",
      descripttion:
        "This is a description of your work experience. Concisely describe your previous position in a way that’s easy for readers to scan quickly.",
    },
  ];
  let education = [
    {
      date: "2002 - 2006",
      degree: "Master's Degree",
      magority: "Master of Information Technology",
      place: "The San Francisco Business School",
      descripttion:
        "This is a description of your education. Concisely describe your certifiate, degree or course in a way that’s easy for readers to scan quickly.",
    },
    {
      date: "APRIL 2007 - MARCH 2010",
      degree: "WEBNOTE",
      magority: "Web Developer",
      place: "NYC School of Marketing and Advertising",
      descripttion:
        "This is a description of your education. Concisely describe your certifiate, degree or course in a way that’s easy for readers to scan quickly.",
    },
    {
      date: "APRIL 2010 - FEBRUARY 2012",
      degree: "WEBM",
      magority: "Intern",
      place: "L.A. University of Applied Sciences",
      descripttion:
        "This is a description of your education. Concisely describe your certifiate, degree or course in a way that’s easy for readers to scan quickly.",
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
      company: "MIG",
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
