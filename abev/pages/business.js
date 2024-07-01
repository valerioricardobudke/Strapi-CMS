import React from "react";
import Navbar2 from "@/components/Layout/Navigations/Navbar2";
import Banner from "@/components/HomePages/Business/Banner";
import HelpDesk from "@/components/HomePages/Business/HelpDesk";
import About from "@/components/HomePages/Business/About";
import Services from "@/components/HomePages/Business/Services";
import Faq from "@/components/HomePages/Business/Faq";
import TestimonialOne from "@/components/Testimonials/TestimonialOne";
import Team from "@/components/HomePages/Business/Team";
import CaseStudies from "@/components/HomePages/Business/CaseStudies";
import Funfacts from "@/components/HomePages/Business/Funfacts";
import WorkingProcess from "@/components/HomePages/Business/WorkingProcess";
import GetStarted from "@/components/Common/GetStarted";
import Blog from "@/components/HomePages/Business/Blog";
import PartnerStyle1 from "@/components/Partners/PartnerStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Business = () => {
	return (
		<>
			<Navbar2 />

			<Banner />

			<HelpDesk />

			<About />

			<Services />

			<Faq />

			<TestimonialOne />

			<Team />
			
			<CaseStudies />

			<Funfacts />

			<WorkingProcess />

			<GetStarted />

			<Blog />

			<div className="bg-fff4f8">
				<PartnerStyle1 />
			</div>
			
			<FooterOne />
		</>
	);
};

export default Business;
