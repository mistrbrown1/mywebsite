import React from 'react';

import Argue from './argue';
import Newsgate from './newsgate';
import Xyclone from './xyclone';

class Projects extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			showWhich: this.props.showBeginning
		};
	}

  componentWillReceiveProps(newProps) {
    this.setState({
      showWhich: newProps.showBeginning
    });
  }

  handleClick(arg) {
    this.setState({
      showWhich: arg
    });
  }

	render() {
		if (this.state.showWhich === 'Projects') {
			return (
        <div>
          <div className='projectHeadings'></div>
          <div className='projectsContainer'>
    				<div className='card' onClick={this.handleClick.bind(this, 'XyClone')}>
              <img src='../../xycloneDashboard.png' className='card-img-top projectImages'/>
              <div className="card-block">
                <h4 className="card-title">XyClone</h4>
                <p className="card-text"> A WYSIWYG React Full-Stack Application Generator</p>
              </div>
            </div>
    				<div className='card' onClick={this.handleClick.bind(this, 'NewsGate')}>
              <img src='../../newsgateCensor.png' className='card-img-top projectImages'/>
              <div className="card-block">
                <h4 className="card-title">NewsGate</h4>
                <p className="card-text"> A Real-time Fake News Chrome-Extension Verifier</p>
              </div>
            </div>              
            <div className='card' onClick={this.handleClick.bind(this, 'Squabble')}>
              <img src='../../squabbleLobby.png' className='projectImages'/>
              <div className="card-block">
                <h4 className="card-title">Squabble</h4>
                <p className="card-text">Real-time Debate Application by Text Between Strangers</p>
              </div>
            </div>
          </div>
        </div>
			);
		} else {
			return (
        <div>
  				<Argue showWhich={this.state.showWhich}/>
  				<Newsgate showWhich={this.state.showWhich}/>
  				<Xyclone showWhich={this.state.showWhich}/>
        </div>
			);
		}
	}
}

export default Projects;