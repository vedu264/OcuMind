"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0

    const animate = () => {
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw smooth flowing waves instead of grid
      ctx.strokeStyle = "rgba(100, 200, 255, 0.15)"
      ctx.lineWidth = 2

      // Create multiple flowing wave layers
      for (let waveLayer = 0; waveLayer < 3; waveLayer++) {
        ctx.beginPath()

        for (let x = 0; x < canvas.width + 100; x += 20) {
          const waveHeight = Math.sin(x * 0.01 + time * 0.5 + waveLayer * 2) * 60
          const waveOffsetY = Math.cos(x * 0.005 + time * 0.3 + waveLayer) * 40
          const y = canvas.height / 2 + waveHeight + waveOffsetY + (waveLayer * 80 - 80)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      // Add subtle glowing accent circles that float
      for (let i = 0; i < 4; i++) {
        const orbitX = Math.sin(time * 0.3 + i) * (canvas.width * 0.25) + canvas.width / 2
        const orbitY = Math.cos(time * 0.2 + i * 1.5) * (canvas.height * 0.2) + canvas.height / 2
        const radius = 40 + Math.sin(time + i) * 15
        const opacity = Math.sin(time * 1.5 + i) * 0.1 + 0.1

        ctx.fillStyle = `rgba(100, 200, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(orbitX, orbitY, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      time += 0.016

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
