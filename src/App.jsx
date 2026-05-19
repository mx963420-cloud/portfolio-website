import Navigation from './components/Navigation'
import Hero from './components/Hero'
import CapgeminiProject from './components/CapgeminiProject'
import ChinaTradeProject from './components/ChinaTradeProject'
import ResearchProject from './components/ResearchProject'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'
import './styles/global.css'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <CapgeminiProject />
      <ChinaTradeProject />
      <ResearchProject />
      <Skills />
      <About />
      <Footer />
    </>
  )
}

export default App
