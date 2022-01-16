import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import Skills from './components/skills'
import Resume from './components/resume'
import Cp from './components/Cp'
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar />
				  
          <div id="colorlib-main">
					  <Introduction />
					  <About />
					  <Timeline />
            <Skills />
            <Resume />
            <Cp/>
            <Projects />
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
