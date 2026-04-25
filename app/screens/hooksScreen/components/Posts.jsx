import {PostCard} from "./PostCard.jsx";
import React from "react";
import {usePostContext} from "~/context/postContext.jsx";

export const Posts = ({}) => {
  const { posts } = usePostContext();

  return posts.length > 0 ?
      posts.map((post, index) => {
        return <PostCard key={index} post={post} />
      }) : <p>No hay posts</p>
}
