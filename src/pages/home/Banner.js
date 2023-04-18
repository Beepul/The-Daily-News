import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import BannerItem from './BannerItem';
import axios from 'axios';

function Banner() {
	const [ slide, setSlide ] = useState([]);

	const fetchBanner = async () => {
		const res = await axios.get('SampleOutput.json');
		setSlide(res.data.articles);
	};
	useEffect(() => {
		fetchBanner();
	}, []);

	if (slide.length === 0) {
		return <div>Loading...</div>;
	}
	const first = slide.slice(0, 5);
	const second = slide.slice(5, 10);
	const third = slide.slice(10, 15);

	return (
		<Container fluid className="banner__sec py-5">
			<Container fluid="sm">
				<Carousel>
					<Carousel.Item className="">
						<BannerItem ban={first} />
					</Carousel.Item>
					<Carousel.Item className="">
						<BannerItem ban={second} />
					</Carousel.Item>
					<Carousel.Item className="">
						<BannerItem ban={third} />
					</Carousel.Item>
				</Carousel>
			</Container>
		</Container>
	);
}

export default Banner;
