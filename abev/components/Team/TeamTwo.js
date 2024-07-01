import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TeamTwo = () => {
	const [team, setTeam] = React.useState();
	React.useEffect(() => {
		const getTeam = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/team-style-2?populate=teamCard.image`
			);
			setTeam(response.data);
		};
		getTeam();
	}, []);

	return (
		<>
			{team && (
				<div className="team-area pb-75">
					<div className="container">
						<div className="row">
							{team.data.attributes.teamCard.map((teamInfo) => (
								<div
									className="col-lg-3 col-md-6 col-sm-6"
									data-aos="fade-up"
									data-aos-duration="800"
									key={teamInfo.id}
								>
									<div
										className="single-team-member bg1"
										style={{
											backgroundImage: `url(${teamInfo.image.data.attributes.url})`,
										}}
									>
										<img
											src={
												teamInfo.image.data.attributes
													.url
											}
											alt="member-image"
										/>

										<div className="content">
											<h3>{teamInfo.name}</h3>
											<ul className="social">
												<li>
													<a
														href={
															teamInfo.facebookLink
														}
														target="_blank"
														rel="noreferrer"
													>
														<i className="flaticon-facebook-app-symbol"></i>
													</a>
												</li>
												<li>
													<a
														href={
															teamInfo.twitterLink
														}
														target="_blank"
														rel="noreferrer"
													>
														<i className="flaticon-twitter"></i>
													</a>
												</li>
												<li>
													<a
														href={
															teamInfo.linkedinLink
														}
														target="_blank"
														rel="noreferrer"
													>
														<i className="flaticon-linkedin"></i>
													</a>
												</li>
												<li>
													<a
														href={
															teamInfo.instagramLink
														}
														target="_blank"
														rel="noreferrer"
													>
														<i className="flaticon-instagram"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TeamTwo;
