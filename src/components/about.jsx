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
				'We ensure top quality at every stage, from planning to maintenance, delivering solutions that meet the highest standards.',
			icon: qah,
			hoverIcon: qa,
		},
		{
			title: 'Expert & Experience',
			description:
				'Our expert team brings diverse skills and deep industry experience, staying ahead in the ever-evolving tech landscape.',
			icon: eeh,
			hoverIcon: ee,
		},
		{
			title: 'Customer Satisfaction',
			description:
				'We prioritize customer satisfaction by delivering innovative, reliable, and tailored solutions that exceed expectations.',
			icon: csh,
			hoverIcon: cs,
		},
	];

	return (
		<div>
			<div
				className="lg:px-[156px] px-[16px] lg:pt-[80px] pt-[40px] bg-custom-gradient"
				id="about"
			>
				<div>
					<h1 className="text-center text-[16px]  leading-[48px] text-[#FF9800] font-extrabold">
						Who We Are?
					</h1>
					<p className="text-white  text-[32px] leading-[58px] font-extrabold text-center">
					Your Trusted IT Partner
					</p>
					<p className="text-[20px]  pt-[12px] leading-[30px] font-regular text-white text-center lg:px-[0px]">
					As a remote IT company with a highly professional team and international standard expertise, 
					we deliver top tier ICT solutions. Our services include Software Development, IT consultation, 
					Contracting, tech training, IT supply, software, and UI/UX design empowering businesses 
					and government agencies while shaping future tech leaders.
					</p>

					{/* Map through the sections array to render each section */}
					<div className="flex lg:flex-row flex-col gap-[24px] lg:px-[0px] lg:py-[80px] py-[50px]">
						{sections.map((section, index) => (
							<div
								className="lg:w-1/3 px-[30px] py-[20px] bg-[#F9F9F7] group hover: rounded-xl transition-all duration-300"
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
