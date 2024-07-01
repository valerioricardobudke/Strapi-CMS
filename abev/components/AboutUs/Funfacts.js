import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Funfacts = () => {
	const [funfact, setFunfact] = React.useState();
	React.useEffect(() => {
		const getFunfact = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/funfact?populate=*`
			);
			setFunfact(response.data);
		};
		getFunfact();
	}, []);

	return (
		<>
			{funfact && (
				<div className="funfacts-area pt-100 pb-75 bg-fff4f8">
					<div className="container">
						<div className="row">
							{funfact.data.attributes.FunfactsList.map(
								(list) => (
									<div
										className="col-lg-3 col-md-3 col-sm-3 col-6"
										data-aos="fade-up"
										data-aos-duration="800"
										key={list.id}
									>
										<div className="single-funfacts-box">
											<div className="icon">
												<i
													className={list.iconName}
												></i>
											</div>
											<h3>{list.number}</h3>
											<p>{list.title}</p>
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

export default Funfacts;
