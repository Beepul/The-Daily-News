import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import VerticalNews from '../home/VerticalNews';
import Ads from '../../components/Ads';
import Subscribe from '../home/Subscribe';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchByCat } from '../../redux/actions/newsAction';
import '../../sass/cat.scss';
import Cat from '../category/Cat';

const SearchPage = () => {
	const popularNews = useSelector((state) => state.news.popularNews);
	const searchedNews = useSelector((state) => state.news.searchedNews);

	const popular = 'Popular <span>News</span>';
	const subs = 'Subscribe <span>Now</span>';
	const potrateAds = '/assets/ads/ads-7.gif';

	return (
		<Container fluid className="cat__article">
			<section>
				<Container className="my-5">
					<Row>
						<Col lg="9">
							<div className="title mb-4">
								<h2>
									All Searched <span>News</span>
								</h2>
							</div>
							<Cat news={searchedNews} />
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

export default SearchPage;
