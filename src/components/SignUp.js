import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const SignUp = (props) => {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Full Name</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="" />
					</Form.Group>

					<Button className="submit" type="submit">
						Register
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default SignUp;
