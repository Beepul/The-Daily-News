import moment from 'moment/moment';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { clickedNews } from '../../redux/slice/newsSlice';

const VerticalNews = ({ title, news, isPopular }) => {
	const dispatch = useDispatch();

	const formatDate = (dateString) => {
		const dateObject = moment(dateString);
		const formattedDate = dateObject.format('ddd, DD MMMM YYYY HH:mm');
		return formattedDate;
	};

	const handleClick = (article) => {
		dispatch(clickedNews(article));
	};

	return (
		<Container fluid className="vertical__sec mb-3">
			<div className="title pb-3">
				<h2 dangerouslySetInnerHTML={{ __html: title }} />
			</div>
			<Row className="scroller">
				{news &&
					news.map((item, index) => (
						<LinkContainer key={index} to={'/details'} onClick={() => handleClick(item)}>
							<Col lg={12} className="news__con d-flex flex-md-row flex-column gap-2 gap-xl-4 mb-4">
								<div className="left__con">
									<img
										className="w-100 h-100"
										src={item.urlToImage ? item.urlToImage : '/assets/placeholder.jpg'}
										alt="news"
									/>
								</div>
								<div className="right__con pb-4 pb-md-2">
									<div>
										<h4 className={isPopular ? 'popular_title' : 'title'}>{item.title}</h4>
										<h6 className={isPopular ? 'popular_date' : 'date'}>
											{formatDate(item.publishedAt)}
										</h6>
									</div>
									<div>
										<p className="desc">{!isPopular && item.description}</p>
									</div>
								</div>
							</Col>
						</LinkContainer>
					))}
			</Row>
		</Container>
	);
};

export default VerticalNews;
