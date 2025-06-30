import Hero from "./components/Hero"
import Features from "./components/Features"
import GameShowcase from "./components/GameShowcase"
import Workflow from "./components/Workflow"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Features />
      <GameShowcase />
      <Workflow />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default App
