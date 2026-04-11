import React from 'react';
import { AboutScreen } from '../screens/aboutScreen/aboutScreen.jsx';

 export default function About() {
  const name = "Yiro"
  const age = 39
  const isSingle = true

  function helloWorld() {
   alert("Hello World!")
  }

  return <AboutScreen
   name={name}
   age={age}
   isSingle={isSingle}
   helloWorld={helloWorld}
   showName={true}
  />
}