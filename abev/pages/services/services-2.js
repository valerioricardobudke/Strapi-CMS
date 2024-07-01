import React from "react";
import Navbar2 from "@/components/Layout/Navigations/Navbar2";
import HelpDesk from "@/components/ServicesTwo/HelpDesk";
import Services from "@/components/ServicesTwo/Services";
import WorkingProcess from "@/components/ServicesTwo/WorkingProcess";
import GetStarted from "@/components/Common/GetStarted";
import PartnerStyle1 from "@/components/Partners/PartnerStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Services2 = () => {
	return (
		<>
			<Navbar2 />

			<div className="page-title-area bg-black">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title">Our Services</span>
						<h1>
							Our work is delivered by the best team in the world
						</h1>
					</div>
				</div>
			</div>

			<HelpDesk />

			<Services />

			<WorkingProcess />

			<div className="pb-100">
				<GetStarted />
			</div>

			<div className="bg-fff4f8">
				<PartnerStyle1 />
			</div>
			
			<FooterOne />
		</>
	);
};

export default Services2;
