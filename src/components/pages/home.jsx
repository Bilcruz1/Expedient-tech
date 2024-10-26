import React from 'react';
import HeroSection from '../heroSection.jsx';
import About from '../about.jsx';
import WhyUs from '../whyUs.jsx';
import Services from '../services.jsx';
import Latest from '../latest.jsx';
import ContactOne from '../contactOne.jsx';
import CoreServices from '../coreServices.jsx';

const Home = () => {
	return (
		<>
			<div className="font-roboto">
				<HeroSection />
				<About />
				<Services />
				<CoreServices />
				<WhyUs />
				{/* <Latest /> */}
				<ContactOne />
			</div>
		</>
	);
};

export default Home;
