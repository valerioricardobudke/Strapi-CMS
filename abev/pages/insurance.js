import React from "react";
import Navbar4 from "@/components/Layout/Navigations/Navbar4";
import Banner from "@/components/HomePages/Insurance/Banner";
import Features from "@/components/HomePages/Insurance/Features";
import Goal from "@/components/HomePages/Insurance/Goal";
import HowToApply from "@/components/HomePages/Insurance/HowToApply";
import Target from "@/components/HomePages/Insurance/Target";
import TestimonialThree from "@/components/Testimonials/TestimonialThree";
import Services from "@/components/HomePages/Insurance/Services";
import Faq from "@/components/HomePages/Insurance/Faq";
import JoinOurCommunity from "@/components/HomePages/Insurance/JoinOurCommunity";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Insurance = () => {
	return (
		<>
			<Navbar4 />

			<Banner />

			<Features />

			<Goal />

			<HowToApply />

			<Target />

			<TestimonialThree />

			<Services />

			<Faq />

			<JoinOurCommunity />
			
			<FooterOne />
		</>
	);
};

export default Insurance;
