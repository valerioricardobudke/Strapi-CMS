import React from "react";
import Navbar5 from "@/components/Layout/Navigations/Navbar5";
import PageTopTitle from "@/components/Common/PageTopTitle";
import WhyChooseUs from "@/components/ServicesThree/WhyChooseUs";
import Services from "@/components/ServicesThree/Services";
import TestimonialFour from "@/components/Testimonials/TestimonialFour";
import PartnerStyle1 from "@/components/Partners/PartnerStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Services3 = () => {
	return (
		<>
			<Navbar5 />

			<PageTopTitle
				subTitle="Our Services"
				title="Our work is delivered by the best team in the world"
			/>

			<WhyChooseUs />

			<Services />

			<TestimonialFour />

			<div className="bg-f9f9f9 br-bottom-100">
				<PartnerStyle1 />
			</div>
			
			<FooterOne />
		</>
	);
};

export default Services3;
