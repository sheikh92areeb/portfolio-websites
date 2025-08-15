import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Review from "./components/Review"
import Skills from "./components/Skills"
import Work from "./components/Work"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
      </main>
    </>
  )
}

export default App
