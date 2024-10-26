import React from 'react';
import mail from '../assets/icons/messageMail.svg';
import whatsapp from '../assets/icons/messageWhatsapp.svg';

export default function ContactOne() {
	return (
		<div>
			<div className="lg:px-[320px] px-[16px] lg:py-[120px] py-[64px] ">
				<div>
					<p className="text-center flex justify-center  text-[20px] leading-[30px]   text-[#625B71]">
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
		</div>
	);
}
