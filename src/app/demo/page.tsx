"use client";

import { useState } from 'react'
import { DarkVeilBackground } from '@/components/layout/DarkVeilBackground'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'

export default function DemoPage() {
  const { theme } = useTheme()
  const [hueShift, setHueShift] = useState(80) // Valeur par défaut de l'image
  const [lightHueShift, setLightHueShift] = useState(-60) // Hue shift pour le mode light
  const [noiseIntensity, setNoiseIntensity] = useState(0) // 0.0% comme dans l'image
  const [speed, setSpeed] = useState(1) // 1x comme dans l'image
  const [warpAmount, setWarpAmount] = useState(0.5) // 50% comme dans l'image

  return (
    <main className="min-h-screen relative">
      <DarkVeilBackground 
        hueShift={hueShift}
        lightHueShift={lightHueShift}
        noiseIntensity={noiseIntensity}
        speed={speed}
        warpAmount={warpAmount}
      />
      
      <ThemeToggle />
      
      {/* Controls Panel */}
      <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md rounded-lg p-4 space-y-4 min-w-[300px]">
        <h2 className="text-lg font-bold text-white mb-4">DarkVeil Controls</h2>
        
        {/* Theme Info */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Current Theme: {theme}
          </label>
          <p className="text-xs text-white/70">Use the toggle button in top-right corner</p>
        </div>
        
        {/* Hue Shift Dark */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Hue Shift (Dark): {hueShift}°
          </label>
          <input
            type="range"
            min="-180"
            max="180"
            step="1"
            value={hueShift}
            onChange={(e) => setHueShift(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        {/* Hue Shift Light */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Hue Shift (Light): {lightHueShift}°
          </label>
          <input
            type="range"
            min="-180"
            max="180"
            step="1"
            value={lightHueShift}
            onChange={(e) => setLightHueShift(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        {/* Noise Intensity */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Noise: {(noiseIntensity * 100).toFixed(1)}%
          </label>
          <input
            type="range"
            min="0"
            max="0.1"
            step="0.001"
            value={noiseIntensity}
            onChange={(e) => setNoiseIntensity(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        {/* Speed */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Speed: {speed}x
          </label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        {/* Warp Amount */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Warp: {(warpAmount * 100).toFixed(0)}%
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={warpAmount}
            onChange={(e) => setWarpAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        {/* Reset Button */}
        <button
          onClick={() => {
            setHueShift(80)
            setLightHueShift(-60)
            setNoiseIntensity(0)
            setSpeed(1)
            setWarpAmount(0.5)
          }}
          className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded transition-colors"
        >
          Reset to Defaults
        </button>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 dark:text-white text-gray-900">
            DarkVeil Background
          </h1>
          <p className="text-xl dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
            Un composant de background animé inspiré de React Bits, 
            entièrement responsive et adaptatif aux thèmes light/dark.
          </p>
          <div className="mt-8 space-x-4">
            <span className="inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full">
              ✅ Tests Jest: 10/10
            </span>
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">
              ✅ Tests E2E: 10/10
            </span>
            <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full">
              ✅ Responsive
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
