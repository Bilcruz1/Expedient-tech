import React from 'react';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules'; // Import required Swiper modules

import home_image from '../assets/images/homePage.png';
import whatsapp from '../assets/icons/whatsapp.svg';
import netflix from '../assets/images/netflix.png';
import buffer from '../assets/images/buffer.png';
import stripe from '../assets/images/stripe.png';
import framer from '../assets/images/framer.png';
import hubspot from '../assets/images/hubspot.png';
import dropbox from '../assets/images/dropbox.png';
import WhatsAppButton from './whatsapp';

export default function HeroSection() {
	const partners = [netflix, buffer, stripe, framer, hubspot, dropbox];

	return (
		<div
			className="bg-[#F5F7F5] relative w-full lg:bg-cover bg-bottom bg-no-repeat lg:px-[156px] px-[16px] pb-[40px]"
			id="home"
		>
			<section className="flex lg:flex-row flex-col justify-between gap-[64px] lg:pt-[178px] pt-[120px] pb-[68px]">
				{/* Text Section */}
				<div className="w-full lg:w-1/2 flex flex-col justify-center">
					<h1 className="lg:text-[48px] text-[24px] leading-[30px] lg:leading-[58px] text-gradient font-extrabold">
						Innovating Today,
						<br /> Empowering Tomorrow
					</h1>
					<p className="text-[#1D1B20] font-sans leading-[24px]  text-[16px] font-medium pt-[24px] ">
						Your trusted partner for comprehensive ICT solutions that drive
						growth and innovation. Whether you need expert consultancy, bespoke
						software development, or reliable IT supply, our team is here to
						help you navigate the complexities of the digital landscape with
						confidence and ease.
					</p>

					<div className="flex lg:gap-[32px] gap-[16px] lg:mt-[48px] mt-[32px] lg:mb-[24px]">
						<a
							className="rounded-md hover:cursor-pointer bg-custom-gradient text-[#ffffff] lg:px-[30px] lg:py-[12px] px-[16px] py-[18px] text-[16px]  font-semibold"
							to="contact"
							duration={500}
							smooth={true}
							offset={-70}
							href="tel:07066026098"
						>
							Schedule a Meeting
						</a>
						<Link
							className="rounded-md hover:cursor-pointer bg-[#ffffff] text-gradient border-2 border-[#496115]  text-[16px] flex justify-between items-center gap-3  font-bold"
							to="contact"
							duration={500}
							smooth={true}
							offset={-70}
						>
							<WhatsAppButton />
						</Link>
					</div>
				</div>

				{/* Image Section */}
				<div className="w-full lg:w-1/2 flex justify-end">
					<img
						src={home_image}
						alt="Home"
						className="w-full object-cover rounded-2xl"
					/>
				</div>
			</section>

			{/* Trusted Partners Section */}
			<p className="text-center pt-[40px] text-[#FF9500] text-[16px] leading-[22px] font-semibold">
				Our Trusted Partners
			</p>

			{/* Swiper Carousel for all screens */}
			<div className="mt-[32px]">
				<Swiper
					slidesPerView={3} // Show 1 slide at a time for carousel effect
					spaceBetween={20} // Space between slides
					pagination={{ clickable: true }} // Enable pagination
					autoplay={{ delay: 2500 }} // Enable autoplay
					modules={[Pagination, Autoplay]}
					breakpoints={{
						640: { slidesPerView: 3, spaceBetween: 30 }, // Show 2 slides on small screens
						768: { slidesPerView: 3, spaceBetween: 40 }, // Show 3 slides on medium screens
						1024: { slidesPerView: 6, spaceBetween: 50 }, // Show 4 slides on large screens
					}}
					className="mySwiper"
				>
					{partners.map((partner, index) => (
						<SwiperSlide key={index}>
							<img
								src={partner}
								alt={`Partner ${index}`}
								className="w-[100px] mx-auto h-[30px] object-contain"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
