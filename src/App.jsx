import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from "./sections/Nav"
import { Header } from "./sections/Header"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"
import { Footer } from "./sections/Footer"


export const App = () => {
  return (

    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Footer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>


  )
}
