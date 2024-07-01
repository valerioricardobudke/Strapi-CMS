import React from "react";
import Navbar8 from "@/components/Layout/Navigations/Navbar8";
import Banner from "@/components/HomePages/ChatBot/Banner";
import Features from "@/components/HomePages/ChatBot/Features";
import Goal from "@/components/HomePages/ChatBot/Goal";
import Focus from "@/components/HomePages/ChatBot/Focus";
import WhatWeDo from "@/components/HomePages/ChatBot/WhatWeDo";
import Services from "@/components/HomePages/ChatBot/Services";
import TestimonialSix from "@/components/Testimonials/TestimonialSix";
import Faq from "@/components/HomePages/ChatBot/Faq";
import AppDownload from "@/components/HomePages/ChatBot/AppDownload";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Chatbot = () => {
	return (
		<>
			<Navbar8 />

			<Banner />

			<Features />

			<Goal />

			<Focus />

			<WhatWeDo />

			<Services />

			<TestimonialSix />

			<Faq />

			<AppDownload />
			
			<FooterOne />
		</>
	);
};

export default Chatbot;
