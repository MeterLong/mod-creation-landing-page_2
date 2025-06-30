"use client"
import { motion } from "framer-motion"
import { Gift, Clock, ShieldCheck } from "lucide-react"

const CTA = () => {
  const benefits = [
    { icon: Gift, title: "Free Trial", description: "No payment, try all features now." },
    { icon: Clock, title: "Quick Start", description: "Learn in 5 mins, generate in 30s." },
    { icon: ShieldCheck, title: "Safe & Secure", description: "Data encrypted, privacy safe." },
  ]

  return (
    <section
      className="py-16 bg-gradient-to-b from-mc-deepslate to-black relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/textures/mc-cave-wall.png'), linear-gradient(to bottom, hsl(var(--mc-deepslate)), #000)",
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "128px 128px, cover",
      }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 0.5px, transparent 0.5px)`,
          backgroundSize: "12px 12px",
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-pixel mb-4">
            <span className="text-white" style={{ textShadow: "2px 2px #111" }}>
              Ready to Craft Your
            </span>
            <span className="block text-primary" style={{ textShadow: "2px 2px #000A" }}>
              Next Hit MOD?
            </span>
          </h2>
          <p className="text-sm text-mc-text-darker max-w-xl mx-auto mb-6 bg-black/30 p-2 rounded-sm backdrop-blur-sm">
            Join 100K+ MOD creators. Use AI to unleash unlimited creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center mc-panel bg-mc-stone/30 p-4 backdrop-blur-sm">
              <div className="w-12 h-12 mc-button bg-primary/30 flex items-center justify-center mx-auto mb-3">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-md font-pixel text-white mb-1">{benefit.title}</h3>
              <p className="text-xs text-mc-text-darker">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center items-center"
        >
          <a 
            href="https://studio.tripo3d.ai/workspace/generate"
            target="_self"
            className="mc-button bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-6 py-3 inline-block"
          >
            Start Your Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
