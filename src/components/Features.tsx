"use client"
import { motion } from "framer-motion"
import { MessageSquare, ImageIcon, Wrench, Paintbrush, Layers, Zap } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Text to 3D",
      description: "Generate game models with one sentence. AI auto-creates 3D models.",
      highlight: "95%+ Accuracy",
    },
    {
      icon: ImageIcon,
      title: "Image to 3D",
      description: "Upload images, AI generates 3D models instantly.",
      highlight: "Unlimited Ideas",
    },
    {
      icon: Wrench,
      title: "AI Retopo",
      description: "Optimize topology, reduce faces, boost game performance.",
      highlight: "60% Perf Boost",
    },
    {
      icon: Paintbrush,
      title: "Smart Textures",
      description: "Generate PBR textures with text/images.",
      highlight: "4K HD Textures",
    },
    {
      icon: Layers,
      title: "Batch Process",
      description: "Process multiple models, boost MOD efficiency.",
      highlight: "10x Efficiency",
    },
    {
      icon: Zap,
      title: "Live Preview",
      description: "Online 3D previewer, real-time model effects.",
      highlight: "Instant View",
    },
  ]

  return (
    <section id="features" className="py-16 bg-mc-texture-dirt">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-pixel mb-4">
            <span className="text-white" style={{ textShadow: "2px 2px #3A200A" }}>
              Powerful Features
            </span>
            <span className="text-primary" style={{ textShadow: "2px 2px #000A" }}>
              , Simple Crafting
            </span>
          </h2>
          <p className="text-sm text-mc-text-darker max-w-2xl mx-auto bg-black/20 p-2 rounded-sm backdrop-blur-sm">
            AI toolchain for MOD creators, making 3D modeling simple.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative mc-panel bg-mc-stone/50 hover:border-primary/50 transition-all duration-150 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <div className="w-10 h-10 mc-button bg-primary/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-150">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-pixel text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-mc-text-darker mb-3 leading-normal">{feature.description}</p>
                <div className="inline-block px-2 py-0.5 bg-primary/20 text-primary text-xs font-pixel">
                  {feature.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
