import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/flaticon.css";
import "/styles/boxicons.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css/bundle";
import "react-tabs/style/react-tabs.css";
import "/styles/faq.css";

import "/styles/global.css";
import "/styles/style.css";
import "/styles/header.css";
import "/styles/footer.css";
import "/styles/responsive.css";

// For style comment out the below rtl.css
// import "/styles/rtl.css";

import ScrollToTop from "@/components/Layout/ScrollToTop";

import Head from "next/head";

export default function App({ Component, pageProps }) {
	React.useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>Arthis AI</title>
			</Head>

			<Component {...pageProps} />

			<ScrollToTop />
		</>
	);
}
