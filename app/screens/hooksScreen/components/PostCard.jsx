import React from "react";
import "./PostCard.css";

export const PostCard = ({}) => {
  return (
      <div className="post-card">
        <div className="post-header">
          <span className="post-id">postId</span>
          <span className="post-user">User UserId</span>
        </div>

        <h3 className="post-title">Post Title</h3>

        <p className="post-body">Post Body</p>
      </div>
  );
};