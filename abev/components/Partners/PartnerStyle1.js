import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const PartnerStyle1 = () => {
	// Partner API
	const [partner, setPartner] = React.useState();
	React.useEffect(() => {
		const getPartner = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/partner?populate=partnersList.image`
			);
			setPartner(response.data);
		};
		getPartner();
	}, []);

	return (
		<>
			{partner && (
				<div className="partner-area ptb-100">
					<div className="container">
						<div className="partner-slides">
							<Swiper
								spaceBetween={30}
								breakpoints={{
									0: {
										slidesPerView: 3,
									},
									768: {
										slidesPerView: 5,
									},
								}}
								autoplay={{
									delay: 6000,
									pauseOnMouseEnter: true,
								}}
								modules={[Autoplay]}
								className="partner-slides"
							>
								{partner.data.attributes.partnersList.map(
									(partnerLogo) => (
										<SwiperSlide key={partnerLogo.id}>
											<div className="partner-item">
												<img
													src={
														partnerLogo.image.data
															.attributes.url
													}
													alt={
														partnerLogo.image.data
															.attributes
															.alternativeText
													}
												/>
											</div>
										</SwiperSlide>
									)
								)}
							</Swiper>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PartnerStyle1;
