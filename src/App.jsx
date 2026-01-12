import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Aboutme from "./components/Aboutme/Aboutme"
import Project from "./components/Project/Project"
import Contact from "./components/Contact"
import './App.css'

function App() {
  return (
    <div className="box">
      <div>
        <Nav />
      </div>

      <div className="main">
        <div>
          <Hero />
        </div>
        <div className="aboutme">
          <Aboutme />
        </div>
        <div className="project">
          <Project />
        </div>
        {/* <Contact /> */}
      </div>

    </div>
  )
}

export default App
