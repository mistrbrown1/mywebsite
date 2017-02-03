import React from 'react';

const Xyclone = ({showWhich}) => {
	if (showWhich === 'XyClone') {
	  return ( 
      <div className='divContainersProjects'>
        <div className='headingContainer'> 
          <div className='projectName'> 
            XyClone 
            <a href="https://github.com/mistrbrown/XyClone" className="githubLogo"> 
              <img src="../../githublogo.png" className="githubImage"/>
            </a>
          </div>
        </div>
        <br/>
        <div className='projectBlurb'> 
          <div className='blurbHeading'> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A WYSIWYG Website builder centralized on delivering full-stack react applications based on user preferences to be downloaded in a ZIP format. Users have the ability to create multiple projects, each equipped with a powerful editor view complete with undo and redo features.
          </div>
          <br/>
          <div className='blurbDetails'> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Architected a front-end templating system for specific user-components to be rendered through Redux. Implemented an algorithm to cache editor actions, enabling undo/redo features for a seamless user experience. Crafted a generator formula to efficiently interpret the Redux state-tree for a downloadable full-stack application. Designed an intuitive interface to enable customization for user-components with flex-box technology. Persisted user-components and editor actions into session storage for recall, resulting in increased performance.
          </div>
          <br/>
          <h4 className='imageHeading'> 
            Images
          </h4>
        </div>
        <div className='projectDisplay'> 
          <img src='../../xycloneDashboard.png' className='projectDisplayImages'/>
          <img src='../../xycloneEditor.png' className='projectDisplayImages'/>
        </div>
      </div>	  
    );
	} else {
		return null;
	}
}

export default Xyclone;