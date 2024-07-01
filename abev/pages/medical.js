import React from "react";
import Navbar10 from "@/components/Layout/Navigations/Navbar10";
import Banner from "@/components/HomePages/Medical/Banner";
import Features from "@/components/HomePages/Medical/Features";
import Overview from "@/components/HomePages/Medical/Overview";
import WorkingProcess from "@/components/HomePages/Medical/WorkingProcess";
import Team from "@/components/HomePages/Medical/Team";
import RequestAVisit from "@/components/HomePages/Medical/RequestAVisit";
import Blog from "@/components/HomePages/Medical/Blog";
import GetStarted from "@/components/HomePages/Medical/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Medical = () => {
	return (
		<>
			<Navbar10 />

			<Banner />

			<Features />

			<Overview />

			<WorkingProcess />

			<Team />

			<RequestAVisit />

			<Blog />

			<GetStarted />
			
			<div className="bg-f9f9f9">
				<FooterOne />
			</div>
		</>
	);
};

export default Medical;
