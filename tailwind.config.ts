/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem", // Pixel units might be small, rem is fine
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Press Start 2P"', "cursive", "system-ui", "sans-serif"],
        pixel: ['"Press Start 2P"', "cursive"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Minecraft specific colors
        "mc-grass": "hsl(var(--mc-grass))",
        "mc-dirt": "hsl(var(--mc-dirt))",
        "mc-stone": "hsl(var(--mc-stone))",
        "mc-wood": "hsl(var(--mc-wood))",
        "mc-sand": "hsl(var(--mc-sand))",
        "mc-water": "hsl(var(--mc-water))",
        "mc-lava": "hsl(var(--mc-lava))",
        "mc-deepslate": "hsl(var(--mc-deepslate))",
        "mc-ui-bg": "hsl(var(--mc-ui-bg))",
        "mc-ui-border-light": "hsl(var(--mc-ui-border-light))",
        "mc-ui-border-dark": "hsl(var(--mc-ui-border-dark))",
        "mc-button-bg": "hsl(var(--mc-button-bg))",
        "mc-button-hover-bg": "hsl(var(--mc-button-hover-bg))",
        "mc-text": "hsl(var(--mc-text))",
        "mc-text-darker": "hsl(var(--mc-text-darker))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)", // Pixel fonts like sharp edges
        sm: "0px", // Sharp edges
      },
      boxShadow: {
        mc: "var(--mc-pixel-shadow)",
        "mc-inset":
          "inset 2px 2px 0px hsl(var(--mc-ui-border-dark)), inset -2px -2px 0px hsl(var(--mc-ui-border-light))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
