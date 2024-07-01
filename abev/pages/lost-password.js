import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import LostPasswordForm from "@/components/Authentication/LostPasswordForm";

const LostPassword = () => {
	return (
		<>
			<Navbar />

			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title">Authentication</span>
						<h1>Forgot Your Password?</h1>
					</div>
				</div>
			</div>

			<LostPasswordForm />
			
			<FooterOne />
		</>
	);
};

export default LostPassword;
