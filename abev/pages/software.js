import React from "react";
import Navbar9 from "@/components/Layout/Navigations/Navbar9";
import Banner from "@/components/HomePages/Software/Banner";
import HelpDesk from "@/components/HomePages/Software/HelpDesk";
import Screenshots from "@/components/HomePages/Software/Screenshots";
import Partners from "@/components/HomePages/Software/Partners";
import Overview from "@/components/HomePages/Software/Overview";
import Funfacts from "@/components/HomePages/Software/Funfacts";
import TestimonialOne from "@/components/Testimonials/TestimonialOne";
import Pricing from "@/components/HomePages/Software/Pricing";
import Faq from "@/components/HomePages/Software/Faq";
import Blog from "@/components/HomePages/Software/Blog";
import AppDownload from "@/components/HomePages/Software/AppDownload";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Software = () => {
	return (
		<>
			<Navbar9 />

			<Banner />

			<HelpDesk />

			<Screenshots />

			<Partners />

			<Overview />

			<Funfacts />

			<TestimonialOne />

			<Pricing />

			<Faq />

			<Blog />

			<AppDownload />
			
			<FooterOne />
		</>
	);
};

export default Software;
