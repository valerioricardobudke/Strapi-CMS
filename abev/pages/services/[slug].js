import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import DetailsContent from "@/components/Services/DetailsContent";
import GetStarted from "@/components/Common/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import { useRouter } from "next/router";
import axios from "axios";

const ServicesDetails = () => {
  const [service, setService] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchService = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/services?filters[slug][$eq]=${slug}&populate=*`
      );
      setService(response.data.data);
    };

    fetchService();
  }, [slug]);
  return (
    <>
      <Navbar />

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>{service.length > 0 && service[0].attributes.title}</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>{service.length > 0 && service[0].attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>

      {service.length > 0 && <DetailsContent {...service[0]} />}

      <div className="pb-100">
        <GetStarted />
      </div>
      
      <FooterOne />
    </>
  );
};

export default ServicesDetails;
