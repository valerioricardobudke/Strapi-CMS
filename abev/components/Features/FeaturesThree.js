import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FeaturesThree = () => {
	// sales-increase API
	const [salesIncrease, setSalesIncrease] = React.useState();
	React.useEffect(() => {
		const getSalesIncrease = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/big-data-sales-increase?populate=*`
			);
			setSalesIncrease(response.data);
		};
		getSalesIncrease();
	}, []);

	// big-data-risk-management API
	const [riskManagement, setRiskManagement] = React.useState();
	React.useEffect(() => {
		const getRiskManagement = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/big-data-risk-management?populate=*`
			);
			setRiskManagement(response.data);
		};
		getRiskManagement();
	}, []);

	return (
		<>
			<div className="overview-area ptb-100 bg-f9f9f9">
				<div className="container">
					<div className="section-title">
						<h2 className="nunito-font">
							Big Data Value & Benefits
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Consectetur mauris amet, placerat fames orci
							elementum adipiscing.
						</p>
					</div>

					{salesIncrease && (
						<div className="overview-item-style-two">
							<div className="row align-items-center">
								<div
									className="col-lg-6 col-md-12 overview-image"
									data-aos="fade-up"
									data-aos-duration="800"
								>
									<img
										src={
											salesIncrease.data.attributes.image
												.data.attributes.url
										}
										alt={
											salesIncrease.data.attributes.image
												.data.attributes.alternativeText
										}
									/>
								</div>

								<div className="col-lg-6 col-md-12 overview-content">
									<h2 className="nunito-font">
										{salesIncrease.data.attributes.title}
									</h2>
									<p>
										{
											salesIncrease.data.attributes
												.shortText
										}
									</p>
									<ul className="overview-list">
										{salesIncrease.data.attributes.card.map(
											(info) => (
												<li
													data-aos="fade-up"
													data-aos-duration="800"
													key={info.id}
												>
													<i className="flaticon-draw-check-mark"></i>
													<h3>{info.title}</h3>
													<p>{info.shortText}</p>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
					)}

					{riskManagement && (
						<div className="overview-item-style-two">
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-12 overview-content">
									<h2 className="nunito-font">
										{riskManagement.data.attributes.title}
									</h2>
									<p>
										{
											riskManagement.data.attributes
												.shortText
										}
									</p>
									<ul className="overview-list">
										{riskManagement.data.attributes.card.map(
											(info) => (
												<li
													data-aos="fade-up"
													data-aos-duration="800"
													key={info.id}
												>
													<i className="flaticon-draw-check-mark"></i>
													<h3>{info.title}</h3>
													<p>{info.shortText}</p>
												</li>
											)
										)}
									</ul>
								</div>

								<div
									className="col-lg-6 col-md-12 overview-image"
									data-aos="fade-up"
									data-aos-duration="800"
								>
									<img
										src={
											riskManagement.data.attributes.image
												.data.attributes.url
										}
										alt={
											riskManagement.data.attributes.image
												.data.attributes.alternativeText
										}
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default FeaturesThree;
