import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const PrivacyPolicyContent = () => {
	const [privacyPolicy, setPrivacyPolicy] = React.useState();
	React.useEffect(() => {
		const getPrivacyPolicy = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/privacy-policy?populate=*`
			);
			setPrivacyPolicy(response.data);
		};
		getPrivacyPolicy();
	}, []);

	return (
		<>
			{privacyPolicy && (
				<div className="privacy-policy-area ptb-100">
					<div className="container">
						<div className="privacy-policy-content">
							<ReactMarkdown>
								{
									privacyPolicy.data.attributes
										.privacyPolicyContent
								}
							</ReactMarkdown>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PrivacyPolicyContent;
