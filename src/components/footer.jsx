import React from 'react';
import footer_logo from '../assets//logofooter.svg';
import { Link } from 'react-scroll';
import linkedinf from '../assets/icons/linkedinf.svg';
import whatsappf from '../assets/icons/whatsappf.svg';
import mail from '../assets/icons/mailf.svg';

import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
	return (
		<div>
			<div className="bg-custom-gradient font-roboto   lg:px-[156px] px-[16px]  py-[24px]  ">
				<div className="flex lg:flex-row flex-col items-center lg:justify-between gap-[24px]">
					<img
						src={footer_logo}
						alt="footer_logo"
						className=" cursor-pointer"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					/>
					<div className=" cursor-pointer lg:hidden gap-[16px] flex">
						<a
							href="#
"
						>
							<img
								src={mail}
								alt="mail"
							/>
						</a>
						<a href="#">
							<img
								src={whatsappf}
								alt="whatsappf"
							/>
						</a>
						<a href="#">
							<img
								src={linkedinf}
								alt="linkedinf"
							/>
						</a>
					</div>
					<div className="text-[#ffff] text-[16px] leading-[22px]  justify-between items-center  text-center px-[16px] ">
						<p>
							Copyright © 2024 Expedient Techs Limited | All Rights Reserved
						</p>
					</div>
					<div className=" cursor-pointer lg:flex hidden gap-[16px]">
						<a
							href="#
"
						>
							<img
								src={mail}
								alt="mail"
							/>
						</a>
						<a href="#">
							<img
								src={whatsappf}
								alt="whatsappf"
							/>
						</a>
						<a href="#">
							<img
								src={linkedinf}
								alt="linkedinf"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
