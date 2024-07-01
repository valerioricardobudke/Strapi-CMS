import Navbar from "@/components/Layout/Navigations/Navbar1";
import Banner from "@/components/HomePages/Index/Banner";
import Helpdesk from "@/components/HomePages/Index/Helpdesk";
import Overview from "@/components/HomePages/Index/Overview";
import WhatWeDo from "@/components/HomePages/Index/WhatWeDo";
import Faq from "@/components/HomePages/Index/Faq";
import TestimonialOne from "@/components/Testimonials/TestimonialOne";
import OurCreativeTeam from "@/components/Common/OurCreativeTeam";
import BlogPostStyle1 from "@/components/Common/BlogPostStyle1";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import PartnerStyle1 from "@/components/Partners/PartnerStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";

export default function Home() {
	return (
		<>
			<Navbar />

			<Banner />

			<Helpdesk />

			<Overview />

			<WhatWeDo />

			<Faq />

			<TestimonialOne />

			<OurCreativeTeam />
			
			<BlogPostStyle1 />

			<SubscribeStyle1 />

			<PartnerStyle1 />
			
			<FooterOne />
		</>
	);
}
