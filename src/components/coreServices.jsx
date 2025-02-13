import React, { useState } from 'react';
import IctContracting from './ictContracting';
import IctConsultancy from './ictConsultancy';
import consult from '../assets/images/contract.svg';
import consult2 from '../assets/images/contract2.svg';
import contract from '../assets/images/consult.svg';
import contract2 from '../assets/images/consult2.svg';

export default function CoreServices() {
	const [activeTab, setActiveTab] = useState(0);

	// Tab content data
	const tabs = [
		{
			id: 0,
			label: 'ICT Contracting Services',
			component: <IctContracting />,
			activeImage: contract,
			inactiveImage: contract2,
		},
		{
			id: 1,
			label: 'ICT Consultancy',
			component: <IctConsultancy />,
			activeImage: consult,
			inactiveImage: consult2,
		},
	];

	return (
		<div>
			<div
				className="lg:px-[156px] px-[16px] lg:pt-[20px] "
				id="services"
			>
				<div>
					<h1 className="text-center text-[16px]  pt-[40px] leading-[48px] text-[#FF9500] font-extrabold">
						Our Core Services
					</h1>
					<p className="text-gradient text-[32px] leading-[48px] font-extrabold text-center">
						Exceeding Expectations
					</p>

					<div>
						<div>
							{/* Tab navigation */}
							<div className="flex justify-center gap-[16px] mt-[32px]  ">
								{tabs.map(tab => (
									<div
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`flex items-center justify-center  lg:p-[12px] p-[8px] shadow ${
											activeTab === tab.id
												? 'shadow-[#496115] shadow-md text-gradient font-bold'
												: 'shadow-sm text-[#625B71] font-semibold'
										}`}
										style={{
											// padding: '10px 20px',
											cursor: 'pointer',
											backgroundColor: activeTab === tab.id ? '#0F1115' : '',
											border:
												activeTab === tab.id
													? '1px solid #496115'
													: '1px solid gray',
											borderRadius: '5px',
										}}
									>
										{/* Tab icon (active/inactive) */}
										<img
											src={
												activeTab === tab.id
													? tab.activeImage
													: tab.inactiveImage
											}
											alt="Tab Icon"
											className=" mr-2 " // Adjust size and margin for icons
										/>
										<div className="text-[14px] lg:text-[18px]">
											{' '}
											{tab.label}
										</div>
									</div>
								))}
							</div>

							{/* Tab content */}
							<div style={{}}>{tabs[activeTab].component}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
