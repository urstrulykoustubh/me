import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <div className="style-2" >
            <section id="resume" className="resume" data-section="resume" >
                <div className="container">

        <div className="section-title">
          <h2>WCE ACM Student Chapter</h2>
        </div>

        <div>
            
            <div className="resume-item">
              <h4>Assistant Session Director</h4>
              <h5>Novemeber 2020 - November 2021</h5>
              <ul>
                <li>Conducted 10+ sessions on various technical topics that benefitted students to enhance their knowledge.</li>
                <li>Organized <em>Online coding Contests</em> - on Data Structures & Algorithms for students</li>
            </ul>
            </div>
            <div className="resume-item">
              <h4>Member</h4>
              <h5>March 2020- November 2020</h5>
              <ul>
                  <li>Organized General Interest Meet</li>
              </ul>
            </div>
        </div>
        <br /><br /><br />
          {/* <div className="section-title">
          <h2>Coding Blocks</h2>
        </div>

        <div>
            <div className="resume-item">
              <h4>Campus Ambassador</h4>
              <h5>April 2020 - Present</h5>
              <ul>
                  <li>Contributed in conducting Online Workshops.</li>
              </ul>
            </div>
        </div> */}
    </div>

        
    </section>

      </div>
    )
  }
}
