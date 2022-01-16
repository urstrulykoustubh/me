import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="cp">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Competitive Programming</span>
								<h2 className="colorlib-heading animate-box">My Profiles</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jfif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://www.codechef.com/users/koustubh92">Codechef</a></h3>
											<p className="icon">
												<span><a href="https://www.codechef.com/users/koustubh92"><i className="icon-eye" />View Profile</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-5.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://www.hackerrank.com/koustubh82752">Hackerrank</a></h3>
											<p className="icon">
												<span><a href="https://www.hackerrank.com/koustubh82752"><i className="icon-eye" />View Profile</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-6.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://leetcode.com/kkt2912/">LeetCode</a></h3>
											<p className="icon">
											
												<span><a href="https://leetcode.com/kkt2912/"><i className="icon-eye" />View Profile</a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div> */}
							{/* </div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div> */}
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://www.stopstalk.com/user/profile/koustubh2912" className="btn btn-primary btn-lg btn-load-more">View All Profiles <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
