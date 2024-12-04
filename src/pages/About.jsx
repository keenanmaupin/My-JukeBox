
import React from 'react';
import { Tooltip } from 'react-tooltip';
const About = () => {
  return (
    <div className="about">
      <h1>Keenan Maupin<a href="src/assets/resume.pdf" download="src/assets/resume.pdf" id='Downloadable-Resume'> <img src="https://cdn3.emoji.gg/emojis/1640-do-not-disturb.gif" width="64px" height="64px" alt="Downloadable Resume"/>
              </a>
              <Tooltip 
              anchorSelect = '#Downloadable-Resume'
              content = 'Downloadable-Resume' /></h1>
      <p>
      Hello, my name is Keenan Maupin. I am a Full Stack Developer fueled by creativity, dedication, and a commitment to excellence in the craft of software engineering.
      I recently completed UC Irvine's Full Stack Web Development Boot Camp (August 2024 - November 2024), where I quickly and proficiently mastered a diverse range of widely 
      used technologies, including JavaScript, TypeScript, HTML, CSS, React, and the full M.E.R.N. stack. During this program, I developed a strong proficiency in working with 
      both SQL and MongoDB as primary database solutions.Specializing in JavaScript, React (with Vite), HTML, and CSS, I have created multiple static and web service-based applications
      that demonstrate my growing technical skills and adaptability.</p>
      <br></br>
      <p>My background in engineering and the military has instilled in me a strong ability to thrive in fast-paced environments, 
      paired with an acute attention to detail and a dedication to continuous improvement. I am passionate about building user-friendly applications, constantly exploring innovative 
      ways to enhance user interactivity while maintaining a focus on usability. With a steadfast commitment to leadership and professional growth, I embrace challenges as opportunities to 
      learn and excel. </p>
      <br></br>
      <p>My goal is to lead by example, consistently striving to deliver exceptional results in every project I undertake.
      My journey began with a love for sound and has evolved into a collection of tracks that reflect my growth and inspiration.
      Feel free to explore my portfolio and listen to my mix-tapes. I hope you enjoy the soundscapes as much as I enjoyed crafting them!
      </p>
      <br></br>
      <hr></hr>
      <br></br>
      <a href="/" id ='Home-Page'><img src="https://cdn3.emoji.gg/emojis/45625-vinylrecord.gif" width="64px" height="64px" alt="VinylRecord"/></a>
      <Tooltip 
        anchorSelect = '#Home-Page'
        content = 'Home-Page' />
      <br></br>
      <br></br>
    </div>
  );
};

export default About;
