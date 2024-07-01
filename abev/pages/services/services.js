import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import HelpDesk from "@/components/Services/HelpDesk";
import Overview from "@/components/Services/Overview";
import WhatWeDo from "@/components/Services/WhatWeDo";
import Faq from "@/components/Services/Faq";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import PartnerStyle1 from "@/components/Partners/PartnerStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Services = () => {
	return (
		<>
			<Navbar />

			<PageTopTitle
				subTitle="Our Services"
				title="Our work is delivered by the best team in the world"
			/>

			<HelpDesk />

			<Overview />

			<WhatWeDo />

			<Faq />

			<SubscribeStyle1 />

			<PartnerStyle1 />
			
			<FooterOne />
		</>
	);
};

export default Services;
