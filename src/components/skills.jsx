import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
    <div className="style-2" >
    <section id="skills" className="section skills section-bg" data-section="skills">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>I Love to explore new technologies! Here are some of I have till now..</p>
        </div>

        <div className="row skills-content">
        <div className="col-lg-4">
            <h3>Programming Languages : </h3>
        </div>

            <div className="col-lg-2" data-aos="fade-up">
                <img src="images/C.png" alt="C" title="C"></img>
            </div>

            <div className="col-lg-2" data-aos="fade-up">
                <img src="images/C++.png" alt="C++" title="C++"></img>
            </div>

            <div className="col-lg-2" data-aos="fade-up">
            <img src="images/Java.png" alt="Java" title="Java"></img>
            </div>

            
        </div>

        <br /><br />

        <div className="row skills-content">
        <div className="col-lg-4">
            <h3>Web Technologies : </h3>
        </div>

            <div className="col-lg-3" data-aos="fade-up">
                <img src="images/html.png" alt="HTML" title="HTML"></img>
            </div>

            <div className="col-lg-3" data-aos="fade-up">
                <img src="images/css.png" alt="CSS" title="CSS"></img>
            </div>

            <div className="col-lg-2" data-aos="fade-up">
            <img src="images/javascript.jpg" alt="JavaScript" title="JavaScript"></img>
            </div>

        </div>

        <br /><br />

        <div className="row skills-content">
        <div className="col-lg-4">
            
        </div>

            <div className="col-lg-3" data-aos="fade-up">
                <img src="images/nodejs.png" alt="NodeJS" title="NodeJS"></img>
            </div>

            <div className="col-lg-3" data-aos="fade-up">
                <img src="images/express.png" alt="ExpressJS" title="ExpressJS"></img>
            </div>

            <div className="col-lg-2" data-aos="fade-up">
            <img src="images/reactjs.png" alt="ReactJS" title="ReactJS"></img>
            </div>

        </div>

        <br /><br />

        <div className="row skills-content">
        <div className="col-lg-4">
            <h3>Databases : </h3>
        </div>

            <div className="col-lg-4" data-aos="fade-up">
                <img src="images/mongodb.jpg" alt="MongoDB" title="MongoDB"></img>
            </div>

         
        </div>

      </div>
    </section>

	</div>
    )
  }
}
