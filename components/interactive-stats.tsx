"use client"

import { useEffect, useState } from "react"

export function InteractiveStats() {
  const [calories, setCalories] = useState(0)
  const [steps, setSteps] = useState(0)
  const [meals, setMeals] = useState(0)

  useEffect(() => {
    const calorieInterval = setInterval(() => {
      setCalories((prev) => (prev >= 2450 ? 0 : prev + Math.floor(Math.random() * 50)))
    }, 100)

    const stepInterval = setInterval(() => {
      setSteps((prev) => (prev >= 8500 ? 0 : prev + Math.floor(Math.random() * 200)))
    }, 80)

    const mealInterval = setInterval(() => {
      setMeals((prev) => (prev >= 5 ? 0 : prev + 1))
    }, 2000)

    return () => {
      clearInterval(calorieInterval)
      clearInterval(stepInterval)
      clearInterval(mealInterval)
    }
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
      <div className="text-center">
        <div className="text-3xl font-bold text-primary mb-1">{calories}</div>
        <div className="text-xs text-gray-400">Calories</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary mb-1">{steps}</div>
        <div className="text-xs text-gray-400">Steps</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary mb-1">{meals}</div>
        <div className="text-xs text-gray-400">Meals</div>
      </div>
    </div>
  )
}
