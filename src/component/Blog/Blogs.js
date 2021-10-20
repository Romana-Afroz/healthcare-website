import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="m-5 p-3 container m-auto mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <h1 className="">Our Latest Blogs</h1>
            <span>
              <hr className="w-25 m-auto mb-2" />
            </span>
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
