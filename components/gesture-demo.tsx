"use client"

import { useEffect, useState } from "react"

export function GestureDemo() {
  const [isPointing, setIsPointing] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPointing(true)
      const newRipple = {
        id: Date.now(),
        x: 50 + Math.random() * 20,
        y: 50 + Math.random() * 20,
      }
      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setIsPointing(false)
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 1500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden">
      {/* Hand gesture indicator */}
      <div
        className={`absolute transition-all duration-500 ${
          isPointing ? "scale-110 opacity-100" : "scale-100 opacity-60"
        }`}
        style={{ left: "20%", top: "40%" }}
      >
        <div className="text-6xl">👆</div>
      </div>

      {/* Food item */}
      <div className="absolute" style={{ left: "60%", top: "35%" }}>
        <div className="text-7xl">🍕</div>
      </div>

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute animate-ping"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            width: "100px",
            height: "100px",
            marginLeft: "-50px",
            marginTop: "-50px",
          }}
        >
          <div className="w-full h-full rounded-full border-4 border-primary/40" />
        </div>
      ))}

      {/* Connecting line animation */}
      {isPointing && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="25%"
            y1="45%"
            x2="65%"
            y2="45%"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeDasharray="5,5"
            className="animate-pulse"
            opacity="0.6"
          />
        </svg>
      )}

      {/* Success checkmark */}
      {isPointing && (
        <div className="absolute animate-bounce" style={{ left: "65%", top: "30%" }}>
          <div className="text-3xl">✓</div>
        </div>
      )}
    </div>
  )
}
