import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import PrivacyPolicyContent from "@/components/privacyPolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => {
	return (
		<>
			<Navbar />

			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<h1>Privacy Policy</h1>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
				</div>
			</div>

			<PrivacyPolicyContent />
			
			<FooterOne />
		</>
	);
};

export default PrivacyPolicy;
