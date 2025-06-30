"use client"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex C.",
      role: "Minecraft MODder",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content: "Complex builds in minutes, not days. 10x efficiency!",
      rating: 5,
      game: "Minecraft",
    },
    {
      name: "Sarah J.",
      role: "GTA V MOD Dev",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content: "AI retopo is a game changer! 60% fewer faces, perfect detail.",
      rating: 5,
      game: "GTA V",
    },
    {
      name: "Mike R.",
      role: "Skyrim MOD Creator",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content: "4K textures make my MODs look official. Downloads tripled!",
      rating: 5,
      game: "Skyrim",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-mc-texture-grass-top">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-pixel mb-4">
            <span className="text-white" style={{ textShadow: "2px 2px #274217" }}>
              Real User
            </span>
            <span className="text-accent" style={{ textShadow: "2px 2px #000A" }}>
              {" "}
              Reviews
            </span>
          </h2>
          <p className="text-sm text-mc-text-darker max-w-2xl mx-auto bg-black/20 p-2 rounded-sm backdrop-blur-sm">
            Hear from MOD creators worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mc-panel bg-mc-ui-bg/90 hover:border-accent/50 group backdrop-blur-sm"
            >
              <div className="absolute top-3 right-3">
                <Quote className="w-6 h-6 text-accent/30" />
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg?width=40&height=40&text=Ava"}
                  alt={testimonial.name}
                  className="w-10 h-10 object-cover mr-3"
                  style={{ border: "var(--mc-pixel-border)" }}
                />
                <div>
                  <h3 className="text-sm text-white font-pixel">{testimonial.name}</h3>
                  <p className="text-xs text-mc-text-darker">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-xs text-mc-text leading-normal mb-3">"{testimonial.content}"</p>
              <div className="inline-block px-2 py-0.5 bg-accent/20 text-accent text-xs font-pixel">
                {testimonial.game}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mc-panel bg-mc-deepslate/70 p-6 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl font-pixel text-accent mb-1">4.9/5</div>
              <div className="text-xs text-mc-text-darker uppercase">User Rating</div>
            </div>
            <div>
              <div className="text-xl font-pixel text-accent mb-1">98%</div>
              <div className="text-xs text-mc-text-darker uppercase">Recommend</div>
            </div>
            <div>
              <div className="text-xl font-pixel text-accent mb-1">100K+</div>
              <div className="text-xs text-mc-text-darker uppercase">Users</div>
            </div>
            <div>
              <div className="text-xl font-pixel text-accent mb-1">24/7</div>
              <div className="text-xs text-mc-text-darker uppercase">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
