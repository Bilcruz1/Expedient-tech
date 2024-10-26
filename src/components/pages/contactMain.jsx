import React from 'react';

import mail from '../../assets/icons/messageMail.svg';
import whatsapp from '../../assets/icons/messageWhatsapp.svg';

export default function ContactMain() {
	return (
		<div>
			<div className="pt-[134px] font-roboto">
				<p className="text-center text-gradient text-[48px] font-extrabold">
					Let’s talk
				</p>

				<div className="lg:px-[320px] px-[16px] p-[32px] ">
					<div>
						<p className="text-center flex justify-center  text-[20px] leading-[30px] text-[#625B71]">
							Ready to elevate your business with cutting-edge ICT solutions?
							Contact Expedient Techs Limited today to discuss your needs and
							discover how we can help you achieve your goals. Our team is ready
							to provide the expert guidance and innovative solutions that will
							drive your success.
						</p>
						<div className="flex justify-center items-center lg:flex-row flex-col pt-[32px] px-[16px] lg:gap-[41px] gap-[24px]">
							<div className="flex gap-[12px]">
								<div>
									<img
										src={mail}
										alt="mail"
									/>
								</div>
								<div>
									<p className="text-gradient text-[14px] leading-[20px] font-semibold">
										Email Address:
									</p>

									<p className="text-[#6D758F] text-[16px] leading-[20px] font-semibold py-[12px]">
										<a
											href="mailto:mailinfo@expedienttechs.com"
											className="hover:underline"
										>
											mailinfo@expedienttechs.com
										</a>
									</p>
									<p className="text-[#6D758F] text-[16px] leading-[20px] font-semibold">
										<a
											href="mailto:expedienttechs@gmail.com"
											className="hover:underline"
										>
											expedienttechs@gmail.com
										</a>
									</p>
								</div>
							</div>
							<div className="flex gap-[12px]">
								<div>
									<img
										src={whatsapp}
										alt="whatsapp"
									/>
								</div>
								<div>
									<p className="text-gradient text-[14px] leading-[20px] font-semibold">
										Phone & WhatsApp Contacts:
									</p>
									<p className="text-[#6D758F] text-[16px] leading-[20px] font-semibold py-[12px]">
										+234 706 602 6098
									</p>
									<p className="text-[#6D758F] text-[16px] leading-[20px] font-semibold">
										+234 704 692 2644
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<form className="lg:px-[156px] px-[16px] pt-[48px]">
					{/* Email Subject */}
					<div className="flex flex-col">
						<label
							htmlFor="subject"
							className="text-[#625B71] text-[14px] mb-[8px] leading-[20px] font-semibold"
						>
							Email Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							placeholder="Contract Partnership Request"
							className="border-[1px] border-[#DEDEDE] lg:text-[24px] text-[16px] leading-[42px] placeholder:font-normal font-semibold text-[#1D1B20] focus:border-[#496115] rounded-md py-2 px-3 focus:outline-none transition-colors duration-300"
						/>
					</div>

					{/* Message Body */}
					<div className="flex flex-col mt-[32px]">
						<label
							htmlFor="message"
							className="text-[#625B71] text-[14px] mb-[8px] leading-[20px] font-semibold"
						>
							Message Body
						</label>
						<textarea
							id="message"
							name="message"
							rows="6"
							placeholder="Type message here"
							className="border-[1px] border-[#DEDEDE] lg:text-[24px] text-[16px] leading-[42px] placeholder:font-normal font-semibold text-[#1D1B20] focus:border-[#496115] rounded-md py-2 px-3 focus:outline-none transition-colors duration-300"
						></textarea>
					</div>

					{/* Submit Button */}
					<div className="mt-[32px] mb-[80px]">
						<button
							type="submit"
							className="bg-custom-gradient text-white py-[18px] px-[16px] text-[16px] leading-[20px] rounded-md font-semibold"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
