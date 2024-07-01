import React from "react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TestimonialOne = () => {
	// Testimonials API
	const [testimonials, setTestimonials] = React.useState();
	React.useEffect(() => {
		const getTestimonials = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/testimonials-style-1?populate=feedbacks.image`
			);
			setTestimonials(response.data);
		};
		getTestimonials();
	}, []);

	return (
		<>
			{testimonials && (
				<div className="testimonials-area bg-1d2b53 ptb-100">
					<div className="container">
						<div className="section-title white-color">
							<span className="sub-title">
								{testimonials.data.attributes.subTitle}
							</span>
							<h2>{testimonials.data.attributes.title}</h2>
						</div>

						<div className="testimonials-slides">
							<Carousel
								showArrows={false}
								showIndicators={false}
								autoPlay={false}
								infiniteLoop={false}
								emulateTouch={true}
								showThumbs={true}
							>
								{testimonials.data.attributes.feedbacks.map(
									(feedback) => (
										<div
											className="single-testimonials-item"
											key={feedback.id}
										>
											<p>{feedback.feedbackText}</p>
											<div className="client-info d-flex align-items-center justify-content-center">
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
												<div className="info">
													<h3>{feedback.name}</h3>
													<span>
														{feedback.designation}
													</span>
												</div>
											</div>
										</div>
									)
								)}
							</Carousel>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TestimonialOne;
