import React, { useState, useEffect } from 'react';
import logo from '../assets/expenditech.svg';
import hiOpen from '../assets/icons/hiOpen.svg';
import hiClose from '../assets/icons/hiClose.svg'; // Import hiClose icon
import arrow_down from '../assets/icons/arrow-down.svg';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'; // For routing
import { Link as ScrollLink, scroller } from 'react-scroll'; // For scrolling inside homepage
import Hamburger from './hamburger.jsx';

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const navigate = useNavigate();
	const location = useLocation();

	// Sections to track for scrolling
	const sections = ['home', 'about', 'services', 'contact'];

	useEffect(() => {
		if (location.pathname === '/contact-us') {
			setActiveSection('contact-us');
		} else {
			setActiveSection('home');
		}
	}, [location]);

	// Add scroll event listener to track active section
	useEffect(() => {
		const handleScroll = () => {
			sections.forEach(section => {
				const sectionElement = document.getElementById(section);
				if (sectionElement) {
					const { top } = sectionElement.getBoundingClientRect();
					if (top >= -100 && top < 200) {
						setActiveSection(section);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sections]);

	const handleOpen = () => {
		setIsOpen(!isOpen); // Toggle menu open state
	};

	const scrollToSection = section => {
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				scroller.scrollTo(section, {
					smooth: true,
					offset: -70, // Adjust this offset as per your navbar height
					duration: 500,
				});
				setActiveSection(section);
			}, 100); // Small delay for navigation
		} else {
			scroller.scrollTo(section, {
				smooth: true,
				offset: -70,
				duration: 500,
			});
			setActiveSection(section);
		}
	};

	// Active and inactive styles for font size and underline
	const activeStyle = {
		fontWeight: 'bold',
		fontSize: '16px',
		position: 'relative',
		background: 'linear-gradient(90deg, #6A9113, #141517)', // Apply the gradient
		WebkitBackgroundClip: 'text', // Required for gradient text
		backgroundClip: 'text', // Required for gradient text
		color: 'transparent',
		// Makes the text fill transparent to show the gradient
	};

	const inactiveStyle = {
		color: '#625B71',
		fontWeight: 'regular',
		fontSize: '16px',
	};

	const underlineStyle = {
		content: '""',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: '-4px',
		height: '2px',
		backgroundColor: '#ffffff',
	};

	return (
		<>
			{isOpen && <Hamburger setIsOpen={setIsOpen} />}
			<div className="fixed z-50 top-0 bg-[#ffffff]  font-roboto lg:w-[calc(100%-32px)] w-[calc(100%-16px)] lg:ml-[16px] ml-[8px] lg:mt-0 mt-[8px]  lg:px-[156px] px-[16px] lg:py-[24px] py-[16px] rounded-md  shadow-xl">
				<div className="flex justify-between">
					<div>
						<a href="#">
							<img
								src={logo}
								alt="Logo"
								className="h-8 md:h-12"
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							/>
						</a>
					</div>

					{/* Button to toggle between hiOpen and hiClose */}
					<button
						className="lg:hidden text-[#ffffff] flex justify-between items-center"
						onClick={handleOpen}
					>
						{/* Conditionally render hiOpen or hiClose based on isOpen state */}
						<img
							src={isOpen ? hiClose : hiOpen} // Toggle between hiOpen and hiClose
							alt=""
						/>
					</button>

					<div className="lg:flex justify-between items-center gap-[20px] hidden font-cabinet-bold text-[16px]">
						<button
							onClick={() => scrollToSection('home')}
							className="cursor-pointer relative"
							style={activeSection === 'home' ? activeStyle : inactiveStyle}
						>
							Home
							{activeSection === 'home' && <span style={underlineStyle} />}
						</button>

						{/* Scroll Link for About Us */}
						<button
							onClick={() => scrollToSection('about')}
							className="cursor-pointer relative"
							style={activeSection === 'about' ? activeStyle : inactiveStyle}
						>
							About Us
							{activeSection === 'about' && <span style={underlineStyle} />}
						</button>

						<button
							onClick={() => scrollToSection('services')}
							className="cursor-pointer relative"
							style={activeSection === 'services' ? activeStyle : inactiveStyle}
						>
							Our Services
							{activeSection === 'services' && <span style={underlineStyle} />}
						</button>

						{/* Route to Property Listing */}
						<RouterLink
							to="/contact-us"
							className="cursor-pointer relative"
							style={
								activeSection === 'contact-us' ? activeStyle : inactiveStyle
							}
							onClick={() => setActiveSection('/contact-us')}
						>
							Contact us
							{activeSection === 'property' && <span style={underlineStyle} />}
						</RouterLink>
					</div>

					<a
						href="https://drive.google.com/file/d/1LCxCn-BX7ZyPuu-aP97ggAiXEpmEgn4Y/view?usp=sharing"
						className="rounded-md hover:cursor-pointer text-gradient border-[#496115] border-[3px] px-[16px] py-[16px] text-[16px] font-semibold lg:flex gap-[8px] items-center hidden"
					>
						<div>
							<img
								src={arrow_down}
								alt=""
							/>
						</div>
						Company Profile
					</a>
				</div>
			</div>
		</>
	);
}
