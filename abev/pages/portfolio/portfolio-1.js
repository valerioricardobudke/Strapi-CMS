import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PortfolioStyle1 from "@/components/Portfolio/PortfolioStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Portfolio1 = () => {
	return (
		<>
			<Navbar />

			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title">Portfolio</span>
						<h1>
							We&apos;ve done lot&apos;s of work, Let&apos;s check
							some
						</h1>
					</div>
				</div>
			</div>

			<PortfolioStyle1 />
			
			<FooterOne />
		</>
	);
};

export default Portfolio1;
