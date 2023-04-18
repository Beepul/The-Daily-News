import React from 'react';
import '../../sass/single.scss';
// import '../../sass/home.scss'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import VerticalNews from '../home/VerticalNews';
import Ads from '../../components/Ads';
import Subscribe from '../home/Subscribe';
import SingleDetails from './SingleDetails';

const Singlenews = () => {
	const clickedNews = useSelector((state) => state.news.clickedNews);

	const popularNews = useSelector((state) => state.news.popularNews);

	const popular = 'Popular <span>News</span>';
	const subs = 'Subscribe <span>Now</span>';
	const potrateAds = '/assets/ads/ads-7.gif';
	return (
		<Container fluid className="single__article">
			<section className="single__banner mb-4" style={{ backgroundImage: `url(${clickedNews.urlToImage})` }}>
				<Container className="title__con">
					<h4>{clickedNews.title}</h4>
				</Container>
			</section>
			<section>
				<Container className="my-5">
					<Row>
						<Col lg="9">
							<SingleDetails article={clickedNews} />
						</Col>
						<Col lg="3">
							<section>
								<VerticalNews title={popular} news={popularNews} isPopular />
							</section>
							<section>
								<Ads src={potrateAds} />
							</section>
							<section>
								<Subscribe title={subs} />
							</section>
						</Col>
					</Row>
				</Container>
			</section>
		</Container>
	);
};

export default Singlenews;
