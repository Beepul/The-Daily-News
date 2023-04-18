import React from 'react';
import Trending from './Trending';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchLatest, fetchNews, fetchTopHeadlines, fetchMoreNews, fetchPopular } from '../../redux/actions/newsAction';
import VerticalNews from './VerticalNews';
import Ads from '../../components/Ads';
import Category from './Category';
import Subscribe from './Subscribe';

const Body = () => {
	const trendingNews = useSelector((state) => state.news.trendingNews);
	const topheadlines = useSelector((state) => state.news.topheadlines);
	const latest = useSelector((state) => state.news.latest);
	const moreNews = useSelector((state) => state.news.moreNews);
	const popularNews = useSelector((state) => state.news.popularNews);

	const dispatch = useDispatch();
	const trending = 'Trending <span>Now</span>';
	const top = 'Top <span>Headlines</span>';
	const latestHeading = 'Latest <span>News</span>';
	const more = 'More <span>News</span>';
	const category = 'All <span>Categories</Span>';
	const popular = 'Popular <span>News</span>';
	const subs = 'Subscribe <span>Now</span>';
	const landAds1 = '/assets/ads/ads-6.gif';
	const landAds2 = '/assets/ads/ads-5.webp';
	const potrateAds = '/assets/ads/ads-7.gif';

	useEffect(() => {
		dispatch(fetchNews());
		dispatch(fetchTopHeadlines());
		dispatch(fetchLatest());
		dispatch(fetchMoreNews());
		dispatch(fetchPopular());
	}, []);
	return (
		<Container fluid="sm" className="mt-2 mb-4">
			<Row>
				<Col lg="9">
					<section>
						<Trending news={trendingNews} title={trending} />
					</section>
					<section>
						<VerticalNews title={latestHeading} news={latest} />
					</section>
					<section>
						<Trending news={topheadlines} title={top} />
					</section>
					<section>
						<Ads src={landAds2} />
					</section>
					<section>
						<VerticalNews title={more} news={moreNews} />
					</section>
					<section>
						<Ads src={landAds1} />
					</section>
				</Col>
				<Col lg="3">
					<section>
						<Category title={category} />
					</section>
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
	);
};

export default Body;
