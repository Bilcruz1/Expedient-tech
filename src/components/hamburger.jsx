import React, { useEffect, useState } from 'react';
import hiClose from '../assets/icons/hiClose.svg';
import { Link as ScrollLink } from 'react-scroll'; // For scrolling within the page
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // For routing to other pages
import logo from '../assets/logo.svg';
import arrow_down from '../assets/icons/arrow-down.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import { InlineWidget } from 'react-calendly';

function Hamburger({ setIsOpen }) {
	const [animation, setAnimation] = useState('');
	const [showCalendly, setShowCalendly] = useState(false);
	const navigate = useNavigate(); // To handle routing

	useEffect(() => {
		setAnimation('animate-fadeSlideDown');
	}, []);

	const handleClose = () => {
		setAnimation('animate-fadeSlideUp');
		setTimeout(() => setIsOpen(false), 500); // Adjust timeout to match animation duration
	};

	const handleShowCalendly = () => {
		setShowCalendly(true);
	};

	const handleHideCalendly = () => {
		setShowCalendly(false);
	};

	const handleNavigation = (path, sectionId = null) => {
		if (path === '/') {
			navigate('/');
			handleClose();
			setTimeout(() => {
				if (sectionId) {
					const element = document.getElementById(sectionId);
					if (element) {
						window.scrollTo({
							top: element.offsetTop - 70,
							behavior: 'smooth',
						});
					}
				}
			}, 100); // Delay to ensure route change has completed
		} else {
			navigate(path);
			handleClose();
		}
	};

	return (
		<div className="fixed top-0 left-0 w-[calc(100%-16px)] ml-[8px] mx-[16px] h-full z-50">
			<div
				className="fixed inset-0 bg-black opacity-50"
				onClick={handleClose}
			></div>
			<div
				className={`relative w-full  pt-[24px] font-roboto  transform transition-transform duration-500 ease-in-out ${animation}`}
			>
				<div className="flex justify-between px-4">
					<a href="#">
						<img
							src={logo}
							alt="Logo"
							className="h-8 md:h-12"
							onClick={() => {
								handleNavigation('/');
							}}
						/>
					</a>
				</div>

				<div className="bg-[#ffffff] rounded-md  w-full pt-[12px] h-full  flex flex-col px-[24px]  gap-[24px] pb-[24px]">
					{/* Scroll to Home Section */}
					<ScrollLink
						to="home"
						duration={500}
						smooth={true}
						offset={-70} // Adjust to navbar height
						onClick={() => handleNavigation('/', 'home')}
						className="text-[24px] leading-[22px] cursor-pointer text-[#625B71] mt-[24px]"
					>
						Home
					</ScrollLink>

					{/* Scroll to About Us Section */}
					<ScrollLink
						to="about"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'about')}
						className="text-[24px] leading-[22px] cursor-pointer text-[#625B71]"
					>
						About Us
					</ScrollLink>

					<ScrollLink
						to="services"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'services')}
						className="text-[24px] leading-[22px] cursor-pointer text-[#625B71]"
					>
						Services
					</ScrollLink>
					<RouterLink
						to="/contact-us"
						className="text-[24px] leading-[22px] cursor-pointer text-[#625B71]"
						onClick={() => handleNavigation('/property-listing')}
					>
						Contact Us
					</RouterLink>

					<div className=" mt-[12px]">
						<a
							href="https://drive.google.com/file/d/1LCxCn-BX7ZyPuu-aP97ggAiXEpmEgn4Y/view?usp=sharing"
							className="rounded-md hover:cursor-pointer  text-[black] text-gradient border-[#496115] border-[3px]  py-[12px] text-[16px] font-semibold flex gap-[8px] justify-center items-center "
						>
							<div>
								<img
									src={arrow_down}
									alt=""
								/>
							</div>
							Our Company Profile
						</a>
						<a
							href="tel: +2347066026098"
							className="rounded-md hover:cursor-pointer mt-[16px]  text-[black] text-gradient border-[#496115] border-[3px]  py-[12px] text-[16px] font-semibold flex gap-[8px] justify-center  "
						>
							<div>
								<img
									src={whatsapp}
									alt="whatsapp"
								/>
							</div>
							Let’s Connect
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
