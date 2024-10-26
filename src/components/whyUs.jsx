import React from 'react';
import messagePic from '../assets/images/messagePic.png';
import quotesOpen from '../assets/icons/quotesOpen.svg';
import quotesClose from '../assets/icons/quotesClose.svg';
import waterMark from '../assets/icons/waterMark.svg';

export default function WhyUs() {
	return (
		<>
			<div className="relative flex justify-center items-center lg:pb-[80px] ">
				<img
					src={waterMark}
					alt="Watermark"
					className="absolute left-0 hidden lg:block"
				/>

				{/* Make the flex column on small screens and row on larger screens */}

				<div className="flex flex-col-reverse lg:flex-row gap-[60px] lg:pt-[160px] pt-[80px] px-5 ">
					{/* Ensure the image is responsive */}
					<div className="flex justify-center lg:justify-start">
						<img
							src={messagePic}
							alt="messagePic"
							className="w-full h-auto lg:h-[350px]" // Make the image responsive
						/>
					</div>

					<div className="relative px-[16px]">
						<h1 className="text-center text-[#FF9500]  text-[16px] leading-[48px] font-extrabold">
							Why Expedient Techs
						</h1>

						{/* Relative container for the text and quotes */}
						<div className=" flex pt-[16px] lg:gap-5 ">
							{/* Opening quote image */}
							<div>
								<img
									src={quotesOpen}
									alt="Quotes Open"
								/>
							</div>

							{/* Text content */}
							<p className="text-center w-full lg:w-[350px] py-[0px] font-medium text-[20px] leading-[30px] ">
								Choosing Expedient Techs Limited means partnering with a team
								that is dedicated to your success. We bring a wealth of
								experience, a commitment to excellence, and a passion for
								technology to every project. Our goal is to empower your
								business with the tools and solutions it needs to thrive in a
								competitive landscape.
							</p>

							{/* Closing quote image positioned at the bottom-right */}
							<div className="absolute bottom-0 lg:-right-[45px] -right-[1px]">
								<img
									src={quotesClose}
									alt="Quotes Close"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
