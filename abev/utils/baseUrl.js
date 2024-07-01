const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://arthis.ai"
		: "http://localhost:3000";

export default baseUrl;