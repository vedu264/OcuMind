"use client"

import { useEffect, useState } from "react"

export function VoiceWave() {
  const [isListening, setIsListening] = useState(false)
  const [waveHeights, setWaveHeights] = useState([20, 40, 60, 80, 60, 40, 20])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsListening((prev) => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!isListening) {
      setWaveHeights([20, 40, 60, 80, 60, 40, 20])
      return
    }

    const waveInterval = setInterval(() => {
      setWaveHeights((prev) => prev.map(() => 20 + Math.random() * 80))
    }, 100)

    return () => clearInterval(waveInterval)
  }, [isListening])

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Microphone icon */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <div className={`text-6xl transition-transform ${isListening ? "scale-110" : "scale-100"}`}>🎤</div>
      </div>

      {/* Voice wave visualization */}
      <div className="flex items-center gap-2 h-32">
        {waveHeights.map((height, i) => (
          <div
            key={i}
            className="w-3 bg-primary rounded-full transition-all duration-100"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isListening ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
          <span className="text-sm font-medium">{isListening ? "Listening..." : "Say 'Hey OcuMind'"}</span>
        </div>
      </div>

      {/* Speech bubble */}
      {isListening && (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 animate-fade-in">
          <div className="bg-background border border-border rounded-2xl px-4 py-3 max-w-xs shadow-lg">
            <p className="text-sm text-muted-foreground">"Log my lunch - chicken salad with olive oil"</p>
          </div>
        </div>
      )}
    </div>
  )
}
