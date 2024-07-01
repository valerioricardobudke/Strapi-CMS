import React from "react";
import Navbar6 from "@/components/Layout/Navigations/Navbar6";
import Banner from "@/components/HomePages/BigData/Banner";
import Partner from "@/components/HomePages/BigData/Partner";
import Features from "@/components/HomePages/BigData/Features";
import Overview from "@/components/HomePages/BigData/Overview";
import WhyChooseUs from "@/components/HomePages/BigData/WhyChooseUs";
import WorkingProcess from "@/components/HomePages/BigData/WorkingProcess";
import Resources from "@/components/HomePages/BigData/Resources";
import TestimonialFive from "@/components/Testimonials/TestimonialFive";
import Faq from "@/components/HomePages/BigData/Faq";
import Blog from "@/components/HomePages/BigData/Blog";
import FreeTrial from "@/components/HomePages/BigData/FreeTrial";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const BigData = () => {
	return (
		<>
			<Navbar6 />

			<Banner />

			<Partner />

			<Features />

			<Overview />

			<WhyChooseUs />

			<WorkingProcess />

			<Resources />

			<TestimonialFive />

			<Faq />

			<Blog />

			<FreeTrial />
			
			<FooterOne />
		</>
	);
};

export default BigData;
