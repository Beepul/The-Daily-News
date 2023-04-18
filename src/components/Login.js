import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Login = (props) => {
	return (
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form className="form__ls">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Remember Me" />
					</Form.Group>
					<Button className="submit" variant="primary" type="submit">
						Log in
					</Button>
				</Form>
				<Modal.Footer>
					<div className="upper_modal">
						<ul className="d-flex gap-4">
							<li>
								<a>Forgot your Password?</a>
							</li>
							<li>
								<a>Forgot your Username?</a>
							</li>
						</ul>
					</div>
					<div className="lower_modal">
						<Button variant="secondary">Create an Account</Button>
					</div>
				</Modal.Footer>
			</Modal.Body>
		</Modal>
	);
};

export default Login;
