import React from "react";
import { Element } from "react-scroll";
import ia from "../../Assets/ia.jpg";
import { LinearProgress } from "@material-ui/core";
import './SkillContainer.css';

function SkillContainer() {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer__image">
        <img src={ia} alt="" />
      </div>

      <div className="skillcontainer__text">
        <h2>SKILL SET</h2>

        <div className="skillcontainer__skillset">
          <h5>React</h5>
          <div className="skillcontainer__slider  skillcontainer__slider1">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>SQL</h5>
          <div className="skillcontainer__slider  skillcontainer__slider2">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>Java Script</h5>
          <div className="skillcontainer__slider  skillcontainer__slider3">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>CSS</h5>
          <div className="skillcontainer__slider  skillcontainer__slider4">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>HTML</h5>
          <div className="skillcontainer__slider  skillcontainer__slider5">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>Bootstrap</h5>
          <div className="skillcontainer__slider  skillcontainer__slider6">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillContainer;
