'use client'

import { useState, useCallback } from 'react'

interface SearchEngine {
  value: string
  domain: string
  aiUrl: string
  label: string
}

const searchEngines: SearchEngine[] = [
  {
    value: 'https://search.brave.com/search?q=%s',
    domain: 'search.brave.com',
    aiUrl: 'https://search.brave.com/ask?q=%s',
    label: 'Brave',
  },
  {
    value: 'https://www.perplexity.ai/?q=%s',
    domain: 'perplexity.ai',
    aiUrl: '',
    label: 'Perplexity',
  },
  {
    value: 'https://duckduckgo.com/?q=%s',
    domain: 'duckduckgo.com',
    aiUrl: 'https://duck.ai/chat?q=%s',
    label: 'DuckDuckGo',
  },
]

export function SearchBar() {
  const [selectedEngine, setSelectedEngine] = useState(searchEngines[0])
  const [query, setQuery] = useState('')
  const [showAiButton, setShowAiButton] = useState(true)

  const handleEngineChange = useCallback((newEngine: SearchEngine) => {
    setSelectedEngine(newEngine)
    setShowAiButton(newEngine.aiUrl !== '')
  }, [])

  const handleSearch = useCallback(
    (e: React.FormEvent, searchType: 'standard' | 'ai' = 'standard') => {
      e.preventDefault()

      if (!query.trim()) return

      const encodedQuery = encodeURIComponent(query)
      const urlTemplate =
        searchType === 'ai' && selectedEngine.aiUrl
          ? selectedEngine.aiUrl
          : selectedEngine.value

      const finalUrl = urlTemplate.replace('%s', encodedQuery)
      window.open(finalUrl, '_blank')
    },
    [query, selectedEngine]
  )

  return (
    <div className="w-full max-w-[560px] mt-[35px]">
      <form
        onSubmit={(e) => handleSearch(e, 'standard')}
        className="flex items-center bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-full p-[6px] transition-all duration-300 focus-within:border-[var(--accent-blue)] focus-within:bg-[rgba(255,255,255,0.06)] focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
      >
        {/* Engine Selector */}
        <div className="relative flex items-center justify-center px-[14px] h-10 border-r border-[rgba(255,255,255,0.1)]">
          <select
            value={selectedEngine.value}
            onChange={(e) => {
              const engine = searchEngines.find((eng) => eng.value === e.target.value)
              if (engine) handleEngineChange(engine)
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            aria-label="Search engine"
          >
            {searchEngines.map((engine) => (
              <option key={engine.value} value={engine.value}>
                {engine.label}
              </option>
            ))}
          </select>

          {/* Favicon */}
          <img
            src={`https://www.google.com/s2/favicons?domain=${selectedEngine.domain}&sz=32`}
            alt={selectedEngine.label}
            className="w-5 h-5 rounded pointer-events-none transition-transform duration-200 hover:scale-110"
          />

          {/* Arrow */}
          <svg
            className="ml-2 w-3 h-3 text-[var(--text-muted)] pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the web..."
          className="flex-1 bg-transparent border-none outline-none text-[var(--text-main)] text-[0.95rem] font-[400] px-4 font-sans placeholder:text-[var(--text-muted)] placeholder:opacity-70"
          required
          autoComplete="off"
        />

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pl-1">
          {/* Standard Search Button */}
          <button
            type="submit"
            title="Standard Search"
            className="bg-[var(--accent-blue)] border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200 text-white hover:bg-[#2563eb] hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* AI Search Button */}
          {showAiButton && (
            <button
              type="button"
              title="AI Search / Chat"
              onClick={(e) => handleSearch(e, 'ai')}
              className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"></path>
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
