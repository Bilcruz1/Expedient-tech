import React from 'react';

export default function IctContracting() {
	return (
		<div>
			<div className="">
				<p className="text-center text-[20px]  leading-[30px] lg:px-[320px] mt-[32px] text-[#1D1B20]">
					Our contracting services provide end-to-end ICT solutions tailored to
					meet the unique challenges of each client. We specialize in:
				</p>

				<div className="flex lg:flex-row flex-col lg:gap-0 mt-[32px]">
					<div className="lg:w-[50%] w-full border border-[#E1E4ED] py-[40px] lg:px-[32px] px-[16px] rounded-lg">
						<p className="bg-[#625B71] text-[#ffffff] p-[10px] rounded-md font-bold text-[16px] w-fit">
							ICT Contracting Services
						</p>
						<div>
							{/* First box with group class */}
							<div className="group p-[20px] border-2 border-[#ffffff] shadow-lg rounded-lg mt-[16px] transition-all duration-300 ease-in-out hover:border-[#496115]">
								<h1 className=" text-[#625B71] font-bold text-[18px] leading-[24px] transition-colors duration-300 group-hover:text-[#557414]">
									Website Development and Design
								</h1>
								<p className=" text-[#4E516C] text-[16px] leading-[24px] pt-[16px] transition-colors duration-300 group-hover:text-[#1D1B20]">
									We build visually compelling, user-friendly websites that
									serve as powerful tools for engaging customers and driving
									business growth. Our websites are optimized for performance,
									accessibility, and SEO, ensuring they deliver results.
								</p>
							</div>

							{/* Second box with group class */}
							<div className="group p-[20px] border-2 border-[#ffffff] shadow-lg rounded-lg mt-[16px] transition-all duration-300 ease-in-out hover:border-[#496115]">
								<h1 className=" text-[#625B71] font-bold text-[18px] leading-[24px] transition-colors duration-300 group-hover:text-[#557414]">
									Custom Software Development
								</h1>
								<p className=" text-[#4E516C] text-[16px] leading-[24px] pt-[16px] transition-colors duration-300 group-hover:text-[#1D1B20]">
									Our software development team crafts bespoke applications
									designed to address specific business challenges. We leverage
									the latest technologies and development methodologies to
									create solutions that are intuitive, secure, and scalable.
								</p>
							</div>

							{/* Third box with group class */}
							<div className="group p-[20px] border-2 border-[#ffffff] shadow-lg rounded-lg mt-[16px] transition-all duration-300 ease-in-out hover:border-[#496115]">
								<h1 className=" text-[#625B71] font-bold text-[18px] leading-[24px] transition-colors duration-300 group-hover:text-[#557414]">
									Printing and Branding Solutions
								</h1>
								<p className=" text-[#4E516C] text-[16px] leading-[24px] pt-[16px] transition-colors duration-300 group-hover:text-[#1D1B20]">
									Beyond ICT, we offer comprehensive printing services for all
									your business needs, from marketing collateral to branded
									materials. Our printing solutions combine quality with
									efficiency, ensuring that your brand stands out.
								</p>
							</div>
							<div className="group p-[20px] border-2 border-[#ffffff] shadow-lg rounded-lg mt-[16px] transition-all duration-300 ease-in-out hover:border-[#496115]">
								<h1 className=" text-[#625B71] font-bold text-[18px] leading-[24px] transition-colors duration-300 group-hover:text-[#557414]">
									General IT Supply
								</h1>
								<p className=" text-[#4E516C] text-[16px] leading-[24px] pt-[16px] transition-colors duration-300 group-hover:text-[#1D1B20]">
									Expedient Techs is your go-to source for a wide range of IT
									products, including computers, servers, networking equipment,
									and software solutions. We provide procurement services that
									are efficient, cost-effective, and tailored to your specific
									requirements.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-[50%] w-full lg:h-[743px] h-[425px] bg-[url('/src/assets/images/contracting.png')]  bg-center  bg-cover lg:my-[30px] lg:rounded-r-lg "></div>
				</div>
			</div>
		</div>
	);
}
