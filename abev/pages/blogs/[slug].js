import React, { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import DetailsContent from "@/components/Blog/BlogDetails/DetailsContent";
import GetStarted from "@/components/Common/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import { useRouter } from "next/router";
import axios from "axios";

const ServicesDetails = () => {
	const [blog, setBlog] = useState([]);
	const router = useRouter();
	const { slug } = router.query;
	useEffect(() => {
		const fetchBlog = async () => {
			const response = await axios.get(
				`${baseApiUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
			);
			setBlog(response.data.data);
		};

		fetchBlog();
	}, [slug]);
	return (
		<>
			<Navbar />

			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title green-color">
							Blog Details
						</span>
						<h1>{blog.length > 0 && blog[0].attributes.title}</h1>
					</div>
				</div>
			</div>

			{blog.length > 0 && <DetailsContent {...blog[0]} />}

			<div className="pb-100">
				<GetStarted />
			</div>
			
			<FooterOne />
		</>
	);
};

export default ServicesDetails;
