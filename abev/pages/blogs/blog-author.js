import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import AuthorPost from "@/components/Blog/AuthorPost";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Link from "next/link";

const BlogAuthor = () => {
  return (
    <>
      <Navbar />

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Author: Anna Smith</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs/blog-grid">Blog</Link>
              </li>
              <li>Author</li>
            </ul>
          </div>
        </div>
      </div>

      <AuthorPost />
      
      <FooterOne />
    </>
  );
};

export default BlogAuthor;
