"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ModsGeneratedCounter: React.FC = () => {
  const [count, setCount] = useState(219568)
  const [prevCount, setPrevCount] = useState(219568)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevCount(count)
      setCount((prevCount) => prevCount + Math.floor(Math.random() * 10) + 1)
    }, 2500)

    return () => clearInterval(interval)
  }, [count])

  const formatNumber = (num: number) => {
    return num.toLocaleString().split("")
  }

  const currentDigits = useMemo(() => formatNumber(count), [count])
  const prevDigits = useMemo(() => formatNumber(prevCount), [prevCount])

  const getChangedPositions = () => {
    const changed: boolean[] = []
    const maxLength = Math.max(currentDigits.length, prevDigits.length)
    for (let i = 0; i < maxLength; i++) {
      const currentChar = currentDigits[currentDigits.length - 1 - i] || ""
      const prevChar = prevDigits[prevDigits.length - 1 - i] || ""
      changed.unshift(currentChar !== prevChar)
    }
    return changed
  }

  const changedPositions = getChangedPositions()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
      className="relative mc-panel bg-mc-deepslate/70 backdrop-blur-sm px-8 py-4 max-w-3xl mx-auto shadow-mc"
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="text-center flex-1">
          <h2 className="text-xs sm:text-sm text-mc-text-darker mb-1 uppercase tracking-wider">
            Real-time MODs Generated
          </h2>
          <div className="flex justify-center items-center text-3xl sm:text-4xl md:text-5xl font-pixel text-accent h-10 sm:h-12 md:h-14">
            {currentDigits.map((char, index) => {
              const isChanged = changedPositions[index]
              const isDigit = /\d/.test(char)
              const isComma = char === ","

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center mx-1"
                  style={{
                    width: isComma ? "12px" : "32px",
                    minWidth: isComma ? "12px" : "32px",
                    height: "100%",
                  }}
                >
                  {isChanged && isDigit ? (
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${char}-${count}`}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          type: "tween",
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        {char}
                      </motion.span>
                    </AnimatePresence>
                  ) : (
                    <motion.span
                      className="flex items-center justify-center"
                      animate={isChanged ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      {char}
                    </motion.span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-[1px]" />
    </motion.div>
  )
}

export default ModsGeneratedCounter
