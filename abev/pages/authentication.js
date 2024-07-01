import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import Login from "@/components/Authentication/Login";
import Signup from "@/components/Authentication/Signup";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Authentication = () => {
	return (
		<>
			<Navbar />

			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title">Authentication</span>
						<h1>Howdy! Welcome Back!</h1>
					</div>
				</div>
			</div>

			<div className="profile-authentication-area ptb-100">
				<div className="container">
					<div className="row">
						<Login />
						<Signup />
					</div>
				</div>
			</div>
			
			<FooterOne />
		</>
	);
};

export default Authentication;
