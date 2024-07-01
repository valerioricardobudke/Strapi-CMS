import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import SearchResultPost from "@/components/Blog/SearchResultPost";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Link from "next/link";

const BlogSearchResult = () => {
  return (
    <>
      <Navbar />

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Search result for: Design</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs/blog-grid">Blog</Link>
              </li>
              <li>Design</li>
            </ul>
          </div>
        </div>
      </div>
      
      <SearchResultPost />
      
      <FooterOne />
    </>
  );
};

export default BlogSearchResult;
