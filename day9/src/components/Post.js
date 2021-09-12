import React from "react";
import "./post.css";

function Post({ title, image, link }) {
  return (
    <div className="post">
      <a className="post-title" href={`https://reddit.com${link}`}  target="_blank">
        {title}
      </a>
      <img src={image} alt="post image" />
    
    </div>
  );
}

export default Post;
