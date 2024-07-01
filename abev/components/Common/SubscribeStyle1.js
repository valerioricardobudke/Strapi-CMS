import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const SubscribeStyle1 = () => {
	const [subscribeOurNewsletter, setSubscribeOurNewsletter] =
		React.useState();
	React.useEffect(() => {
		const getSubscribeOurNewsletter = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/subscribe-our-newsletter?populate=*`
			);
			setSubscribeOurNewsletter(response.data);
		};
		getSubscribeOurNewsletter();
	}, []);

	return (
		<>
			{subscribeOurNewsletter && (
				<div className="subscribe-area bg-f9f9f9 ptb-100">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12">
								<div
									className="subscribe-content"
									data-aos="fade-down"
									data-aos-duration="800"
								>
									<span className="sub-title">
										{
											subscribeOurNewsletter.data
												.attributes.subTitle
										}
									</span>
									<h2>
										{
											subscribeOurNewsletter.data
												.attributes.title
										}
									</h2>

									<form className="newsletter-form">
										<div className="row">
											<div className="col-xl-8 col-lg-7 col-md-8">
												<input
													type="text"
													className="input-newsletter"
													placeholder="Enter your email address"
													name="EMAIL"
													required={true}
													autoComplete="off"
												/>
											</div>
											<div className="col-xl-4 col-lg-5 col-md-4">
												<button
													type="submit"
													className="btn-style-one red-light-color"
												>
													Subscribe Now{" "}
													<i className="bx bx-chevron-right"></i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="col-lg-6 col-md-12">
								<div
									className="subscribe-image"
									data-aos="fade-up"
									data-aos-duration="800"
								>
									<img
										src={
											subscribeOurNewsletter.data
												.attributes.image.data
												.attributes.url
										}
										alt={
											subscribeOurNewsletter.data
												.attributes.image.data
												.attributes.alternativeText
										}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SubscribeStyle1;
