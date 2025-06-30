"use client"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

const GameShowcase = () => {
  const games = [
    {
      name: "Minecraft",
      description: "Block world, endless craft",
      mods: "500K+",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_v3_02ni_90d95f26-1e7c-4058-a248-8d32429a276g.jpg-8rdntVKj9t7MaTyKecnJcp6B7ppbqB.jpeg",
      color: "from-mc-grass/70 to-mc-dirt/70",
    },
    {
      name: "GTA V",
      description: "Open world, free roam",
      mods: "300K+",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_v3_02ni_0842e639-e1f0-454b-beca-0c682dff3efg.jpg-kmRxr9lgWcyZK0LeFRfph3JURkf62S.jpeg",
      color: "from-mc-water/70 to-mc-deepslate/70",
    },
    {
      name: "Skyrim",
      description: "Fantasy quest, epic tales",
      mods: "400K+",
      image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-mc-stone/70 to-mc-wood/70",
    },
    {
      name: "Cities: Skylines",
      description: "Build cities, plan dreams",
      mods: "200K+",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-mc-sand/70 to-mc-lava/70",
    },
  ]

  return (
    <section id="games" className="py-16 bg-mc-texture-deepslate">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-pixel mb-4">
            <span className="text-white" style={{ textShadow: "2px 2px #111" }}>
              Supports Popular Games
            </span>
            <span className="text-primary" style={{ textShadow: "2px 2px #000A" }}>
              {" "}
              MOD Creation
            </span>
          </h2>
          <p className="text-sm text-mc-text-darker max-w-2xl mx-auto bg-black/20 p-2 rounded-sm backdrop-blur-sm">
            Professional MOD tools for top games.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden mc-panel bg-mc-stone/30 hover:border-primary/50 backdrop-blur-sm"
            >
              <div
                className="aspect-video relative overflow-hidden mb-2"
                style={{ borderBottom: "var(--mc-pixel-border)" }}
              >
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${game.color} opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-3 pt-1">
                <h3 className="text-xl font-pixel text-white mb-1">{game.name}</h3>
                <p className="text-xs text-mc-text-darker mb-2">{game.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-mc-text-darker">
                    <div className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {game.mods} MODs
                    </div>
                  </div>
                              <a 
              href="https://studio.tripo3d.ai/workspace/generate"
              target="_self"
              className="mc-button bg-primary/80 text-primary-foreground text-xs px-3 py-1 inline-block"
            >
              Create MOD
            </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mc-panel bg-mc-wood/30 p-6 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-pixel text-primary mb-1">50+</div>
              <div className="text-xs text-mc-text-darker uppercase">Supported Games</div>
            </div>
            <div>
              <div className="text-2xl font-pixel text-primary mb-1">1M+</div>
              <div className="text-xs text-mc-text-darker uppercase">Active Creators</div>
            </div>
            <div>
              <div className="text-2xl font-pixel text-primary mb-1">10M+</div>
              <div className="text-xs text-mc-text-darker uppercase">MOD Downloads</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GameShowcase
