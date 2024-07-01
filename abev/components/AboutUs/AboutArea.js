import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const AboutArea = () => {
	const [aboutUs, setAboutUs] = React.useState();
	React.useEffect(() => {
		const getAboutUs = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/about-us?populate=*`
			);
			setAboutUs(response.data);
		};
		getAboutUs();
	}, []);

	return (
		<>
			{aboutUs && (
				<div className="about-area ptb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<div
									className="about-image bg1"
									style={{
										backgroundImage: `url(${aboutUs.data.attributes.image.data.attributes.url})`,
									}}
								>
									<img
										src={
											aboutUs.data.attributes.image.data
												.attributes.url
										}
										alt={
											aboutUs.data.attributes.image.data
												.attributes.alternativeText
										}
									/>
								</div>
							</div>

							<div className="col-lg-6 col-md-12">
								<div
									className="about-content"
									data-aos="fade-up"
									data-aos-duration="800"
								>
									<span className="sub-title">
										{aboutUs.data.attributes.subTitle}
									</span>
									<h2>{aboutUs.data.attributes.title}</h2>
									<p>{aboutUs.data.attributes.shortText}</p>

									<ul className="about-list">
										{aboutUs.data.attributes.aboutList.map(
											(list) => (
												<li key={list.id}>
													<div className="icon">
														<i className="bx bx-check-double"></i>
													</div>
													{list.text}
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AboutArea;
