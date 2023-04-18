import React from 'react';

const Subscribe = ({ title }) => {
	return (
		<div className="subs__sec ">
			<div className="title">
				<h2 dangerouslySetInnerHTML={{ __html: title }} />
			</div>
			<div className="subs__con p-4 mt-3">
				<h4>newsletter</h4>
				<p className="py-3">Join the 12,000+ others and subscribe to the newsletter. Get all latest news</p>
				<div className="pt-3 d-flex">
					<input type="text" placeholder="Enter your email" />
					<span>
						<i className="bi bi-rocket-takeoff" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
