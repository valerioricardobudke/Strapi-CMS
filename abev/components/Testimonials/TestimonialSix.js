import React from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const TestimonialSix = () => {
	// Testimonials API
	const [testimonials, setTestimonials] = React.useState();
	React.useEffect(() => {
		const getTestimonials = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/testimonials-style-6?populate=feedbacks.image`
			);
			setTestimonials(response.data);
		};
		getTestimonials();
	}, []);

	return (
		<>
			{testimonials && (
				<div className="testimonials-area bg-263238 ptb-100">
					<div className="container">
						<div
							className="section-title white-color"
							data-aos="fade-up"
							data-aos-duration="800"
						>
							<span className="sub-title">
								{testimonials.data.attributes.subTitle}
							</span>
							<h2 className="nunito-font">
								{testimonials.data.attributes.title}
							</h2>
						</div>

						<Swiper
							spaceBetween={25}
							pagination={{
								clickable: true,
							}}
							breakpoints={{
								0: {
									slidesPerView: 1,
								},
								768: {
									slidesPerView: 2,
								},
								1200: {
									slidesPerView: 3,
								},
							}}
							modules={[Pagination]}
							className="testimonials-slides-four"
						>
							{testimonials.data.attributes.feedbacks.map(
								(feedback) => (
									<SwiperSlide key={feedback.id}>
										<div className="testimonials-item">
											<i className="flaticon-left-quotes-sign"></i>
											<ReactMarkdown>
												{feedback.feedbackText}
											</ReactMarkdown>
											<div className="info">
												<h3>{feedback.name}</h3>
												<span>
													{feedback.designation}
												</span>
											</div>
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

export default TestimonialSix;
