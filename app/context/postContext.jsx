
import React, { createContext, useContext, useState } from "react";
import {fetchPosts} from "../api/posts/post.js";
const PostContext = createContext({});

export const usePostContext = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [mensajeDelApi, setMensajeDelApi] = useState("")
  const [showSpinner, setShowSpinner] = useState(false)

  function getPosts() {
    handleShowSpinner(true)
    fetchPosts()
        .then((json) => {
          setPosts(json)
          handleShowSpinner(false)
          setMensajeDelApi("Datos correctos")
        })
  }

  function handleShowSpinner(flag) {
    setShowSpinner(flag)
  }

  const value = {
    posts,
    getPosts
  };

  return (
      <PostContext.Provider value={value}>
        {children}
      </PostContext.Provider>
  );
}


// <PostProvider>
//
//   <App />
//
// </PostProvider>