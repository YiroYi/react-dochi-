import React, {useState} from 'react';
import "./aboutScreen.css"

export const AboutScreen = ({ name, age, isSingle, helloWorld, showName }) => {
  const [mostrarEdad, setMostrarEdad] = useState(false)


  console.log(mostrarEdad)
  function handleMostrarEdad(shouldShow) {
    setMostrarEdad(shouldShow)
  }

  return <div className="main-container">
    { showName &&
        <p>Mi nombre es: { name }</p>
    }

    { mostrarEdad &&
        <p>Mi edad es: { age }</p>
    }

    <p>Soltero?: { isSingle ? "Si" : "No" }</p>
    <button className="btn" onClick={ helloWorld }>Presiona</button>

    <button className="btn" onClick={ () => {} }>Ocultar Edad</button>

    <button className="btn" onClick={ () => { handleMostrarEdad(true) } }>Mostrar Edad</button>


  </div>
}
