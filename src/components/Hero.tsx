"use client"
import { motion } from "framer-motion"
import { Sparkles, Zap } from "lucide-react"
import ModsGeneratedCounter from "./mods-generated-counter"
import PlatformLogos from "./platform-logos"

const Hero = () => {
  const features = [{ text: "Voxel Model Quick Gen" }, { text: "Pixel Texture Swap" }, { text: "Blocky Rigging" }]

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10"
      style={{
        backgroundImage: "url('/textures/mc-sky-day.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for slight darkening / atmosphere */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Floating Pixel Blocks - more subtle now */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-mc-grass/70" // Slightly transparent
          style={{
            left: `${Math.random() * 100}%`,
            top: `${60 + Math.random() * 30}%`, // Lower on screen
            borderTop: "1px solid hsl(var(--mc-grass) / 0.5)",
            borderLeft: "1px solid hsl(var(--mc-grass) / 0.5)",
            borderBottom: "1px solid hsl(var(--mc-dirt) / 0.3)",
            borderRight: "1px solid hsl(var(--mc-dirt) / 0.3)",
          }}
          animate={{
            y: [0, Math.random() * 10 - 5, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Scattered images across the entire screen */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none z-10">
        {[
          { num: 51, top: '15%', left: '8%', size: 'w-20 h-20', rotation: '8deg' },
          { num: 52, top: '35%', left: '3%', size: 'w-32 h-32', rotation: '-12deg' },
          { num: 53, top: '65%', left: '12%', size: 'w-24 h-24', rotation: '5deg' },
          { num: 54, top: '20%', right: '6%', size: 'w-24 h-24', rotation: '-8deg' },
          { num: 55, top: '50%', right: '15%', size: 'w-20 h-20', rotation: '15deg' },
          { num: 56, top: '75%', right: '4%', size: 'w-36 h-36', rotation: '-6deg' }
        ].map(({ num, top, left, right, size, rotation }, index) => (
          <motion.div
            key={`scattered-${num}`}
            className="absolute opacity-55 hover:opacity-25 transition-all duration-300 pointer-events-auto"
            style={{ 
              top, 
              ...(left ? { left } : { right }),
              transform: `rotate(${rotation})`,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.4, 
              x: left ? -100 : 100, 
              y: Math.random() * 50 - 25,
              rotate: 0 
            }}
            animate={{ 
              opacity: 0.55, 
              scale: 1, 
              x: 0, 
              y: 0,
              rotate: rotation.replace('deg', '') 
            }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2 + index * 0.15,
              type: "spring",
              damping: 12,
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.25, 
              opacity: 0.25,
              rotate: 0,
              zIndex: 5,
              transition: { duration: 0.4, type: "spring", damping: 10 }
            }}
          >
            <div className={`${size} rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white/5`}>
              <img 
                src={`/${num}.png`} 
                alt={`Model ${num}`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center px-3 py-1 mc-panel bg-mc-wood/50 text-xs mb-4 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-accent mr-2" />
            <span className="text-accent uppercase">AI Makes MODDING EZ</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-4 leading-tight">
            <span className="block text-white" style={{ textShadow: "2px 2px #333" }}>
              Craft Your MODs
            </span>
            <span className="block text-primary" style={{ textShadow: "2px 2px #000A" }}>
              Block by Block
            </span>
          </h1>

          <p className="text-sm md:text-base text-mc-text mb-6 max-w-2xl mx-auto leading-relaxed bg-black/30 p-2 rounded-sm backdrop-blur-sm">
            AI-powered 3D model generator for MOD creators.
            <br />
            <span className="text-accent">Text/Image → Pixel-Perfect 3D Models!</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center items-center mb-8 relative z-30"
        >
          <a 
            href="https://studio.tripo3d.ai/workspace/generate"
            target="_self"
            className="mc-button bg-primary text-primary-foreground hover:bg-primary/90 text-base inline-flex items-center relative z-30"
          >
            <Zap className="w-4 h-4 inline-block mr-2 -mt-1" />
            Start Crafting Free
          </a>
        </motion.div>

        {/* Mobile horizontal layout - only shown on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="xl:hidden mb-8"
        >
          <div className="flex justify-center items-center space-x-3 overflow-x-auto pb-2">
            {[51, 52, 53, 54, 55, 56].map((num, index) => (
              <motion.div
                key={`mobile-${num}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.55, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden shadow-lg opacity-55 hover:opacity-25 transition-opacity duration-300"
              >
                <img 
                  src={`/${num}.png`} 
                  alt={`Model ${num}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="mc-panel bg-mc-stone/40 px-8 py-4 max-w-5xl mx-auto backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-center space-x-2 text-mc-text-darker hover:text-accent transition-colors duration-150 text-sm px-4"
                >
                  <span className="text-accent text-sm font-bold">◈</span>
                  <span className="whitespace-nowrap">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <ModsGeneratedCounter />
        
        {/* Large background decorative image overlapping with content */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 0.45, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="absolute z-0 inset-0 flex items-center justify-center"
          style={{ top: '110%' }}
        >
          <div className="w-[50rem] h-[50rem] md:w-[65rem] md:h-[65rem] lg:w-[80rem] lg:h-[80rem] rounded-3xl overflow-hidden shadow-2xl border border-white/5 backdrop-blur-sm bg-white/3 opacity-55 hover:opacity-65 transition-all duration-500">
            <img 
              src="/55.png" 
              alt="Background Decorative Model"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
        
        <PlatformLogos />
      </div>
    </section>
  )
}

export default Hero
