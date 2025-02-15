import React from 'react';

export default function IctConsultancy() {
	return (
		<div>
			<div className="">
				<p className="text-center text-[20px]  leading-[30px] lg:px-[320px] mt-[32px] text-[#1D1B20]">
					Our consultancy services are designed to help organizations harness
					the full potential of technology. We provide strategic insights and
					practical advice on various aspects of ICT, including:
				</p>

				<div className="flex lg:flex-row flex-col lg:gap-0 mt-[32px]">
					<div className="lg:w-[50%] w-full border border-[#E1E4ED] py-[40px] lg:px-[32px] px-[16px] rounded-lg">
						<p className="bg-[#625B71] text-[#ffffff] p-[10px] rounded-md font-bold text-[16px] w-fit">
						Our IT Consultancy Services
						</p>
						<div>
							{/* First box with group class */}
							<div className="group p-[20px] border-2 border-[#ffffff] shadow-lg rounded-lg mt-[16px] transition-all duration-300 ease-in-out hover:border-[#496115]">
								<h1 className=" text-[#625B71] font-bold text-[18px] leading-[24px] transition-colors duration-300 group-hover:text-[#557414]">
									Digital Transformation
								</h1>
								<p className=" text-[#4E516C] text-[16px] leading-[24px] pt-[16px] transition-colors duration-300 group-hover:text-[#1D1B20]">
									Guiding businesses through the process of integrating digital
									technologies into all areas of their operations, fundamentally
									changing how they operate and deliver value to customers.
								</p>
							</div>

							{/* Second box with group class */}
							<div className="group p-[20px] border-2 border-[#ffffff] shadow-lg rounded-lg mt-[16px] transition-all duration-300 ease-in-out hover:border-[#496115]">
								<h1 className=" text-[#625B71] font-bold text-[18px] leading-[24px] transition-colors duration-300 group-hover:text-[#557414]">
									Technology Integration
								</h1>
								<p className=" text-[#4E516C] text-[16px] leading-[24px] pt-[16px] transition-colors duration-300 group-hover:text-[#1D1B20]">
									Assisting in the seamless integration of new technologies into
									existing systems, minimizing disruption and maximizing
									efficiency.
								</p>
							</div>

							{/* Third box with group class */}
							<div className="group p-[20px] border-2 border-[#ffffff] shadow-lg rounded-lg mt-[16px] transition-all duration-300 ease-in-out hover:border-[#496115]">
								<h1 className=" text-[#625B71] font-bold text-[18px] leading-[24px] transition-colors duration-300 group-hover:text-[#557414]">
									IT Infrastructure
								</h1>
								<p className=" text-[#4E516C] text-[16px] leading-[24px] pt-[16px] transition-colors duration-300 group-hover:text-[##1D1B20]">
									Assessing, planning, and optimizing IT infrastructures to
									ensure they are robust, secure, and capable of supporting
									business growth.
								</p>
							</div>
							<div className="group p-[20px] border-2 border-[#ffffff] shadow-lg rounded-lg mt-[16px] transition-all duration-300 ease-in-out hover:border-[#496115]">
								<h1 className=" text-[#625B71] font-bold text-[18px] leading-[24px] transition-colors duration-300 group-hover:text-[#557414]">
									Training Programs
								</h1>
								<p className=" text-[#4E516C] text-[16px] leading-[24px] pt-[16px] transition-colors duration-300 group-hover:text-[#1D1B20]">
									We offer specialized training programs aimed at upskilling
									your workforce in the latest ICT trends and technologies. Our
									training modules are designed to equip your team with the
									necessary skills to navigate and excel in a rapidly changing
									tech landscape.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-[50%] w-full lg:h-[743px] h-[425px] justify-center bg-[url('/src/assets/images/consulting.png')] align-center bg-center  bg-cover lg:my-[30px] lg:rounded-r-lg "></div>
				</div>
			</div>
		</div>
	);
}
