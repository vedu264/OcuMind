"use client"

import { useEffect, useState } from "react"

export function ActivityPulse() {
  const [pulseIndex, setPulseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 5)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  const activities = [
    { icon: "🚶", label: "Walking", color: "bg-blue-500" },
    { icon: "🏃", label: "Running", color: "bg-green-500" },
    { icon: "🧘", label: "Standing", color: "bg-purple-500" },
    { icon: "💪", label: "Exercise", color: "bg-orange-500" },
    { icon: "😴", label: "Resting", color: "bg-gray-500" },
  ]

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Central pulse */}
      <div className="relative">
        <div className="text-8xl">{activities[pulseIndex].icon}</div>

        {/* Pulse rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`absolute w-32 h-32 rounded-full ${activities[pulseIndex].color} opacity-20 animate-ping`} />
          <div
            className={`absolute w-24 h-24 rounded-full ${activities[pulseIndex].color} opacity-30 animate-ping`}
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      </div>

      {/* Activity label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border">
          <span className="text-sm font-medium">{activities[pulseIndex].label} Detected</span>
        </div>
      </div>

      {/* Stats bars */}
      <div className="absolute top-4 right-4 space-y-2">
        {[60, 80, 45, 90].map((width, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${activities[pulseIndex].color} transition-all duration-500`}
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
