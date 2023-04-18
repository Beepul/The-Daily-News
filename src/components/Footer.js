import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Copyright from './Copyright';
import Ads from './Ads';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
	const potrateAds = '/assets/ads/ads-7.gif';
	return (
		<div className="footer__sec">
			<Container fluid className="footer">
				<Container fluid="sm">
					<Row className="p-sm-4 pt-4">
						<Col lg={3} className="pb-4 pb-lg-0">
							<div className="footer__title mb-4">
								<h1>
									the <span>daily</span>
								</h1>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum, tortor vel
								scelerisque facilisis, ex orci faucibus metus, in laoreet nisl odio sed mauris.
								Suspendisse rhoncus fermentum leo, eget eleifend nibh lacinia in. Aliquam nisi ex,
								pellentesque eget augue vel, luctus semper orci. Sed a justo ipsum
							</p>
						</Col>
						<Col lg={3} className="pb-4 pb-lg-0">
							<div className="footer__title mb-4">
								<h1>
									the <span>information</span>
								</h1>
							</div>
							<div className="footer__links">
								<ul className="info">
									<li>
										<LinkContainer to={'/about'}>
											<Nav.Link>
												<i className="bi bi-chevron-double-right" />About Us
											</Nav.Link>
										</LinkContainer>
									</li>
									<li>
										<LinkContainer to={'/contact'}>
											<Nav.Link>
												<i className="bi bi-chevron-double-right" />Contact Us
											</Nav.Link>
										</LinkContainer>
									</li>
									<li>
										<LinkContainer to={'/about'}>
											<Nav.Link>
												<i className="bi bi-chevron-double-right" />Our Location
											</Nav.Link>
										</LinkContainer>
									</li>
									<li>
										<LinkContainer to={'/'}>
											<Nav.Link>
												<i className="bi bi-chevron-double-right" />News{' '}
											</Nav.Link>
										</LinkContainer>
									</li>
									<li>
										<LinkContainer to={'/about'}>
											<Nav.Link>
												<i className="bi bi-chevron-double-right" />Our Company
											</Nav.Link>
										</LinkContainer>
									</li>
								</ul>
							</div>
						</Col>
						<Col lg={3} className="pb-4 pb-lg-0">
							<div className="footer__title mb-4">
								<h1>
									Quick <span>links</span>
								</h1>
							</div>
							<div className="quick__links">
								<ul className="links d-flex gap-3  align-items-center h-100 pe-4">
									<li>
										<a>
											<i className="bi bi-youtube" />
										</a>
									</li>
									<li>
										<a>
											<i className="bi bi-facebook" />
										</a>
									</li>
									<li>
										<a>
											<i className="bi bi-twitter" />
										</a>
									</li>
									<li>
										<a>
											<i className="bi bi-instagram" />
										</a>
									</li>
									<li>
										<a>
											<i className="bi bi-linkedin" />
										</a>
									</li>
								</ul>
								{/* <ul>
									<div>
										<li>
											<a href=''>
												<i className="bi bi-chevron-double-right" />
												About Us
											</a>
										</li>
										<li>
											<a>
												<i className="bi bi-chevron-double-right" />Our Location
											</a>
										</li>
										<li>
											<a>
												<i className="bi bi-chevron-double-right" />Contact Us
											</a>
										</li>
										<li>
											<a>
												<i className="bi bi-chevron-double-right" />Archive Template
											</a>
										</li>
										<li>
											<a>
												<i className="bi bi-chevron-double-right" />Our Company
											</a>
										</li>
									</div>
								</ul> */}
							</div>
						</Col>
						<Col lg={3} className="pb-4 pb-lg-0">
							<Ads src={potrateAds} />
							{/* <div className="footer__title mb-4">
								<h1>
									quick <span>links</span>
								</h1>
							</div>
							<div>
								<ul>
									<li>
										<a>
											<i className="bi bi-chevron-double-right" />About Us
										</a>
									</li>
									<li>
										<a>
											<i className="bi bi-chevron-double-right" />Our Location
										</a>
									</li>
									<li>
										<a>
											<i className="bi bi-chevron-double-right" />Contact Us
										</a>
									</li>
									<li>
										<a>
											<i className="bi bi-chevron-double-right" />Archive Template
										</a>
									</li>
									<li>
										<a>
											<i className="bi bi-chevron-double-right" />Our Company
										</a>
									</li>
								</ul>
							</div> */}
						</Col>
					</Row>
				</Container>
			</Container>
			<Copyright />
		</div>
	);
};

export default Footer;
