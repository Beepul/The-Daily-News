import React, { useEffect, useState } from 'react';

const GoToTop = () => {
	const [ isVisible, setIsVisible ] = useState(false);
	const goToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	const handleScroll = () => {
		let height = 300;
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		if (winScroll > height) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<section className="to__top">
			{isVisible && (
				<div className="top-btn" onClick={goToTop}>
					<i className="bi bi-arrow-up-short" />
				</div>
			)}
		</section>
	);
};

export default GoToTop;
