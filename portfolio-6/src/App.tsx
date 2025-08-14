import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App
