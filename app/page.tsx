import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Glasses, Mic, Activity, Brain, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { GestureDemo } from "@/components/gesture-demo"
import { ActivityPulse } from "@/components/activity-pulse"
import { VoiceWave } from "@/components/voice-wave"
import { FloatingFoodIcons } from "@/components/floating-food-icons"
import { GestureTrail } from "@/components/gesture-trail"
import { InteractiveStats } from "@/components/interactive-stats"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <FloatingFoodIcons />
      <GestureTrail />

      {/* Navigation */}
      <nav className="border-b border-white/20 relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Glasses className="h-6 w-6 text-white" />
            <span className="text-xl font-semibold text-white">OcuMind</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
            Launching June 2026
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-white">
            Turn any glasses into a hands-free nutrition tracker
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty max-w-2xl mx-auto">
            OcuMind is a low-profile clip that transforms ordinary glasses into a complete nutrition and activity
            platform with gesture control and voice assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-12">
            <InteractiveStats />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/20 bg-white/5 relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">All-Day</div>
              <div className="text-sm text-gray-400">Battery Life</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{"<"}30g</div>
              <div className="text-sm text-gray-400">Lightweight Clip</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">On-Device</div>
              <div className="text-sm text-gray-400">Privacy First</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">Real-Time</div>
              <div className="text-sm text-gray-400">Voice Coaching</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">See OcuMind in action</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
            Experience how gesture tracking, voice commands, and activity detection work seamlessly together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
              <Zap className="h-5 w-5 text-primary" />
              Gesture Food Tagging
            </h3>
            <GestureDemo />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
              <Mic className="h-5 w-5 text-primary" />
              Voice Assistant
            </h3>
            <VoiceWave />
          </div>

          <div className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
              <Activity className="h-5 w-5 text-primary" />
              Real-Time Activity Detection
            </h3>
            <ActivityPulse />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
            Everything you need for accurate nutrition tracking
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
            Combining gesture recognition, voice commands, and activity sensors for continuous, privacy-first health
            insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm border-white/10">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Gesture Food Tagging</h3>
            <p className="text-gray-300">
              Simply point at food or make a tag gesture to mark items for instant nutrition tracking.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm border-white/10">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Mic className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Voice Assistant</h3>
            <p className="text-gray-300">
              Hands-free commands, meal confirmation, and contextual coaching delivered through the clip's speaker.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm border-white/10">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Automatic Intake Detection</h3>
            <p className="text-gray-300">
              Combines audio cues and motion patterns to automatically detect eating events and portion sizes.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm border-white/10">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Activity Tracking</h3>
            <p className="text-gray-300">
              Track steps, calories burned, standing hours, and get gait analysis from glasses-mounted sensors.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm border-white/10">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Privacy First</h3>
            <p className="text-gray-300">
              On-device processing for audio and sensor data. Only structured metadata uploaded with your permission.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm border-white/10">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Glasses className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Universal Fit</h3>
            <p className="text-gray-300">
              Low-profile magnetic or clamp mount that fits most frame styles without modification.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white/5 py-24 relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">How OcuMind works</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Seamless nutrition and activity tracking in five simple steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Clip and Pair</h3>
                <p className="text-gray-300">
                  Attach OcuMind to your glasses and pair it with the companion app via Bluetooth.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Tag Your Food</h3>
                <p className="text-gray-300">
                  Point at food or use a voice command. The clip records the gesture and processes it locally.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Automatic Analysis</h3>
                <p className="text-gray-300">
                  On-device models classify the meal event and estimate portion characteristics using AI.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Get Instant Feedback</h3>
                <p className="text-gray-300">
                  The voice assistant provides immediate coaching through the speaker while the app shows detailed
                  insights.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Track Your Progress</h3>
                <p className="text-gray-300">
                  View your meal timeline, activity data, and personalized macro insights in the companion app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
            Built for everyone who wants better health tracking
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center bg-white/5 backdrop-blur-sm border-white/10">
            <div className="text-4xl mb-4">🏃</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Fitness Enthusiasts</h3>
            <p className="text-gray-300">
              Get real-time macro guidance and accurate calorie balance without manual logging.
            </p>
          </Card>

          <Card className="p-8 text-center bg-white/5 backdrop-blur-sm border-white/10">
            <div className="text-4xl mb-4">🥗</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Health-Conscious Users</h3>
            <p className="text-gray-300">
              Passive, accurate food and activity tracking that fits seamlessly into your lifestyle.
            </p>
          </Card>

          <Card className="p-8 text-center bg-white/5 backdrop-blur-sm border-white/10">
            <div className="text-4xl mb-4">⚕️</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Clinical Partners</h3>
            <p className="text-gray-300">
              Objective intake data for nutritionists and clinicians working with patients.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to transform your nutrition tracking?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Join the waitlist for early access to OcuMind and be among the first to experience hands-free health
            tracking.
          </p>
          <Button size="lg" variant="secondary" className="text-base">
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12 relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Glasses className="h-5 w-5 text-white" />
                <span className="font-semibold text-white">OcuMind</span>
              </div>
              <p className="text-sm text-gray-400">Hands-free nutrition and activity tracking for your glasses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20 text-center text-sm text-gray-400">
            <p>© 2025 OcuMind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
