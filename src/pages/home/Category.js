import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Category = ({ title }) => {
	return (
		<div className="category__sec">
			<div className="title">
				<h2 dangerouslySetInnerHTML={{ __html: title }} />
			</div>
			<div>
				<ul>
					<li>
						<LinkContainer to={`/category/business`}>
							<Nav.Link>Business</Nav.Link>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to={`/category/entertainment`}>
							<Nav.Link>Entertainment</Nav.Link>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to={`/category/general`}>
							<Nav.Link>General</Nav.Link>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to={`/category/health`}>
							<Nav.Link>Health</Nav.Link>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to={`/category/science`}>
							<Nav.Link>Science</Nav.Link>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to={`/category/sports`}>
							<Nav.Link>Sports</Nav.Link>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to={`/category/technology`}>
							<Nav.Link>Technology</Nav.Link>
						</LinkContainer>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Category;
