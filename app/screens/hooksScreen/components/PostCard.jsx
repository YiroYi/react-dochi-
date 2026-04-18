import React from "react";
import "./PostCard.css";

export const PostCard = ({ post }) => {
  return (
      <div className="post-card">
        <div className="post-header">
          <span className="post-id">{post.id}</span>
          <span className="post-user">{post.userId}</span>
        </div>

        <h3 className="post-title">{post.title}</h3>

        <p className="post-body">{post.body}</p>
      </div>
  );
};