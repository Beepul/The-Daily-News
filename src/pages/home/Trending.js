import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { clickedNews } from '../../redux/slice/newsSlice';

const Trending = ({ news, title }) => {
	const dispatch = useDispatch();
	const handleClick = (article) => {
		dispatch(clickedNews(article));
	};
	return (
		<div className="horizontal mb-3">
			<div className="title pb-3">
				<h2 dangerouslySetInnerHTML={{ __html: title }} />
			</div>
			<div>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					navigation={true}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10
						},
						480: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30
						}
					}}
					pagination={{
						clickable: true
					}}
					mousewheel={true}
					keyboard={true}
					modules={[ Navigation, Pagination, Mousewheel, Keyboard ]}
					className="mySwiper"
				>
					{news.map((item, index) => (
						<SwiperSlide key={index}>
							<LinkContainer to={'/details'} onClick={() => handleClick(item)}>
								<div className="news__item__con">
									<img
										className="news__img w-100"
										src={item.urlToImage ? item.urlToImage : '/assets/placeholder.jpg'}
										alt="pic"
									/>
									<div className="news__overlay" />
									<h6>{item.title}</h6>
								</div>
							</LinkContainer>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Trending;
