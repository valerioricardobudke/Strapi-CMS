import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const PartnerStyle2 = () => {
	// Partner API
	const [partner, setPartner] = React.useState();
	React.useEffect(() => {
		const getPartner = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/partner?populate=partnersList.image`
			);
			setPartner(response.data);
		};
		getPartner();
	}, []);

	return (
		<>
			{partner && (
				<div className="partner-area pb-100">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-4 col-md-12">
								<div className="partner-title">
									{partner.data.attributes.title}
								</div>
							</div>
							<div className="col-lg-8 col-md-12">
								<div className="partner-item-lists">
									<div className="row align-items-center">
										{partner.data.attributes.partnersList
											.slice(0, 4)
											.map((partnerLogo) => (
												<div
													className="col-lg-3 col-md-3 col-sm-3 col-6"
													key={partnerLogo.id}
												>
													<div className="partner-item">
														<img
															src={
																partnerLogo
																	.image.data
																	.attributes
																	.url
															}
															alt={
																partnerLogo
																	.image.data
																	.attributes
																	.alternativeText
															}
														/>
													</div>
												</div>
											))}
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

export default PartnerStyle2;
