import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PortfolioDetailsContent from "@/components/Portfolio/PortfolioDetailsContent";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import { useRouter } from "next/router";
import axios from "axios";

const PortfolioDetails = () => {
  const [portfolio, setPortfolio] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchsetPortfolio = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/portfolios?filters[slug][$eq]=${slug}&populate=*`
      );
      setPortfolio(response.data.data);
    };

    fetchsetPortfolio();
  }, [slug]);
  return (
    <>
      <Navbar />

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>{portfolio.length > 0 && portfolio[0].attributes.title}</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/portfolio-1">Portfolio</Link>
              </li>
              <li>{portfolio.length > 0 && portfolio[0].attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>

      {portfolio.length > 0 && <PortfolioDetailsContent {...portfolio[0]} />}

      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
