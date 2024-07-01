import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const TestimonialSeven = () => {
	// Testimonials API
	const [testimonials, setTestimonials] = React.useState();
	React.useEffect(() => {
		const getTestimonials = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/testimonials-style-7?populate=feedbacks.image`
			);
			setTestimonials(response.data);
		};
		getTestimonials();
	}, []);

	return (
		<>
			{testimonials && (
				<div className="testimonials-area ptb-100">
					<div className="container">
						<div className="section-title">
							<span className="sub-title yellow-color">
								{testimonials.data.attributes.subTitle}
							</span>
							<h2 className="nunito-font">
								{testimonials.data.attributes.title}
							</h2>
						</div>

						<div className="row justify-content-center">
							{testimonials.data.attributes.feedbacks.map(
								(feedback) => (
									<div
										className="col-xl-4 col-lg-6 col-md-6"
										data-aos="fade-up"
										data-aos-duration="800"
										key={feedback.id}
									>
										<div className="testimonials-box">
											<ReactMarkdown>
												{feedback.feedbackText}
											</ReactMarkdown>

											<div className="info d-flex align-items-center">
												<div className="img">
													<img
														src={
															feedback.image.data
																.attributes.url
														}
														alt={
															feedback.image.data
																.attributes
																.alternativeText
														}
													/>
												</div>
												<div className="title">
													<h3>{feedback.name}</h3>
													<span>
														{feedback.designation}
													</span>
												</div>
											</div>
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

export default TestimonialSeven;
