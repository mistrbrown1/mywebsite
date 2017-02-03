import React from 'react';

const AboutMe = ({showBeginning}) => {
	if (showBeginning === 'AboutMe') {
	  return (
	    <div className='divContainers'>
        <img src='../../hrPicture.JPG' className='aboutImage'/>
        <h2 className="nameHeader"> Evan S. Chang </h2>
        <div className="aboutBlurb"> Self-driven software developer who loves to solve challenging issues and to be inspired. Great with JavaScript frameworks including React with Redux, Angular 1.x, to be used in conjunction with node.js/express and MongoDB/mySQL to craft independent full-stack applications.
          <br/>
          <br/>
          Graduated from University of California, Los Angeles with an Economics B.A, with a specialization in computing (Data structure, Programmable Web, C++/Java Programming).
        </div>
	    </div>
	  );
	} else {
		return null;
	}
}
export default AboutMe;