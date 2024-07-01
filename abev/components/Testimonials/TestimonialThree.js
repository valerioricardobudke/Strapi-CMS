import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const TestimonialThree = () => {
	// Testimonials API
	const [testimonials, setTestimonials] = React.useState();
	React.useEffect(() => {
		const getTestimonials = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/testimonials-style-3?populate=*`
			);
			setTestimonials(response.data);
		};
		getTestimonials();
	}, []);

	return (
		<>
			{testimonials && (
				<div className="testimonials-area with-top-border ptb-100">
					<div className="container">
						<div className="section-title">
							<span className="sub-title dark-green-color">
								{testimonials.data.attributes.subTitle}
							</span>
							<h2 className="nunito-font">
								{testimonials.data.attributes.title}
							</h2>
						</div>

						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12">
								<div
									className="testimonials-image"
									data-aos="fade-up"
									data-aos-duration="1200"
								>
									<img
										src={
											testimonials.data.attributes.image
												.data.attributes.url
										}
										alt="testimonials-image"
									/>
								</div>
							</div>

							<div className="col-lg-6 col-md-12">
								<div className="testimonials-content">
									<Swiper
										slidesPerView={1}
										spaceBetween={25}
										pagination={{
											clickable: true,
										}}
										modules={[Pagination]}
										className="testimonials-slides-two"
									>
										{testimonials.data.attributes.feedbacks.map(
											(feedback) => (
												<SwiperSlide key={feedback.id}>
													<div className="single-testimonials-box">
														<i className="flaticon-left-quote"></i>

														<ReactMarkdown>
															{
																feedback.feedbackText
															}
														</ReactMarkdown>

														<div className="info">
															<h3>
																{feedback.name}
															</h3>
															<span>
																{
																	feedback.designation
																}
															</span>
														</div>
													</div>
												</SwiperSlide>
											)
										)}
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TestimonialThree;
