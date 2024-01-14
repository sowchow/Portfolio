import React from "react";
import { Element } from "react-scroll";
import Proj from "../Proj/Proj";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipPD6lsV45-to5M2q_lLZjvC5BCJzo-v1OGSY8TR=s680-w680-h510",
      title: "Crud",
      desc: "I have to sort an array with numbers without using the sort() method. Something like this",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*DI5wwLcQV-b3erfLIbvfFQ.jpeg",
      title: "Crud",
      desc: "I have to sort an array with numbers without using the sort() method. Something like this",
    },
    {
      img: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_3840,q_auto",
      title: "Crud",
      desc: "I have to sort an array with numbers without using the sort() method. Something like this",
    },
    {
      img: "https://img.freepik.com/premium-vector/skills-concept-education-training-improvement-people-get-knowledge-build-career-illustration_277904-4760.jpg",
      title: "Crud",
      desc: "I have to sort an array with numbers without using the sort() method. Something like this",
    },
    {
      img: "https://img.freepik.com/premium-vector/skills-concept-education-training-improvement-people-get-knowledge-build-career-illustration_277904-4760.jpg",
      title: "Crud",
      desc: "I have to sort an array with numbers without using the sort() method. Something like this",
    },
    {
      img: "https://img.freepik.com/premium-vector/skills-concept-education-training-improvement-people-get-knowledge-build-career-illustration_277904-4760.jpg",
      title: "Crud",
      desc: "I have to sort an array with numbers without using the sort() method. Something like this",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        I developed a projects for my self learning and my realatives Shops for
        business easy
      </p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Proj
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            ></Proj>
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
