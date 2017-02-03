import React from 'react';

const Contact = ({showBeginning}) => {
  if (showBeginning === 'Contact') {
    return (
      <div className='divContainers'>
        <h4 className='projectHeadings'> 
          Find me on...
        </h4>
        <div className='contactLogos'>
          <a href="https://github.com/mistrbrown" className="logoContact"> 
            <img src="../../githublogo.png" className="imageContact"/>
          </a>
          <a href="https://linkedin.com/in/evan-chang" className='logoContact'>
            <img src="../../linkedinLogo.png" className="imageContact"/>
          </a>
          <a href="https://angel.co/evan-chang-2" className='logoContact'>
            <img src="../../angellistLogo.png" className="imageContact"/>
          </a>          
        </div>
      </div>
    );

  } else {
    return null;
  }
}

export default Contact;