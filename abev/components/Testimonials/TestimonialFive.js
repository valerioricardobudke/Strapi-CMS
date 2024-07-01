import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const TestimonialFive = () => {
	// Testimonials API
	const [testimonials, setTestimonials] = React.useState();
	React.useEffect(() => {
		const getTestimonials = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/testimonials-style-5?populate=*`
			);
			setTestimonials(response.data);
		};
		getTestimonials();
	}, []);

	return (
		<>
			{testimonials && (
				<div className="testimonials-area with-top-border o-hidden ptb-100">
					<div className="container-fluid">
						<div
							className="section-title"
							data-aos="fade-up"
							data-aos-duration="800"
						>
							<h2 className="nunito-font">
								{testimonials.data.attributes.title}
							</h2>
							<p>{testimonials.data.attributes.shortText}</p>
						</div>

						<Swiper
							spaceBetween={25}
							centeredSlides={true}
							pagination={{
								clickable: true,
							}}
							autoplay={{
								delay: 6000,
								pauseOnMouseEnter: true,
							}}
							breakpoints={{
								1: {
									slidesPerView: 1,
								},
								768: {
									slidesPerView: 2,
								},
								992: {
									slidesPerView: 3,
								},
							}}
							modules={[Pagination, Autoplay]}
							className="testimonials-slides-three"
						>
							{testimonials.data.attributes.feedbacks.map(
								(feedback) => (
									<SwiperSlide key={feedback.id}>
										<div className="single-testimonials-box">
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

export default TestimonialFive;
