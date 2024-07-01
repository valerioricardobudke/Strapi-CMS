import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const WorkingProcess = () => {
	const [workingProcess, setWorkingProcess] = React.useState();
	React.useEffect(() => {
		const getWorkingProcess = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/our-working-process?populate=*`
			);
			setWorkingProcess(response.data);
		};
		getWorkingProcess();
	}, []);

	return (
		<>
			{workingProcess && (
				<div className="working-process-area ptb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<div className="working-process-content">
									<span className="sub-title">
										{
											workingProcess.data.attributes
												.subTitle
										}
									</span>
									<h2>
										{workingProcess.data.attributes.title}
									</h2>
									<ul className="working-process-list">
										{workingProcess.data.attributes.processList.map(
											(list) => (
												<li
													data-aos="fade-up"
													data-aos-duration="800"
													key={list.id}
												>
													<div className="number">
														{list.number}
													</div>
													<h3>{list.title}</h3>
													<p>{list.shortText}</p>
												</li>
											)
										)}
									</ul>
								</div>
							</div>

							<div className="col-lg-6 col-md-12">
								<div
									className="working-process-image bg1"
									style={{
										backgroundImage: `url(${workingProcess.data.attributes.image.data.attributes.url})`,
									}}
								>
									<img
										src={
											workingProcess.data.attributes.image
												.data.attributes.url
										}
										alt="working-process"
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

export default WorkingProcess;
