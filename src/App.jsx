import { BrowserRouter, Route, Routes } from "react-router-dom"

import { About } from "./sections/About"
import { Footer } from "./sections/Contact"
import { Header } from "./sections/Header"
import { Nav } from "./sections/Nav"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"

export const App = () => {
  return (

    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>

      </BrowserRouter >
    </>


  )
}
