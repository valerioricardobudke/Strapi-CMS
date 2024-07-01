import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const TestimonialFour = () => {
	// Testimonials API
	const [testimonials, setTestimonials] = React.useState();
	React.useEffect(() => {
		const getTestimonials = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/testimonials-style-4?populate=*`
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
						<div
							className="section-title"
							data-aos="fade-up"
							data-aos-duration="800"
						>
							<span className="sub-title green-color">
								{testimonials.data.attributes.subTitle}
							</span>
							<h2 className="nunito-font">
								{testimonials.data.attributes.title}
							</h2>
						</div>

						<div className="row m-0">
							<div className="col-lg-6 col-md-12 p-0">
								<div className="testimonials-img">
									<img
										src={
											testimonials.data.attributes.image
												.data.attributes.url
										}
										alt="testimonials-image"
									/>
								</div>
							</div>

							<div className="col-lg-6 col-md-12 p-0">
								<div className="testimonials-content-style-two">
									<Swiper
										slidesPerView={1}
										spaceBetween={25}
										pagination={{
											clickable: true,
										}}
										autoplay={{
											delay: 6000,
											disableOnInteraction: true,
										}}
										modules={[Pagination, Autoplay]}
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

export default TestimonialFour;
