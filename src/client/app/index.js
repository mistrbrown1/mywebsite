import React from 'react';
import ReactDOM from 'react-dom';

import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contact from './components/contact';
class App extends React.Component {
	constructor () {
		super();
		this.state = {
			showBeginning: 'AboutMe'
		};
	}

	handleClick (stateValue) {
		this.setState({
			showBeginning: stateValue
		});
	}

	render () { 
		return (
			<div>
				<div className='customNavbar'> 
          <h4 className='navbarName'> Evan Chang </h4>
          <div className='buttonContainer'>
  					<button type='button' className='customButton btn btn-primary' onClick={this.handleClick.bind(this, 'AboutMe')}> About Me </button>
            <button type='button' className='customButton btn btn-primary' onClick={this.handleClick.bind(this, 'Projects')}> Projects </button>
            <button type='button' className='customButton btn btn-primary' onClick={this.handleClick.bind(this, 'Contact')}> Contact </button>
          </div>
				</div>
				<AboutMe showBeginning={this.state.showBeginning}/>
        <Projects showBeginning={this.state.showBeginning}/>
        <Contact showBeginning={this.state.showBeginning}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));