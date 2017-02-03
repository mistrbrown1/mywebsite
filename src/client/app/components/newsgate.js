import React from 'react';

const Newsgate = ({showWhich}) => {
	if (showWhich === 'NewsGate') {
	  return (
	    <div className='divContainersProjects'>
	    	<div className='headingContainer'> 
          <div className='projectName'> 
            NewsGate 
            <a href="https://github.com/mistrbrown/newsgate" className="githubLogo"> 
              <img src="../../githublogo.png" className="githubImage"/>
            </a>
          </div>
	    	</div>
        <br/>
	    	<div className='projectBlurb'> 
          <div className='blurbHeading'> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A powerful Google Chrome extension that allows the user to identify fake news articles upon entering/rendering of the link itself. Categories that the chrome-extension can detect include 'fake', 'satire', and 'biased'. Users have the ability to customize their extension through features such as themes, self-blacklisted sites, and the ability to disable the extension.
          </div>
          <br/>
          <div className='blurbDetails'> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The entire code-base was inherited and modularized and migrated from a standard full-stack application to persist with Google Chrome extension architecture. Produced an event listener/emitter design to register volatile browser actions similar to a call-and-response system. Constructed an algorithm to dynamically observe and render DOM changes determined by blacklisted URLs. Consolidated data into MongoDB to render selective user preferences, enhancing user experience. Cached preferences through Chrome’s Storage API in to improve browsing performance.
          </div>
          <br/>
          <h4 className='imageHeading'> 
            Images
          </h4>
        </div>
	    	<div className='projectDisplay'> 
	    		<img src='../../blacklistSettings.png' className='projectDisplayImages'/>
	    		<img src='../../themeSettings.png' className='projectDisplayImages'/>
	    		<img src='../../newsgateCensor.png' className='projectDisplayImages'/>
	    	</div>
	    </div>
	  );
	} else {
		return null;
	}

}
export default Newsgate