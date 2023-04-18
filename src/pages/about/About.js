import React from 'react';
import '../../sass/about.scss';
import { Container } from 'react-bootstrap';

const About = () => {
	return (
		<Container fluid className="about__sec ">
			<div className="about__title">
				<Container>
					<h4>About Us</h4>
				</Container>
			</div>
			<Container fluid="sm">
				<div className="about__heading mt-5 mb-3">
					<h2>The Daily News </h2>
				</div>
				<div className="about__img mb-4">
					<img
						className="w-100 h-100"
						src="https://assets-cdn.kathmandupost.com/uploads/source/Website%20Pages/about-us-thekathmandupost-boudha.jpg"
					/>
				</div>
				<div className="about__text mb-4">
					<p>
						The Daily Post, the country’s leading English-language daily, was launched in February 1993 as
						Nepal’s first private-run English-language broadsheet. The Post is the second-most widely read
						paper in Nepal after its sister publication, the Nepali-language Kantipur daily.
					</p>

					<p>
						Since establishment, the Post has cultivated a reputation for reliability, veracity and breaking
						news. The Post’s political, business, sports, and arts and culture reporting are supplemented
						with opinions from some of Nepal’s, and the wider world’s, leading intellectuals and analysts.
					</p>

					<p>
						Since July 2009, the paper has been producing a weekend supplement–On Saturday–focusing on
						long-form journalism, satire and creative non-fiction. Apart from its regular pages and weekly
						supplements, the paper also publishes yearly special issues, such as on the Gregorian New Year
						and on its anniversary in February.
					</p>

					<p>
						More recently, the Post has begun conducting investigations into corruption, malpractices and
						sexual harassment.
					</p>

					<p>
						With an estimated daily readership of over 600,000 readers, both on the web and in print, the
						Post has developed a new language to tell Nepal’s stories in English to both local and
						international audiences.
					</p>

					<p>The Post is committed to ethical journalism that privileges facts and the truth.</p>

					<p>The Post is published simultaneously from Kathmandu, Biratnagar, Bharatpur and Nepalgunj.</p>
				</div>
			</Container>
		</Container>
	);
};

export default About;
