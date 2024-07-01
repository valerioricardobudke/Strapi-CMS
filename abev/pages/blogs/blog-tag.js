import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import TagsPost from "@/components/Blog/TagsPost";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Link from "next/link";

const BlogTags = () => {
  return (
    <>
      <Navbar />

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Tag: Technology</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs/blog-grid">Blog</Link>
              </li>
              <li>Technology</li>
            </ul>
          </div>
        </div>
      </div>

      <TagsPost />
      
      <FooterOne />
    </>
  );
};

export default BlogTags;
