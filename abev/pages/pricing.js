import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PricingContent from "@/components/Pricing/PricingContent";
import Features from "@/components/Pricing/Features";
import Faq from "@/components/Pricing/Faq";
import TestimonialOne from "@/components/Testimonials/TestimonialOne";
import GetStarted from "@/components/Common/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Pricing = () => {
	return (
		<>
			<Navbar />

			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title light-green-color">
							Pricing Table
						</span>
						<h1>No Hidden Charge Applied, Choose Your Plan</h1>
					</div>
				</div>
			</div>

			<PricingContent />

			<Features />

			<Faq />

			<TestimonialOne />

			<div className="ptb-100">
				<GetStarted />
			</div>
			
			<FooterOne />
		</>
	);
};

export default Pricing;
