import moment from 'moment';
import React from 'react';
import Trending from '../home/Trending';
import { useSelector } from 'react-redux';

const SingleDetails = ({ article }) => {
	const trendingNews = useSelector((state) => state.news.trendingNews);

	const recommend = 'You May Also <span>Like</span>';
	const formatDate = (dateString) => {
		const dateObject = moment(dateString);
		const formattedDate = dateObject.format('ddd, DD MMMM YYYY HH:mm');
		return formattedDate;
	};
	return (
		<section className="article__con">
			<div>
				<div className="article__title">
					<h4>{article.title}</h4>
				</div>
				<div className="d-flex justify-content-between">
					<div className="article__details d-flex gap-4">
						<p>{formatDate(article.publishedAt)}</p>
						<p>
							Author: <span>{article.author}</span>
						</p>
						<p>
							Source: <span>{article.source.name}</span>
						</p>
					</div>
					<div className="article__link d-flex gap-4">
						<i className="bi bi-envelope-at" />
						<i className="bi bi-printer" />
					</div>
				</div>
			</div>
			<div className="artile__img my-4">
				<img className="w-100" src={article.urlToImage} alt={article.title} />
			</div>
			<div>
				<p>{article.content}</p>
				<br />
				<p>{article.description}</p>
			</div>
			<div className="mt-5">
				<Trending news={trendingNews} title={recommend} />
			</div>
		</section>
	);
};

export default SingleDetails;
