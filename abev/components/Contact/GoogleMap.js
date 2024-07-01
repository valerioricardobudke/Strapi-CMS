import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const GoogleMap = () => {
	const [map, setMap] = React.useState();
	React.useEffect(() => {
		const getMap = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/google-map?populate=*`
			);
			setMap(response.data);
		};
		getMap();
	}, []);

	return (
		<>
			{map && (
				<div id="maps">
					<iframe src={map.data.attributes.mapUrl}></iframe>
				</div>
			)}
		</>
	);
};

export default GoogleMap;
