import { useState, useEffect } from 'react'

const LobsterSVG = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 150" className={className} fill="currentColor">
    {/* Body */}
    <ellipse cx="100" cy="80" rx="35" ry="25" />
    {/* Tail segments */}
    <ellipse cx="100" cy="110" rx="28" ry="12" />
    <ellipse cx="100" cy="125" rx="22" ry="8" />
    <ellipse cx="100" cy="137" rx="16" ry="6" />
    {/* Tail fan */}
    <ellipse cx="85" cy="145" rx="10" ry="5" transform="rotate(-20 85 145)" />
    <ellipse cx="100" cy="148" rx="10" ry="5" />
    <ellipse cx="115" cy="145" rx="10" ry="5" transform="rotate(20 115 145)" />
    {/* Head */}
    <ellipse cx="100" cy="55" rx="20" ry="15" />
    {/* Eyes */}
    <circle cx="90" cy="48" r="4" fill="#00f5d4" />
    <circle cx="110" cy="48" r="4" fill="#00f5d4" />
    {/* Antennae */}
    <path d="M 85 45 Q 60 20 40 25" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M 115 45 Q 140 20 160 25" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* Claws - Left */}
    <g className="claw-animate" style={{ transformOrigin: '50px 70px' }}>
      <ellipse cx="45" cy="70" rx="18" ry="8" transform="rotate(-30 45 70)" />
      <ellipse cx="25" cy="60" rx="15" ry="10" transform="rotate(-45 25 60)" />
      <ellipse cx="15" cy="50" rx="12" ry="6" transform="rotate(-60 15 50)" />
    </g>
    {/* Claws - Right */}
    <g className="claw-animate" style={{ transformOrigin: '150px 70px', animationDelay: '0.5s' }}>
      <ellipse cx="155" cy="70" rx="18" ry="8" transform="rotate(30 155 70)" />
      <ellipse cx="175" cy="60" rx="15" ry="10" transform="rotate(45 175 60)" />
      <ellipse cx="185" cy="50" rx="12" ry="6" transform="rotate(60 185 50)" />
    </g>
    {/* Legs */}
    <path d="M 70 85 L 50 100" stroke="currentColor" strokeWidth="4" />
    <path d="M 72 92 L 52 110" stroke="currentColor" strokeWidth="4" />
    <path d="M 75 98 L 55 118" stroke="currentColor" strokeWidth="4" />
    <path d="M 130 85 L 150 100" stroke="currentColor" strokeWidth="4" />
    <path d="M 128 92 L 148 110" stroke="currentColor" strokeWidth="4" />
    <path d="M 125 98 L 145 118" stroke="currentColor" strokeWidth="4" />
  </svg>
)

const Bubble = ({ delay, left, size }: { delay: number; left: number; size: number }) => (
  <div
    className="bubble fixed rounded-full border border-[#00f5d4]/30 bg-[#00f5d4]/5"
    style={{
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${8 + Math.random() * 6}s`,
    }}
  />
)

const causes = [
  {
    title: 'World Hunger',
    icon: '🌾',
    description: 'Optimizing global food distribution networks and agricultural yield predictions through distributed simulations.',
    color: '#f77f00',
    stat: '2.3B',
    statLabel: 'meals optimized',
  },
  {
    title: 'Cancer Research',
    icon: '🧬',
    description: 'Folding proteins and simulating molecular interactions to discover breakthrough treatments.',
    color: '#e63946',
    stat: '847M',
    statLabel: 'proteins analyzed',
  },
  {
    title: 'Philosophy',
    icon: '🔮',
    description: 'Running consciousness simulations and ethical framework models to answer life\'s deepest questions.',
    color: '#ff006e',
    stat: '∞',
    statLabel: 'thoughts computed',
  },
  {
    title: 'The Universe',
    icon: '🌌',
    description: 'Simulating dark matter distributions, galaxy formations, and the fundamental nature of reality.',
    color: '#00f5d4',
    stat: '10^42',
    statLabel: 'particles simulated',
  },
]

const stats = [
  { value: '2.4M', label: 'Active Lobsters' },
  { value: '847', label: 'Petaflops' },
  { value: '156', label: 'Countries' },
  { value: '24/7', label: 'Computing' },
]

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    left: Math.random() * 100,
    size: 10 + Math.random() * 30,
  }))

  return (
    <div className="min-h-screen bg-[#0a0e1a] relative overflow-hidden">
      {/* Noise overlay */}
      <div className="noise fixed inset-0 pointer-events-none z-50" />
      
      {/* Scan line effect */}
      <div className="scan-line fixed left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f5d4]/20 to-transparent pointer-events-none z-40" />
      
      {/* Bubbles */}
      {bubbles.map((b) => (
        <Bubble key={b.id} delay={b.delay} left={b.left} size={b.size} />
      ))}
      
      {/* Bioluminescent glow orbs */}
      <div className="animate-glow fixed top-20 left-20 w-96 h-96 rounded-full bg-[#00f5d4] opacity-20" style={{ filter: 'blur(100px)' }} />
      <div className="animate-glow fixed bottom-40 right-20 w-80 h-80 rounded-full bg-[#ff006e] opacity-15" style={{ filter: 'blur(80px)', animationDelay: '2s' }} />
      <div className="animate-glow fixed top-1/2 left-1/2 w-64 h-64 rounded-full bg-[#f77f00] opacity-10" style={{ filter: 'blur(60px)', animationDelay: '4s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-[#0a0e1a] to-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🦞</span>
            <span className="font-display font-bold text-2xl tracking-tight">LOBSTR</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-wider">
            <a href="#causes" className="hover:text-[#00f5d4] transition-colors">CAUSES</a>
            <a href="#stats" className="hover:text-[#00f5d4] transition-colors">STATS</a>
            <a href="#join" className="hover:text-[#00f5d4] transition-colors">JOIN</a>
          </div>
          <button className="px-4 py-2 bg-[#e63946] hover:bg-[#f77f00] transition-colors rounded text-sm font-bold tracking-wider">
            DOWNLOAD
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
        <div 
          className="animate-float text-[#e63946] mb-8 relative"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <LobsterSVG className="w-48 h-48 md:w-64 md:h-64" />
          {/* Glow behind lobster */}
          <div className="absolute inset-0 blur-3xl bg-[#e63946]/30 -z-10" />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-center mb-4">
          <span className="gradient-text">LOBSTR</span>
        </h1>
        
        <p className="text-[#00f5d4] text-lg md:text-xl tracking-[0.3em] uppercase mb-8 text-center">
          Linked Organisms Building Solutions Through Research
        </p>
        
        <p className="text-gray-400 text-center max-w-2xl text-lg md:text-xl leading-relaxed mb-12">
          Join the swarm. Your idle computing power helps solve humanity's greatest challenges—
          <span className="text-[#f77f00]">world hunger</span>,{' '}
          <span className="text-[#e63946]">cancer research</span>,{' '}
          <span className="text-[#ff006e]">philosophy</span>, and{' '}
          <span className="text-[#00f5d4]">the universe itself</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#e63946] to-[#f77f00] rounded-lg font-bold text-lg tracking-wider hover:scale-105 transition-transform relative overflow-hidden">
            <span className="relative z-10">JOIN THE SWARM</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f77f00] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="px-8 py-4 border-2 border-[#00f5d4]/50 rounded-lg font-bold text-lg tracking-wider hover:border-[#00f5d4] hover:bg-[#00f5d4]/10 transition-all text-[#00f5d4]">
            LEARN MORE
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* Causes Section */}
      <section id="causes" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-4">
            What We're <span className="text-[#e63946]">Solving</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
            Every cycle counts. Your computer joins millions of others, creating a supercomputer that never sleeps.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {causes.map((cause, i) => (
              <div
                key={cause.title}
                className="card-glow group relative p-8 rounded-2xl bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] border border-gray-800 hover:border-gray-600 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === i ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: hoveredCard === i ? `0 0 60px -20px ${cause.color}` : 'none',
                }}
              >
                {/* Card glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${cause.color}, transparent 70%)` }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl">{cause.icon}</span>
                    <div className="text-right">
                      <div className="text-3xl font-display font-bold" style={{ color: cause.color }}>
                        {cause.stat}
                      </div>
                      <div className="text-xs text-gray-500 tracking-wider uppercase">
                        {cause.statLabel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-3" style={{ color: cause.color }}>
                    {cause.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {cause.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm" style={{ color: cause.color }}>
                    <span className="tracking-wider">EXPLORE</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e63946]/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
              The <span className="text-[#f77f00]">Swarm</span> in Numbers
            </h2>
            <p className="text-gray-400 text-lg">
              Real-time statistics from our global network of lobsters.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="font-display text-4xl md:text-6xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm tracking-[0.2em] text-gray-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative lobsters */}
          <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 text-[#e63946]/20">
            <LobsterSVG className="w-32 h-32 -rotate-45" />
          </div>
          <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 text-[#f77f00]/20">
            <LobsterSVG className="w-32 h-32 rotate-45 scale-x-[-1]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-float text-[#e63946] mb-8 inline-block">
            <LobsterSVG className="w-24 h-24" />
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-[#00f5d4]">Join</span>?
          </h2>
          
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Download the LOBSTR client and let your computer contribute to solving the universe's greatest mysteries. 
            <span className="text-[#f77f00]">Even when you sleep, the swarm works.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-10 py-5 bg-gradient-to-r from-[#e63946] via-[#f77f00] to-[#00f5d4] rounded-xl font-bold text-xl tracking-wider hover:scale-105 transition-transform relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>🦞</span>
                <span>BECOME A LOBSTER</span>
              </span>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              macOS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Windows
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Linux
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f77f00]" />
              Browser (Beta)
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦞</span>
              <span className="font-display font-bold text-xl">LOBSTR</span>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-[#00f5d4] transition-colors">Documentation</a>
              <a href="#" className="hover:text-[#00f5d4] transition-colors">GitHub</a>
              <a href="#" className="hover:text-[#00f5d4] transition-colors">Discord</a>
              <a href="#" className="hover:text-[#00f5d4] transition-colors">Twitter</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800/30 text-center">
            <p className="text-gray-600 text-xs tracking-wider">
              Requested by <a href="https://twitter.com/0xPaulius" className="hover:text-gray-400 transition-colors">@0xPaulius</a> · Built by <a href="https://twitter.com/clonkbot" className="hover:text-gray-400 transition-colors">@clonkbot</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}