import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'

export default function Home() {
  return (
    <>
      {/* Ambient Glow Background */}
      <div className="glow"></div>

      {/* Main Container */}
      <div className="w-full max-w-[900px] px-5 py-0 flex flex-col items-center gap-[60px] fade-in min-h-screen flex justify-center">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'BlackICE Portal',
            applicationCategory: 'ProductivityApplication',
            operatingSystem: 'Web',
            description:
              'A minimal web-based portal offering AI tools, productivity apps, developer utilities, document creation, media tools, and real-time collaboration.',
            url: 'https://blackice-ac.vercel.app/',
            creator: {
              '@type': 'Organization',
              name: 'BlackICE',
            },
          }),
        }}
      />
    </>
  )
}
