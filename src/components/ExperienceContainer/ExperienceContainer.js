import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp" >
      <h1>Experience</h1>
      <div className='experienceContainer__info'>
        <Experience number="+1" title="Clients"/>
        <Experience number="2+" title="Project" style={{backgroundColor:"rgb(53, 139, 53)"}}/>
        <Experience number="1+" title="Years"/>
        <Experience number="1+" title="Years"/>

      </div>
    </Element>
  )
}

export default ExperienceContainer