import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import TeamOne from "@/components/Team/TeamOne";
import TeamTwo from "@/components/Team/TeamTwo";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Team = () => {
	return (
		<>
			<Navbar />

			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title">Our Creative Team</span>
						<h1>Our team believes you deserve only the best</h1>
					</div>
				</div>
			</div>

			<TeamOne />

			<TeamTwo />
			
			<FooterOne />
		</>
	);
};

export default Team;
