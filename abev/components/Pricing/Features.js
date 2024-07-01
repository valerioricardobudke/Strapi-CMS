import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Features = () => {
	const [features, setFeatures] = React.useState();
	React.useEffect(() => {
		const getFeatures = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/pricing-feature?populate=*`
			);
			setFeatures(response.data);
		};
		getFeatures();
	}, []);

	return (
		<>
			{features && (
				<div className="features-area pb-75">
					<div className="container">
						<div className="row justify-content-center">
							{features.data.attributes.FeaturesList.map(
								(feature) => (
									<div
										className="col-lg-4 col-md-6 col-sm-6"
										data-aos="fade-up"
										data-aos-duration="800"
										key={feature.id}
									>
										<div className="single-features-item">
											<div className="icon">
												<i
													className={feature.iconName}
												></i>
											</div>
											<h3 className="nunito-font">
												{feature.title}
											</h3>
											<p>{feature.shortText}</p>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Features;
