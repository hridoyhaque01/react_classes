import React, { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("there was a problem");
      });
  }, []);
  return (
    <div>
      {loading ? "Loading" : post.title}
      {error || null}
    </div>
  );
}
