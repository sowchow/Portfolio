import React from 'react';
import {Link} from 'react-scroll';
import "./TopContent.css";

function TopContent() {
  return (
    <div className='topcontent'>
      <div className='topcontent__container'>
        <h1>Mr. Sowthri Duraisamy</h1>
        <p>A Professional Web Developer</p>
        <a href='https://drive.google.com/file/d/1Vr_3WXnbsL4ZyypI2qrQk1hC1uLg2jQ5/view?usp=drivesdk'>
          <button className="topcontent__downloadButton" >Download CV</button>
        </a>
        <Link to='projects' smooth={true} duration={500}>
          <button className='topcontent__workButton'>My Works</button>
        </Link>

      </div>

    </div>
  )
}

export default TopContent