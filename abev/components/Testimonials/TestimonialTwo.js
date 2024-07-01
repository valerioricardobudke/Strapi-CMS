import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const TestimonialTwo = () => {
	// Testimonials API
	const [testimonials, setTestimonials] = React.useState();
	React.useEffect(() => {
		const getTestimonials = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/testimonial-style-2?populate=feedbacks.image`
			);
			setTestimonials(response.data);
		};
		getTestimonials();
	}, []);

	return (
		<>
			{testimonials && (
				<div className="testimonials-area pt-100 pb-75">
					<div className="container">
						<div
							className="section-title"
							data-aos="fade-up"
							data-aos-duration="800"
						>
							<span className="sub-title light-green-color">
								{testimonials.data.attributes.subTitle}
							</span>
							<h2>{testimonials.data.attributes.title}</h2>
						</div>

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
										<div className="row align-items-center">
											<div className="col-lg-7 col-md-7">
												<i className="flaticon-left-quote"></i>

												<ReactMarkdown>
													{feedback.feedbackText}
												</ReactMarkdown>

												<div className="info">
													<h3>{feedback.name}</h3>
													<span>
														{feedback.designation}
													</span>
												</div>
											</div>
											<div className="col-lg-5 col-md-5 text-center">
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
											</div>
										</div>
									</SwiperSlide>
								)
							)}
						</Swiper>
					</div>
				</div>
			)}
		</>
	);
};

export default TestimonialTwo;
