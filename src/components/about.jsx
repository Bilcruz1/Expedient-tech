import React from 'react';
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home3.png';
import { Link } from 'react-scroll';
import qa from '../assets/icons/qa.svg';
import qah from '../assets/icons/qah.svg';
import ee from '../assets/icons/ee.svg';
import eeh from '../assets/icons/eeh.svg';
import cs from '../assets/icons/cs.svg';
import csh from '../assets/icons/csh.svg';

export default function About() {
	// Define an array of objects with the required content for each section
	const sections = [
		{
			title: 'Quality Assurances',
			description:
				'We implement rigorous quality control measures throughout every phase of our projects, from planning and development to implementation and maintenance. This guarantees that our solutions consistently meet the highest standards.',
			icon: qah,
			hoverIcon: qa,
		},
		{
			title: 'Expert & Experience',
			description:
				'Our team consists of seasoned ICT professionals with diverse skill sets and extensive experience in the industry. We continuously update our knowledge and skills to stay ahead of the curve in an ever-evolving tech landscape.',
			icon: eeh,
			hoverIcon: ee,
		},
		{
			title: 'Customer Satisfaction',
			description:
				'We measure our success by the satisfaction of our clients. We prioritize open communication, responsive support, and a deep understanding of our clients objectives to deliver outcomes that exceed expectations.',
			icon: csh,
			hoverIcon: cs,
		},
	];

	return (
		<div>
			<div
				className="lg:px-[156px] px-[16px] lg:pt-[80px] pt-[40px]"
				id="about"
			>
				<div>
					<h1 className="text-center text-[16px]  leading-[48px] text-[#FF9500] font-extrabold">
						Who We Are
					</h1>
					<p className="text-gradient  text-[32px] leading-[58px] font-extrabold text-center">
						Expedient Techs LTD
					</p>
					<p className="text-[20px]  pt-[12px] leading-[30px] text-[#1D1B20] text-center lg:px-[100px]">
						As a leading remote IT company in Nigeria, committed to delivering
						top-notch ICT solutions and services. With a focus on excellence and
						innovation, we offer a comprehensive range of services that include
						IT consultation and contracting, technology training for youths,
						general IT supply, software development, and website development.
						Our mission is to empower businesses and government agencies with
						cutting-edge IT support while guiding the next generation toward
						thriving careers in technology.
					</p>

					{/* Map through the sections array to render each section */}
					<div className="flex lg:flex-row flex-col gap-[24px] lg:px-[240px] lg:py-[80px] py-[50px]">
						{sections.map((section, index) => (
							<div
								className="lg:w-1/3 px-[30px] py-[20px] bg-[#F9F9F7] group hover:bg-[#ffffff] hover:border-2 shadow-2xl rounded-xl hover:border-[#496115] transition-all duration-300"
								key={index}
							>
								{/* Icon section with hover effect to change image */}
								<p>
									<img
										src={section.icon} // Normal image
										alt={section.title}
										className="p-[8px] rounded-md  transition-all duration-300 group-hover:hidden" // Hide the image on hover
									/>
									<img
										src={section.hoverIcon} // Hover image (Add a hoverIcon property to your section)
										alt={section.title}
										className="p-[8px] rounded-md  transition-all duration-300 hidden group-hover:inline-block" // Show image on hover
									/>
								</p>

								{/* Title section with hover effect to change text color */}
								<p className="pt-[16px] text-[18px] leading-[16px] font-bold text-[#625B71] transition-all duration-300 group-hover:text-[#536F14]">
									{section.title}
								</p>

								{/* Description text */}
								<p className="pt-[16px] text-[#4E516C] text-[16px] group-hover:text-[#1D1B20] transition-all duration-300">
									{section.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
