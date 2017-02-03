import React from 'react';

const Argue = ({showWhich}) => {
	if (showWhich === 'Squabble') {
	  return (
	    <div className='divContainersProjects'>
        <div className='headingContainer'> 
          <div className='projectName'> 
            Squabble 
            <a href="https://github.com/mistrbrown/tremendous-turnips" className="githubLogo"> 
              <img src="../../githublogo.png" className="githubImage"/>
            </a>
          </div>
        </div>
        <br/>
        
        <div className='projectBlurb'> 
          <div className='blurbHeading'> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A debate application that utilizes the power of Sockets to employ real-time communication between two users. Argue your point of view against another user and prove how right you are! 
          </div>
          <br/>
          <div className='blurbDetails'> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Developed individualized namespaces with Socket.io to encapsulate user input at higher extraction speeds relative to standard RESTful API calls. Performed multi-keyword analyses on a MySQL database with Sequelize for two-way data binding view on an AngularJS framework. Maintained persistent user sessions through express-session middleware to ensure consistent AngularJS routing.
          </div>
          <br/>
          <h4 className='imageHeading'> 
            Images
          </h4>
        </div>
        <div className='projectDisplay'> 
          <img src='../../squabbleLobby.png' className='projectDisplayImages'/>
          <img src='../../squabbleChatting.png' className='projectDisplayImages'/>
        </div>
      </div>
	  );
	} else {
		return null;
	}
}

export default Argue;