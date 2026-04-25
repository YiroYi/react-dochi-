import React, {useState, useEffect} from "react";
import "./HooksScreen.css"
import {fetchPosts} from "../../api/posts/post.js";
import {Spinner} from "~/screens/common/spinner/Spinner.jsx";
import {SuccedToast} from "~/screens/common/succedToast/SuccedToast.jsx";
import {NestedPosts} from "~/screens/hooksScreen/components/NestedPosts.jsx";
import {usePostContext} from "~/context/postContext.jsx";

export const HooksScreen = () => {
  const [showToast, setShowToast] = useState(false)

  const { posts, getPosts, mensajeDelApi, showSpinner } = usePostContext();

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

  function handleShowToast() {
    setShowToast(true)
  }

  function handleHideToast() {
    setShowToast(false)
  }

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
      <NestedPosts />
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