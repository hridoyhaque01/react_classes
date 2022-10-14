import React, { useState } from "react";
import { Link } from "react-router-dom";

import { blogsData } from "../data";

export default function Services() {
  const [blogs, setBlogs] = useState(blogsData);
  const truncate = (str, num) => {
    if (str.length > num) {
      return `${str.slice(0, num)}...`;
    }
    return str;
  };
  return (
    <div>
      <h1>Services</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{truncate(body, 100)}</p>
              <Link to={title}>Learn More</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
