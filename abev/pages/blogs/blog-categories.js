import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import CategoriePost from "@/components/Blog/CategoriePost";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Link from "next/link";

const BlogCategories = () => {
  return (
    <>
      <Navbar />

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Category: Startup</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs/blog-grid">Blog</Link>
              </li>
              <li>Startup</li>
            </ul>
          </div>
        </div>
      </div>

      <CategoriePost />
      
      <FooterOne />
    </>
  );
};

export default BlogCategories;
