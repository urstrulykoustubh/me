import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Koustubh Tatikondawar</a></h1>
              <span className="email"><i className="icon-mail"></i> koustubh82752@gmail.com</span>
              <span className="email"><i className="icon-phone"></i> +91 8275219473</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#Education" data-nav-section="timeline">Education</a></li>
                  <li><a href="#skills" data-nav-section="skills">skills</a></li>
                   <li><a href="#resume" data-nav-section="resume">Positions</a></li>
                    
                     <li><a href="#cp" data-nav-section="cp">Competitive Programming</a></li>
                      <li><a href="#projects" data-nav-section="projects">Development</a></li>
                       
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/koustubh-tatikondawar-84485a193/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/urstrulykoustubh" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li> 
                <li><a href="https://www.facebook.com/koustubh.tatikondawar" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/urstrulykoustubh" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> 
              </small></p>
              <p><small>
                Let's get connected !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
