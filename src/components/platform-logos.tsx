"use client"

import { motion } from "framer-motion"

const PlatformLogos = () => {
  const logos = [
    { name: "3DMGAME", src: "/logos/3dmgame.png", alt: "3DMGAME Logo" },
    { name: "CurseForge", src: "/logos/curseforge.png", alt: "CurseForge Logo" },
    { name: "Steam", src: "/logos/steam_placeholder.svg", alt: "Steam Logo Placeholder" }, // Placeholder
    { name: "ModDB", src: "/logos/moddb.png", alt: "ModDB Logo" },
    { name: "NexusMods", src: "/logos/nexusmods.png", alt: "NexusMods Logo" },
    { name: "Banana", src: "/logos/banana.png", alt: "BananaGaming Logo" },
  ]

  const tripleLogos = [...logos, ...logos, ...logos]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-10 max-w-5xl mx-auto"
    >
      <h3 className="text-center text-mc-text-darker text-xs sm:text-sm mb-6 uppercase tracking-wider">
        Publish to Popular Platforms
      </h3>

      <div className="relative overflow-hidden group">
        <div
          className="absolute inset-y-0 left-0 w-12 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-12 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
        />
        <motion.div
          className="flex items-center"
          animate={{
            x: [0, `-${logos.length * 160}px`], // Assuming each logo + padding is roughly 160px
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40, // Slower for pixel style
              ease: "linear",
            },
          }}
        >
          {tripleLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 w-40 px-4"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                className="max-h-10 max-w-full object-contain opacity-70 group-hover:opacity-90 transition-opacity duration-200"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PlatformLogos
