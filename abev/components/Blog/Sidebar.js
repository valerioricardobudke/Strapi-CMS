import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Sidebar = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
    };
    getBlogs();
  }, []);

  return (
    <>
      <aside className="widget-area">
        <div className="widget widget_search">
          <h3 className="widget-title">
            <span>Search</span>
          </h3>
          <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
            <button type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>

        {blogs && (
          <div className="widget widget_posts_thumb">
            <h3 className="widget-title">
              <span>Recent Posts</span>
            </h3>

            {blogs.data.slice(0, 4).map((blog) => (
              <article className="item" key={blog.id}>
                <Link href={`/blogs/${blog.attributes.slug}`} className="thumb">
                  <img
                    src={blog.attributes.image.data.attributes.url}
                    alt={blog.attributes.image.data.attributes.alternativeText}
                  />
                </Link>
                <div className="info">
                  <h4 className="title">
                    <Link href="/blogs/blog-details">
                      {blog.attributes.title}
                    </Link>
                  </h4>
                  <span className="date">{blog.attributes.date}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="widget widget_follow_us">
          <h3 className="widget-title">
            <span>Follow Us</span>
          </h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noreferrer"
              >
                Pinterest
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
