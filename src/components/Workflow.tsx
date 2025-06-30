"use client"
import { motion } from "framer-motion"
import { Type, Sparkles, Download, Share2 } from "lucide-react"

const Workflow = () => {
  const steps = [
    {
      icon: Type,
      title: "Describe Idea",
      description: "Use text/images for your 3D model.",
      detail: "Supports EN/CN, ref images.",
    },
    {
      icon: Sparkles,
      title: "AI Generates",
      description: "AI analyzes & auto-generates 3D models.",
      detail: "Avg 10-30s, live preview.",
    },
    {
      icon: Download,
      title: "Optimize & Export",
      description: "Adjust details, choose formats, export.",
      detail: "Multi-format, game engine ready.",
    },
    {
      icon: Share2,
      title: "Share & Publish",
      description: "Share MODs, get feedback & support.",
      detail: "1-click share to Workshop.",
    },
  ]

  return (
    <section id="workflow" className="py-16 bg-mc-texture-stone">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-pixel mb-4">
            <span className="text-white" style={{ textShadow: "2px 2px #333" }}>
              Simple
            </span>
            <span className="text-primary" style={{ textShadow: "2px 2px #000A" }}>
              {" "}
              Four Steps
            </span>
            <span className="text-white" style={{ textShadow: "2px 2px #333" }}>
              , Complete MOD
            </span>
          </h2>
          <p className="text-sm text-mc-text-darker max-w-2xl mx-auto bg-black/20 p-2 rounded-sm backdrop-blur-sm">
            From idea to product in minutes. AI tools make MODding easy.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, hsl(var(--primary)/0.3) 20%, hsl(var(--primary)/0.3) 80%, transparent)",
              height: "2px",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 mc-button bg-primary text-primary-foreground flex items-center justify-center text-xs z-20">
                  {index + 1}
                </div>
                <div className="mc-panel bg-mc-ui-bg/90 pt-8 hover:border-primary/50 transition-all duration-150 group backdrop-blur-sm">
                  <div className="w-10 h-10 mc-button bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-105">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-pixel text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-mc-text-darker mb-2 leading-normal">{step.description}</p>
                  <p className="text-xs text-mc-text-darker/70">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="mc-panel bg-primary/20 p-6 max-w-xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl font-pixel text-white mb-3">Ready to Start Your MOD Journey?</h3>
            <p className="text-xs text-mc-text-darker mb-4">Join 100K+ MOD creators & unleash creativity with AI.</p>
            <a 
              href="https://studio.tripo3d.ai/workspace/generate"
              target="_self"
              className="mc-button bg-primary text-primary-foreground hover:bg-primary/90 inline-block"
            >
              Try Free Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Workflow
