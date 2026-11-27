import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain, Zap, TrendingUp, Users, Search, BookOpen,
  Building2, Rocket, FileText, Network, ArrowRight,
  ChevronDown, Menu, X, Star, CheckCircle, Globe, Award,
  BarChart3, Sparkles, Code2, GraduationCap, Briefcase,
  Target, MessageSquare, Github, Twitter, Linkedin,
  Flame, Compass, ShieldCheck, Layers, Cpu
} from 'lucide-react'

/* ─────────────────────────── STATIC DATA ─────────────────────────── */

const NAV_LINKS = [
  { label: 'Intelligence Modules', href: '#features' },
  { label: 'How It Works',         href: '#how-it-works' },
  { label: 'Opportunities Hub',    href: '#opportunities' },
  { label: 'Live AI Demo',         href: '#ai-showcase' },
  { label: 'Success Stories',      href: '#testimonials' },
]

const STATS = [
  { value: '500K+',     label: 'Verified Opportunities', icon: <Zap size={22} />,       color: '#FF2D78', glow: 'rgba(255,45,120,0.35)' },
  { value: '96.4%',     label: 'AI Match Accuracy',      icon: <Brain size={22} />,     color: '#9C27F4', glow: 'rgba(156,39,244,0.35)' },
  { value: '120K+',     label: 'Active Innovators',      icon: <Users size={22} />,     color: '#00E5FF', glow: 'rgba(0,229,255,0.35)' },
  { value: 'Real-Time', label: 'Talent Graph Intel',     icon: <TrendingUp size={22} />,color: '#00E676', glow: 'rgba(0,230,118,0.35)' },
]

const FEATURES = [
  {
    icon: <Brain size={26} />,
    title: 'AI Career Path Prediction',
    description: 'Deep neural models analyze 500K+ industry signals to forecast in-demand roles, salary trajectories, and future-proof career moves.',
    color: '#FF2D78',
    gradient: 'linear-gradient(135deg, rgba(255,45,120,0.18), rgba(156,39,244,0.06))',
    border: 'rgba(255,45,120,0.3)',
    badge: 'Flagship AI',
  },
  {
    icon: <Target size={26} />,
    title: 'Adaptive Skill Gap Analyzer',
    description: 'Instantly benchmark your current stack against market requirements. Receive automated, custom-curated 60-day learning roadmaps.',
    color: '#9C27F4',
    gradient: 'linear-gradient(135deg, rgba(156,39,244,0.18), rgba(0,229,255,0.06))',
    border: 'rgba(156,39,244,0.3)',
    badge: 'Smart Roadmap',
  },
  {
    icon: <Network size={26} />,
    title: 'Spectral Talent Graph',
    description: 'Discover non-obvious connections between your skills, hiring companies, tech ecosystems, and mentors using spectral graph theory.',
    color: '#00E5FF',
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.18), rgba(0,230,118,0.06))',
    border: 'rgba(0,229,255,0.3)',
    badge: 'Graph Neural Net',
  },
  {
    icon: <Rocket size={26} />,
    title: 'Global Hackathon Pulse',
    description: 'Real-time discovery for online & offline hackathons, prize pools, eligibility filters, and instant AI-assisted team formation.',
    color: '#00E676',
    gradient: 'linear-gradient(135deg, rgba(0,230,118,0.18), rgba(255,158,0,0.06))',
    border: 'rgba(0,230,118,0.3)',
    badge: 'Live Tracker',
  },
  {
    icon: <FileText size={26} />,
    title: 'Govt Tenders & Grants',
    description: 'Automated intelligence tracking GeM, CPPP, and state procurement portals. Smart bidding filters mapped to startup & developer capabilities.',
    color: '#FF9E00',
    gradient: 'linear-gradient(135deg, rgba(255,158,0,0.18), rgba(255,45,120,0.06))',
    border: 'rgba(255,158,0,0.3)',
    badge: 'GeM & CPPP',
  },
  {
    icon: <Globe size={26} />,
    title: 'Social Opportunity Feed',
    description: 'An Instagram-style interactive visual feed for breakthrough projects, campus recruitment drives, startup hires, and student showcases.',
    color: '#FF2D78',
    gradient: 'linear-gradient(135deg, rgba(255,45,120,0.18), rgba(0,229,255,0.06))',
    border: 'rgba(255,45,120,0.3)',
    badge: 'Social Feed',
  },
  {
    icon: <Building2 size={26} />,
    title: 'Enterprise & Startup Radar',
    description: 'Track tech stacks, hiring velocity, funding series, and internal team transitions across 25,000+ tech companies globally.',
    color: '#00E5FF',
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.18), rgba(156,39,244,0.06))',
    border: 'rgba(0,229,255,0.3)',
  },
  {
    icon: <MessageSquare size={26} />,
    title: 'Autonomous Career Copilot',
    description: 'Natural language agent for live mock interviews, ATS resume diagnostics, personalized negotiation strategies, and round-the-clock advisory.',
    color: '#9C27F4',
    gradient: 'linear-gradient(135deg, rgba(156,39,244,0.18), rgba(255,45,120,0.06))',
    border: 'rgba(156,39,244,0.3)',
    badge: '24/7 AI Agent',
  },
]

const OPPORTUNITY_TYPES = [
  { icon: <Briefcase size={20} />,     label: 'Placement Drives & Jobs', count: '140K+', color: '#FF2D78', tag: 'Fast-Track' },
  { icon: <GraduationCap size={20} />, label: 'Pre-Placement Internships',count: '65K+',  color: '#9C27F4', tag: 'High Stipend' },
  { icon: <Code2 size={20} />,         label: 'Innovation Hackathons',   count: '12K+',  color: '#00E5FF', tag: '$2.4M Prizes' },
  { icon: <Award size={20} />,         label: 'Coding & Tech Competitions',count: '18K+',color: '#00E676', tag: 'Global' },
  { icon: <FileText size={20} />,      label: 'Public Tenders & Grants', count: '95K+',  color: '#FF9E00', tag: 'High Value' },
  { icon: <Rocket size={20} />,        label: 'Incubator & Startup Funds',count: '8.5K+',color: '#FF2D78', tag: 'Seed & Grants' },
  { icon: <BookOpen size={20} />,      label: 'Global Scholarships',     count: '22K+',  color: '#00E5FF', tag: 'Funded' },
  { icon: <Globe size={20} />,         label: 'Fellowships & Research',  count: '6K+',   color: '#9C27F4', tag: 'Govt & Univ' },
]

const STEPS = [
  {
    step: '01',
    icon: <Users size={22} />,
    title: 'Synthesize Your Profile',
    color: '#FF2D78',
    desc: 'Connect your GitHub, portfolio, or resume. Our neural parser extracts 40+ structured attributes into your dynamic talent vector.'
  },
  {
    step: '02',
    icon: <Brain size={22} />,
    title: 'Graph Intelligence Match',
    color: '#9C27F4',
    desc: 'High-dimensional embeddings compute cosine similarities across thousands of active jobs, hackathons, and growth sectors.'
  },
  {
    step: '03',
    icon: <Search size={22} />,
    title: 'Predict & Gap Analyze',
    color: '#00E5FF',
    desc: 'Get calibrated confidence scores for target roles, see exactly which frameworks you need next, and review projected compensation.'
  },
  {
    step: '04',
    icon: <TrendingUp size={22} />,
    title: 'Seize High-ROI Opportunities',
    color: '#00E676',
    desc: 'One-click apply with tailored pitches, join high-performance hackathon squads, or submit bids for verified tenders.'
  },
]

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Computer Science Finalist → ML Engineer @ Google',
    avatar: 'PS',
    avatarBg: 'linear-gradient(135deg, #FF2D78, #9C27F4)',
    text: 'Skills Pulse flagged ML Engineer openings 5 months ahead of college campus drives and pinpointed my PyTorch gap. Following its personalized 45-day roadmap directly landed me my dream offer!',
    stars: 5,
    tag: 'Campus Placement'
  },
  {
    name: 'Vikramaditya Rao',
    role: 'Founder & CTO, Nexus Cloud Technologies',
    avatar: 'VR',
    avatarBg: 'linear-gradient(135deg, #FF9E00, #FF2D78)',
    text: 'We scored two high-value GeM software modernization tenders worth ₹72 Lakhs through the Government Tenders radar. The eligibility matcher saved our team weeks of manual documentation.',
    stars: 5,
    tag: 'Govt Contract Won'
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Senior Data Scientist @ Swiggy',
    avatar: 'AD',
    avatarBg: 'linear-gradient(135deg, #00E5FF, #9C27F4)',
    text: 'The career trajectory simulator gave me clear evidence on transitioning from BI analytics into Generative AI systems. The confidence scoring and market freshness indicators are completely unparalleled.',
    stars: 5,
    tag: 'Career Pivot'
  },
]

const TARGET_USERS = [
  { icon: <GraduationCap size={15} />, label: 'College Students',    color: '#FF2D78' },
  { icon: <Briefcase size={15} />,     label: 'Job Seekers',         color: '#9C27F4' },
  { icon: <Code2 size={15} />,         label: 'Software Engineers',  color: '#00E5FF' },
  { icon: <Rocket size={15} />,        label: 'Startup Founders',    color: '#FF9E00' },
  { icon: <Building2 size={15} />,     label: 'Corporate Recruiters',color: '#00E676' },
  { icon: <Award size={15} />,         label: 'Colleges & Deans',    color: '#FF2D78' },
  { icon: <Globe size={15} />,         label: 'Public Sector Bidders',color: '#00E5FF' },
]

/* ──────────────────────── ANIMATION PRESETS ──────────────────────── */

const fadeUp = {
  hidden:  { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}
const fadeLeft = {
  hidden:  { opacity: 0, x: -35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}
const fadeRight = {
  hidden:  { opacity: 0, x: 35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}
const popIn = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

/* ───────────────────────── REUSABLE ATOMS ───────────────────────── */

function AmbientGlow({ color, size = 450, top, left, right, bottom }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none filter blur-[120px] opacity-25"
      style={{
        background: color,
        width: size,
        height: size,
        top, left, right, bottom,
        zIndex: 0
      }}
    />
  )
}

function NeonBadge({ children, color = '#FF2D78', icon }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
      style={{
        background: `linear-gradient(135deg, ${color}22, ${color}0A)`,
        color: color,
        border: `1px solid ${color}45`,
        boxShadow: `0 0 16px ${color}20`
      }}
    >
      {icon && <span className="opacity-90">{icon}</span>}
      {children}
    </span>
  )
}

function SectionHeading({ badge, badgeColor = '#FF2D78', badgeIcon, title, subtitle }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="text-center mb-16 relative z-10"
    >
      <motion.div variants={fadeUp} className="mb-3.5 flex justify-center">
        <NeonBadge color={badgeColor} icon={badgeIcon}>{badge}</NeonBadge>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

/* ─────────────────────────── MAIN COMPONENT ───────────────────────── */

export default function LandingPage({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const WORDS = ['Tomorrow’s Careers.', 'Deep Tech Internships.', 'Govt Procurement.', 'Global Hackathons.']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex(prev => (prev + 1) % WORDS.length), 2200)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#08080F] text-white overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: 'rgba(8, 8, 15, 0.90)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 45, 120, 0.18)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                padding: '12px 0'
              }
            : { padding: '20px 0' }
        }
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 50%, #00E5FF 100%)',
                  boxShadow: '0 0 24px rgba(255, 45, 120, 0.5)'
                }}
              >
                <Cpu size={22} color="white" />
              </div>
              <div
                className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 animate-ping"
                style={{ background: '#00E676', borderColor: '#08080F' }}
              />
              <div
                className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2"
                style={{ background: '#00E676', borderColor: '#08080F' }}
              />
            </div>
            <div>
              <div className="font-black text-2xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="gradient-text">SKILLS</span>
                <span className="text-white"> PULSE</span>
              </div>
              <div className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">
                AI Opportunity Platform
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: 'linear-gradient(90deg, #FF2D78, #00E5FF)' }}
                />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3.5">
            <button
              onClick={() => onNavigate('admin')}
              className="text-xs font-mono font-semibold text-[#00E5FF] hover:text-white px-3 py-1.5 rounded-xl border border-[#00E5FF]/30 hover:border-[#00E5FF] transition-all bg-[#00E5FF]/10 flex items-center gap-1.5"
            >
              <ShieldCheck size={14} />
              Admin
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="text-sm font-semibold text-gray-300 hover:text-white px-4 py-2 rounded-xl transition-colors hover:bg-white/5"
            >
              Sign In
            </button>
            <motion.button
              onClick={() => onNavigate('dashboard')}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(255,45,120,0.6)' }}
              whileTap={{ scale: 0.96 }}
              className="btn-shimmer text-sm font-bold text-white px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <Sparkles size={16} />
              Launch Platform
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white glass"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-dark border-t mt-3"
              style={{ borderColor: 'rgba(255,45,120,0.2)' }}
            >
              <div className="px-6 py-5 flex flex-col gap-4">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-200 hover:text-white text-base font-semibold py-2 border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2.5 pt-2">
                  <button
                    onClick={() => { setOpen(false); onNavigate('login'); }}
                    className="w-full text-center py-2.5 rounded-xl font-bold text-gray-200 glass border border-white/10"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => { setOpen(false); onNavigate('dashboard'); }}
                    className="w-full text-center py-3 rounded-xl font-bold text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #FF2D78, #9C27F4)' }}
                  >
                    Launch Platform Free
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-grid">
        <AmbientGlow color="#FF2D78" size={620} top="-10%" left="-12%" />
        <AmbientGlow color="#9C27F4" size={540} top="25%" right="-15%" />
        <AmbientGlow color="#00E5FF" size={480} bottom="-5%" left="20%" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 glass"
            style={{ border: '1px solid rgba(255,45,120,0.3)', boxShadow: '0 0 25px rgba(255,45,120,0.18)' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF2D78] animate-ping" />
            <span className="text-xs sm:text-sm font-semibold text-gray-200">
              Next-Gen Predictive Career & Opportunity Intelligence Platform
            </span>
            <span
              className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full text-white"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #9C27F4)' }}
            >
              React Powered
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black tracking-tight leading-[1.08] mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 7vw, 5.4rem)'
            }}
          >
            <span className="text-white">Predict & Discover </span>
            <br className="hidden sm:inline" />
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -22, filter: 'blur(8px)' }}
                transition={{ duration: 0.38 }}
                className="gradient-text inline-block"
              >
                {WORDS[index]}
              </motion.span>
            </AnimatePresence>
            <br />
            <span className="text-white">Before They </span>
            <span className="gradient-text-warm">Become Obvious.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Skills Pulse synthesizes <strong className="text-white font-semibold">Graph AI, Market Time-Series, and Semantic Retrieval</strong> to decode skill demand, predict future job roles, surface government tenders, and connect high-caliber talent to breakthrough ventures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <motion.button
              onClick={() => onNavigate('dashboard')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 45px rgba(255,45,120,0.65)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-shimmer flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <Sparkles size={20} />
              Try Career Prediction Free
              <ArrowRight size={20} />
            </motion.button>

            <a
              href="#opportunities"
              className="glass flex items-center gap-2 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:border-[#00E5FF]/50 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.14)' }}
            >
              <Compass size={20} className="text-[#00E5FF]" />
              Browse Opportunity Matrix
            </a>
          </motion.div>

          {/* User Persona Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mr-1 flex items-center gap-1">
              <Flame size={14} color="#FF9E00" /> Engineered for:
            </span>
            {TARGET_USERS.map(user => (
              <div
                key={user.label}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-200 glass hover:scale-105 transition-transform cursor-default"
                style={{ border: `1px solid ${user.color}35` }}
              >
                <span style={{ color: user.color }}>{user.icon}</span>
                {user.label}
              </div>
            ))}
          </div>

          {/* High-Key Stats Matrix */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {STATS.map(stat => (
              <motion.div
                key={stat.label}
                variants={popIn}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass rounded-2xl p-5 flex flex-col items-center text-center relative overflow-hidden group cursor-default"
                style={{
                  border: `1px solid ${stat.color}30`,
                  boxShadow: `0 8px 30px rgba(0,0,0,0.4)`
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}25, ${stat.color}10)`,
                    color: stat.color,
                    boxShadow: `0 0 20px ${stat.glow}`
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-3xl font-black mb-1"
                  style={{ color: stat.color, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs tracking-wider uppercase pointer-events-none">
          <span>Scroll to explore</span>
          <ChevronDown size={18} className="text-[#FF2D78] animate-bounce" />
        </div>
      </section>

      {/* ── FEATURES MODULES ── */}
      <section id="features" className="relative py-28 overflow-hidden">
        <AmbientGlow color="#9C27F4" size={500} top="10%" right="-10%" />
        <AmbientGlow color="#FF2D78" size={400} bottom="10%" left="-8%" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading
            badge="Autonomous AI Ecosystem"
            badgeColor="#FF2D78"
            badgeIcon={<Layers size={13} />}
            title={<>8 Core Intelligence Engines, <span className="gradient-text">Zero Guesswork</span></>}
            subtitle="From predicting macroeconomic career demand shifts to decoding GeM government procurements, every layer is built on real-world historical data."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {FEATURES.map((feat) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl p-6 cursor-default transition-all duration-300 relative group overflow-hidden"
                style={{
                  background: feat.gradient,
                  border: `1px solid ${feat.border}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
                }}
              >
                <div className="relative z-10">
                  {feat.badge && (
                    <div className="mb-4">
                      <NeonBadge color={feat.color}>{feat.badge}</NeonBadge>
                    </div>
                  )}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${feat.color}35, ${feat.color}15)`,
                      color: feat.color,
                      boxShadow: `0 0 25px ${feat.color}30`
                    }}
                  >
                    {feat.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2 tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {feat.description}
                  </p>
                  <div
                    onClick={() => onNavigate('login')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-300 group-hover:gap-2.5 cursor-pointer"
                    style={{ color: feat.color }}
                  >
                    Explore Module <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OPPORTUNITIES UNIVERSE ── */}
      <section id="opportunities" className="relative py-28 overflow-hidden bg-grid">
        <AmbientGlow color="#00E5FF" size={550} top="20%" left="5%" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-5"
            >
              <motion.div variants={fadeLeft} className="mb-4">
                <NeonBadge color="#00E5FF" icon={<Globe size={13} />}>
                  Unified Matrix
                </NeonBadge>
              </motion.div>
              <motion.h2
                variants={fadeLeft}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                500,000+ Opportunities. <br />
                <span className="gradient-text-cyan">Zero Blindspots.</span>
              </motion.h2>
              <motion.p variants={fadeLeft} className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                Traditional job boards only show what is already saturated. Skills Pulse tracks private stealth hiring, high-yield university hackathons, research grants, and public-sector tenders before they hit mainstream aggregators.
              </motion.p>

              <motion.div variants={fadeLeft} className="space-y-3.5 mb-8">
                {[
                  'Automated ingestion across 250+ authorized public registries & APIs',
                  'AI duplicate deduplication and company credibility score scoring',
                  'Algorithmic eligibility filtering based on your live skill vector',
                  'Real-time deadline monitoring with automated calendar sync alerts'
                ].map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(0, 230, 118, 0.2)', color: '#00E676' }}
                    >
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-sm text-gray-200 font-medium">{bullet}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeLeft}>
                <button
                  onClick={() => onNavigate('login')}
                  className="btn-shimmer inline-flex items-center gap-2 font-bold text-white px-7 py-3.5 rounded-2xl text-base shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #00E5FF 0%, #9C27F4 100%)',
                    boxShadow: '0 0 30px rgba(0,229,255,0.4)'
                  }}
                >
                  Access Opportunity Matrix <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {OPPORTUNITY_TYPES.map((cat) => (
                <motion.div
                  key={cat.label}
                  variants={popIn}
                  whileHover={{ scale: 1.03, y: -4 }}
                  onClick={() => onNavigate('login')}
                  className="glass rounded-2xl p-4.5 flex items-center justify-between cursor-pointer transition-all group"
                  style={{
                    border: `1px solid ${cat.color}35`,
                    background: `linear-gradient(135deg, ${cat.color}12, rgba(255,255,255,0.02))`
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${cat.color}35, ${cat.color}15)`,
                        color: cat.color,
                        boxShadow: `0 0 16px ${cat.color}30`
                      }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm leading-tight mb-1">
                        {cat.label}
                      </div>
                      <div
                        className="text-lg font-black tracking-tight"
                        style={{ color: cat.color, fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {cat.count}
                      </div>
                    </div>
                  </div>

                  <span
                    className="text-[10px] font-bold px-2 py-1 rounded-full uppercase"
                    style={{
                      background: `${cat.color}20`,
                      color: cat.color,
                      border: `1px solid ${cat.color}40`
                    }}
                  >
                    {cat.tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="relative py-28 overflow-hidden">
        <AmbientGlow color="#FF9E00" size={500} bottom="10%" right="5%" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading
            badge="4-Step Execution Pipeline"
            badgeColor="#00E676"
            badgeIcon={<BarChart3 size={13} />}
            title={<>From Skill Raw Data to <span className="gradient-text-warm">High-Value Offers</span></>}
            subtitle="Every recommendation is supported by calibrated confidence levels, time-series projections, and historical validation."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {STEPS.map((s, idx) => (
              <motion.div key={s.step} variants={fadeUp} className="relative group">
                {idx < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-full h-[2px] z-0"
                    style={{
                      background: `linear-gradient(90deg, ${s.color}60, transparent)`
                    }}
                  />
                )}
                <div
                  className="relative z-10 glass rounded-3xl p-6 transition-all duration-300 group-hover:border-opacity-60 h-full flex flex-col"
                  style={{
                    border: `1px solid ${s.color}35`,
                    background: `linear-gradient(180deg, ${s.color}10, rgba(8,8,15,0.7))`
                  }}
                >
                  <div
                    className="text-5xl font-black mb-3 opacity-25 group-hover:opacity-50 transition-opacity"
                    style={{ color: s.color, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.step}
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}35, ${s.color}15)`,
                      color: s.color,
                      boxShadow: `0 0 20px ${s.color}30`
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LIVE AI DEMO ── */}
      <section id="ai-showcase" className="relative py-28 overflow-hidden bg-grid">
        <AmbientGlow color="#FF2D78" size={600} top="20%" right="-5%" />
        <AmbientGlow color="#00E5FF" size={500} bottom="10%" left="-5%" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading
            badge="Live Prediction Dashboard"
            badgeColor="#00E5FF"
            badgeIcon={<Sparkles size={13} />}
            title={<>Interactive AI Output: <span className="gradient-text">Skills vs Market</span></>}
            subtitle="Demonstrating how the platform analyzes your talent vector against live demand metrics."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-3xl p-7 sm:p-8 relative overflow-hidden"
              style={{
                border: '1px solid rgba(255,45,120,0.3)',
                background: 'linear-gradient(135deg, rgba(255,45,120,0.08), rgba(8,8,15,0.9))',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,45,120,0.2)', color: '#FF2D78' }}
                  >
                    <Target size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Skill Gap Spectrum</h4>
                    <p className="text-xs text-gray-400">Target Role: AI Systems Engineer</p>
                  </div>
                </div>
                <NeonBadge color="#00E676">74% Target Match</NeonBadge>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { name: 'Python & FastAsync',   match: 94, color: '#FF2D78', status: 'Proficient' },
                  { name: 'Machine Learning & Stats',match: 88, color: '#9C27F4', status: 'Advanced' },
                  { name: 'SQL & Vector DBs',     match: 78, color: '#00E5FF', status: 'Strong' },
                  { name: 'PyTorch Deep Learning',match: 42, color: '#FF9E00', status: 'Target Gap' },
                  { name: 'MLOps & Kubernetes',   match: 25, color: '#FF2D78', status: 'Critical Gap' },
                ].map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                      <span className="text-gray-200">{s.name}</span>
                      <span style={{ color: s.color }}>{s.match}% ({s.status})</span>
                    </div>
                    <div className="h-2.5 rounded-full overflow-hidden bg-white/5 p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.match}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${s.color}, #9C27F4)`,
                          boxShadow: `0 0 12px ${s.color}60`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="p-4 rounded-2xl flex items-start gap-3"
                style={{
                  background: 'rgba(0, 230, 118, 0.08)',
                  border: '1px solid rgba(0, 230, 118, 0.25)'
                }}
              >
                <CheckCircle size={18} color="#00E676" className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#00E676] uppercase tracking-wider">
                    Automated Recommendation
                  </div>
                  <div className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    Complete 2 focused projects in <strong>PyTorch Distributed</strong> & <strong>vLLM deployment</strong> to elevate match score to <strong>96%</strong> within 45 days.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-3xl p-7 sm:p-8 relative overflow-hidden"
              style={{
                border: '1px solid rgba(156,39,244,0.3)',
                background: 'linear-gradient(135deg, rgba(156,39,244,0.08), rgba(8,8,15,0.9))',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(156,39,244,0.2)', color: '#9C27F4' }}
                  >
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Probabilistic Career Outcomes</h4>
                    <p className="text-xs text-gray-400">Confidence Calibrated via XGBoost Models</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400">Model v2.4</span>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { role: 'Generative AI & LLM Engineer', conf: 95, growth: '+64% YoY', estSalary: '₹22 - 45 LPA', color: '#FF2D78' },
                  { role: 'Staff ML Platform Architect', conf: 89, growth: '+48% YoY', estSalary: '₹28 - 55 LPA', color: '#9C27F4' },
                  { role: 'Autonomous AI Agent Developer', conf: 82, growth: '+110% YoY', estSalary: '₹18 - 38 LPA', color: '#00E5FF' },
                ].map((pred) => (
                  <div
                    key={pred.role}
                    onClick={() => onNavigate('login')}
                    className="p-4 rounded-2xl flex items-center justify-between cursor-pointer transition-transform hover:scale-[1.02]"
                    style={{
                      background: `linear-gradient(135deg, ${pred.color}15, rgba(255,255,255,0.02))`,
                      border: `1px solid ${pred.color}35`
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 flex-shrink-0">
                        <svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90">
                          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
                          <circle
                            cx="18" cy="18" r="15" fill="none"
                            stroke={pred.color} strokeWidth="3.5"
                            strokeDasharray={`${pred.conf * 0.942} 100`}
                            strokeLinecap="round"
                            style={{ filter: `drop-shadow(0 0 6px ${pred.color})` }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-black text-xs" style={{ color: pred.color }}>
                          {pred.conf}%
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-white text-sm sm:text-base leading-snug">
                          {pred.role}
                        </h5>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-bold text-[#00E676]">{pred.growth}</span>
                          <span className="text-xs text-gray-400">·</span>
                          <span className="text-xs text-gray-300 font-medium">{pred.estSalary}</span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight size={18} style={{ color: pred.color }} />
                  </div>
                ))}
              </div>

              <div
                className="p-4 rounded-2xl flex items-center justify-between"
                style={{
                  background: 'rgba(255, 45, 120, 0.08)',
                  border: '1px solid rgba(255, 45, 120, 0.25)'
                }}
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles size={16} color="#FF2D78" />
                  <span className="text-xs text-gray-200 font-medium">
                    Tested against <strong>52,400 verified transitions</strong>
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#FF2D78]">96.4% ACCURACY</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="relative py-28 overflow-hidden">
        <AmbientGlow color="#9C27F4" size={500} top="25%" left="-10%" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading
            badge="Social Proof & Impact"
            badgeColor="#FF9E00"
            badgeIcon={<Star size={13} fill="#FF9E00" />}
            title={<>Real Proof. <span className="gradient-text">Life-Changing Results.</span></>}
            subtitle="Students, developers, and tech founders leverage Skills Pulse daily to leapfrog into prestigious careers and contracts."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                variants={popIn}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-7 flex flex-col justify-between transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white text-base shadow-md"
                        style={{ background: t.avatarBg }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm">{t.name}</h5>
                        <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={15} fill="#FF9E00" color="#FF9E00" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Verified Outcome
                  </span>
                  <NeonBadge color="#00E676">{t.tag}</NeonBadge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="relative py-28 overflow-hidden bg-grid">
        <AmbientGlow color="#FF2D78" size={650} top="15%" left="25%" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 50%, #00E5FF 100%)',
                  boxShadow: '0 0 50px rgba(255,45,120,0.6)'
                }}
              >
                <Cpu size={38} color="white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Don't Wait for the Future. <br />
              <span className="gradient-text">Predict and Own It.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Join 120,000+ ambitious developers, students, and founders who discover high-impact careers, tenders, and hackathons before the crowd.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('dashboard')}
                className="btn-shimmer flex items-center gap-2.5 text-white font-bold px-9 py-4 rounded-2xl text-lg shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <Sparkles size={20} />
                Launch Skills Pulse Free
                <ArrowRight size={20} />
              </button>

              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                <ShieldCheck size={18} color="#00E676" />
                Instant Free Access · Pure React App
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative border-t py-16" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                  style={{ background: 'linear-gradient(135deg, #FF2D78, #9C27F4)' }}
                >
                  <Cpu size={18} color="white" />
                </div>
                <span className="font-black text-xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="gradient-text">SKILLS</span>
                  <span className="text-white"> PULSE</span>
                </span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                AI-driven predictive career intelligence, talent graphs, hackathons, and opportunity discovery platform.
              </p>
              <div className="flex items-center gap-2.5">
                {[Github, Twitter, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-9 h-9 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all hover:border-[#FF2D78]/50 hover:scale-105"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: 'Intelligence', links: ['Career Demand Predictions', 'Skill Gap Roadmaps', 'Talent Graph Engine', 'Semantic Search', 'Company Radar'] },
              { title: 'Opportunities', links: ['Placement Drives', 'Global Hackathons', 'Public GeM Tenders', 'Startup Fellowships', 'Scholarships Hub'] },
              { title: 'Platform', links: ['System Architecture', 'Python AI Service', 'Relational Schemas', 'Documentation', 'API Reference'] },
              { title: 'Trust & Policy', links: ['Data Privacy & Consent', 'Security Standards', 'Terms of Service', 'Open-Source AI Credits', 'Contact Support'] },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                  {col.title}
                </div>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="text-gray-400 text-xs">
              © 2026 Skills Pulse React Platform. Built for the future of work.
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-[#00E676] animate-pulse" />
              Pure React.js Environment Active
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
