import React, {useState, useEffect} from "react";
import "./HooksScreen.css"
import {fetchPosts} from "../../api/posts/post.js";
import {Spinner} from "~/screens/common/spinner/Spinner.jsx";
import {SuccedToast} from "~/screens/common/succedToast/SuccedToast.jsx";
import {PostCard} from "~/screens/hooksScreen/components/PostCard.jsx";

export const HooksScreen = () => {
  const [posts, setPosts] = useState([])
  const [showSpinner, setShowSpinner] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [mensajeDelApi, setMensajeDelApi] = useState("")

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    if(posts.length > 0){
      handleShowToast()
    }

  }, [posts])

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  })

  function handleShowSpinner(flag) {
    setShowSpinner(flag)
  }

  function getPosts() {
    handleShowSpinner(true)
    fetchPosts()
        .then((json) => {
          setPosts(json)
          handleShowSpinner(false)
          setMensajeDelApi("Datos correctos")
        })
  }

  function handleShowToast() {
    setShowToast(true)
  }

  function handleHideToast() {
    setShowToast(false)
  }

  const mostrarPosts = posts.length > 0 ?
      posts.map((post, index) => {
        return <PostCard key={index} post={post} />
      }) : <p>No hay posts</p>

  return <div className="main-container">
    <div className="left-container">
      <h1>Acciones</h1>
      <div className="actions">
        <button onClick={getPosts}>Fetch</button>
        <button>Delete Posts</button>
      </div>
    </div>
    <div className="right-container">
      { showSpinner &&
          <Spinner />
      }
      { showToast &&
          <SuccedToast
            mensaje={mensajeDelApi}
            onHandleHideToast={handleHideToast}
          />
      }
      {mostrarPosts}
    </div>
  </div>
}





// 1. Repaso de componentes useState crear el spinner
// 2. Repaso de Promise create fetch
// 3. introduccion a useEffect -> fetch al cargar el componente
// 3. useState -> quitando el spinner
// 4. useState -> mostrando el error
// 5. useState -> mostrando el toast de exito
// 6. introduccion a props anidados map con cards
// 7. introduccion a onChange con formulario
// 8. create post y use State
// 9. update useEffect cuando se actualiza useState
// 10. Reto agregar validacion al formulario con useState