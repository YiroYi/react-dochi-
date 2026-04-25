import React from 'react'
import {HooksScreen} from "../screens/hooksScreen/HooksScreen.jsx";
import {PostProvider} from "~/context/postContext.jsx";


export default function Hooks() {
  return <PostProvider>
    <HooksScreen />
  </PostProvider>
}