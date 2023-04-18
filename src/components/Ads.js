import React from 'react';
import { Container } from 'react-bootstrap';

const Ads = ({ src }) => {
	return (
		<Container fluid className="ad__sec my-4">
			<img className="w-100" src={src} alt="ads" />
		</Container>
	);
};

export default Ads;
