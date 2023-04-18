import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../../sass/contact.scss';

const Contact = () => {
	return (
		<Container fluid className="contact__sec">
			<div className="contact__title">
				<Container>
					<h4>Contact Us</h4>
				</Container>
			</div>
			<Container fluid="sm" className="my-2 my-md-4 py-4">
				<Row className="gap-md-5 flex-column flex-md-row">
					<Col className="left__contact order-2 order-md-1 mb-4">
						<img
							className="w-100 mb-4"
							src="https://discussion.qodeinteractive.com/wp-content/uploads/2016/03/contact-img.jpg"
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
							tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo
							gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a
							neque libero
						</p>
					</Col>
					<Col className="right__contact order-1 order-md-2 mb-4">
						<div className="mb-3 right__title d-flex justify-content-center align-items-center">
							<h4>Drop Your Message Here</h4>
						</div>
						<Form>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Control type="text" placeholder="Name" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
								<Form.Control type="email" placeholder="Email" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
								<Form.Control type="text" placeholder="Subject" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Control as="textarea" placeholder="Message" rows={3} />
							</Form.Group>
							<Button type="submit">Submit</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Contact;
