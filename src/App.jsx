import Contact from "./components/contact/contact"
import Hero from "./components/hero/hero"
import Portfolio from "./components/portfolio/portfolio"
import Services from "./components/services/services"

const App = () => {
  return (
    <div className='container'>
      <section id="#hero">
        <Hero />
      </section>

      <section id="#services">
        <Services />
      </section>

      <section id="#portfolio">
        <Portfolio />
      </section>

      <section id="#contact">
        <Contact />
      </section>
    </div>
  )
}

export default App