'use client'

import { useState } from 'react'
import { SearchBar } from './SearchBar'

export function HeroSection() {
  const handleTitleClick = () => {
    window.open('/test/dev.html', '_blank')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLHeadingElement>) => {
    if (e.key === 'Enter') {
      window.open('/test/dev.html', '_blank')
    }
  }

  return (
    <main className="text-center relative w-full flex flex-col items-center fade-in">
      <h1
        role="button"
        tabIndex={0}
        onClick={handleTitleClick}
        onKeyDown={handleKeyDown}
        className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-tight mb-5 cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-101"
        title="Enter Developer Mode"
      >
        BlackICE Portal
      </h1>

      <p className="text-lg text-[var(--text-muted)] max-w-[500px] mx-auto leading-relaxed font-light">
        The operating system for your web productivity.
        <br />
        Seamlessly integrated AI, Utilities, and Workspace tools.
      </p>

      {/* Search Bar */}
      <SearchBar />

      {/* Hint Box */}
      <div className="flex items-center justify-center px-6 py-3 bg-[rgba(0,0,0,0.4)] border border-[var(--glass-border)] rounded-full mt-5 backdrop-blur-[10px]">
        <div className="text-sm font-medium text-[rgba(255,255,255,0.8)]">
          Click the button toggle at left bottom to open projects
        </div>
      </div>
    </main>
  )
}
