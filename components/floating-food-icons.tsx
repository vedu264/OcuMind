"use client"

import { useEffect, useState } from "react"

interface FoodIcon {
  id: number
  emoji: string
  x: number
  y: number
  delay: number
  duration: number
}

export function FloatingFoodIcons() {
  const [foodIcons, setFoodIcons] = useState<FoodIcon[]>([])

  useEffect(() => {
    const foods = ["🍎", "🥗", "🥑", "🍊", "🥕", "🍇", "🥦", "🍓"]
    const icons: FoodIcon[] = foods.map((emoji, i) => ({
      id: i,
      emoji,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }))
    setFoodIcons(icons)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {foodIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-4xl opacity-10 animate-float"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  )
}
