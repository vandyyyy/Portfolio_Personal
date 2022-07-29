import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Skills from "./component/Skills/Skills"
import Resume from "./component/Resume/Resume"

import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"

import "./App.css"


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Skills />
      <Resume />
      <Blog/>
      
      <Contact />
     
    </>
  )
}

export default App
