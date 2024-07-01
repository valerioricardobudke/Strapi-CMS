import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const ContactInfo = () => {
	const [contactInfo, setContactInfo] = React.useState();
	React.useEffect(() => {
		const getContactInfo = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/contact-info?populate=*`
			);
			setContactInfo(response.data);
		};
		getContactInfo();
	}, []);

	return (
		<>
			{contactInfo && (
				<div className="contact-info-area bg-f1f5fd">
					<div className="container">
						<div className="contact-info-inner">
							<div className="row justify-content-center">
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="single-contact-info-box">
										<div className="icon bg1">
											<i className="bx bx-phone-call"></i>
										</div>
										<h3>
											{
												contactInfo.data.attributes
													.phoneNumber1
											}
										</h3>
										<h3>
											{
												contactInfo.data.attributes
													.phoneNumber2
											}
										</h3>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="single-contact-info-box">
										<div className="icon">
											<i className="bx bx-envelope"></i>
										</div>
										<h3>
											{contactInfo.data.attributes.email1}
										</h3>
										<h3>
											{contactInfo.data.attributes.email2}
										</h3>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="single-contact-info-box">
										<div className="icon bg2">
											<i className="bx bx-map"></i>
										</div>
										<h3>
											{
												contactInfo.data.attributes
													.address
											}
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ContactInfo;
