"use client"

import { useEffect, useState } from "react"

interface TrailPoint {
  id: number
  x: number
  y: number
}

export function GestureTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive) return

      const newPoint = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }

      setTrail((prev) => [...prev.slice(-15), newPoint])
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => {
      setIsActive(false)
      setTimeout(() => setTrail([]), 500)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isActive])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 rounded-full bg-primary/50 animate-fade-out"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: (index + 1) / trail.length,
          }}
        />
      ))}
    </div>
  )
}
