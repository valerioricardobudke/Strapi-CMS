import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const BlogPostStyle1 = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
    };
    getBlogs();
  }, []);

  return (
    <div className="blog-area with-top-border pb-75 pt-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Latest News</span>
          <h2>Our latest articles & resources</h2>
        </div>

        {blogs && (
          <div className="row justify-content-center">
            {blogs.data.slice(0, 3).map((blog) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-duration="800"
                key={blog.id}
              >
                <div className="single-blog-post">
                  <div className="image">
                    <Link
                      href={`/blogs/${blog.attributes.slug}`}
                      className="d-block"
                    >
                      <img
                        src={blog.attributes.image.data.attributes.url}
                        alt={
                          blog.attributes.image.data.attributes.alternativeText
                        }
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <ul className="meta">
                      <li>
                        <i className="bx bx-purchase-tag-alt"></i>
                        {blog.attributes.category}
                      </li>
                      <li>
                        <i className="bx bx-calendar-check"></i>
                        {blog.attributes.date}
                      </li>
                    </ul>
                    <h3>
                      <Link href={`/blogs/${blog.attributes.slug}`}>
                        {blog.attributes.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostStyle1;
