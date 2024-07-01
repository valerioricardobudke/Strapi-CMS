import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Overview = () => {
	// Why Choose Us API
	const [whyChooseUs, setWhyChooseUs] = React.useState();
	React.useEffect(() => {
		const getWhyChooseUs = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/about-why-choose-us?populate=*`
			);
			setWhyChooseUs(response.data);
		};
		getWhyChooseUs();
	}, []);

	// Our Goal API
	const [ourGoal, setOurGoal] = React.useState();
	React.useEffect(() => {
		const getOurGoal = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/about-our-goal?populate=*`
			);
			setOurGoal(response.data);
		};
		getOurGoal();
	}, []);

	return (
		<div className="overview-area ptb-100 bg-f9f9f9">
			<div className="container">
				{whyChooseUs && (
					<div className="overview-box">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12 overview-image">
								<img
									src={
										whyChooseUs.data.attributes.image.data
											.attributes.url
									}
									data-aos="fade-up"
									alt={
										whyChooseUs.data.attributes.image.data
											.attributes.alternativeText
									}
								/>
							</div>
							<div className="col-lg-6 col-md-12 overview-content">
								<span className="sub-title">
									{whyChooseUs.data.attributes.subTitle}
								</span>
								<h2>{whyChooseUs.data.attributes.title}</h2>
								<ul className="overview-list">
									{whyChooseUs.data.attributes.reason.map(
										(list) => (
											<li
												data-aos="fade-up"
												data-aos-duration="800"
												key={list.id}
											>
												<span>
													<i className="flaticon-draw-check-mark"></i>
													{list.text}
												</span>
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				)}

				{ourGoal && (
					<div className="overview-box">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12 overview-content">
								<span className="sub-title">
									{ourGoal.data.attributes.subTitle}
								</span>
								<h2>{ourGoal.data.attributes.title}</h2>

								<ul className="overview-list">
									{ourGoal.data.attributes.goalList.map(
										(list) => (
											<li
												data-aos="fade-up"
												data-aos-duration="800"
												key={list.id}
											>
												<span>
													<i className="flaticon-draw-check-mark"></i>
													{list.text}
												</span>
											</li>
										)
									)}
								</ul>
							</div>

							<div className="col-lg-6 col-md-12 overview-image">
								<img
									src={
										ourGoal.data.attributes.image.data
											.attributes.url
									}
									data-aos="fade-up"
									alt={
										ourGoal.data.attributes.image.data
											.attributes.alternativeText
									}
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Overview;
