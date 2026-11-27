import React, { useState } from 'react'
import {
  Shield,
  Activity,
  Users,
  Database,
  Cpu,
  Terminal,
  Layers,
  Settings,
  LogOut,
  Search,
  Bell,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Play,
  Pause,
  Filter,
  Plus,
  ArrowUpRight,
  ChevronRight,
  Download,
  Server,
  HardDrive,
  Sparkles,
  Zap,
  Sliders,
  Check,
  X,
  ExternalLink,
  Flame,
  Menu,
  Eye,
  SlidersHorizontal
} from 'lucide-react'

// ── NAVIGATION MENU ITEMS ──
const ADMIN_MENU = [
  { id: 'overview', label: 'Command Center', icon: Activity, color: '#00E5FF', badge: 'LIVE' },
  { id: 'users', label: 'User Directory', icon: Users, color: '#9C27F4', badge: '1.2k' },
  { id: 'opportunities', label: 'Opportunity Moderation', icon: Layers, color: '#FF2D78', badge: '8 Pending' },
  { id: 'ingestion', label: 'Crawler & Ingestion', icon: Database, color: '#FF9E00', badge: 'Active' },
  { id: 'ai-engine', label: 'AI & Vector Governance', icon: Cpu, color: '#00E676', badge: 'v2.4' },
  { id: 'audit-logs', label: 'Security & Audit Trail', icon: Terminal, color: '#00E5FF' },
  { id: 'settings', label: 'Platform Config', icon: Settings, color: '#A0AEC0' },
]

export default function AdminDashboard({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [toastMessage, setToastMessage] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Interactive state: Moderation items
  const [opportunities, setOpportunities] = useState([
    {
      id: 'OPP-8921',
      title: 'GeM High-Performance Edge AI Telemetry Framework Tender',
      category: 'Government Tender',
      source: 'GeM Portal Crawler',
      submittedBy: 'GovTech Procurement Cell',
      status: 'pending',
      vectorScore: 0.94,
      date: '12 mins ago',
      value: '₹3.40 Cr',
      tags: ['GeM', 'AI Hardware', 'Govt']
    },
    {
      id: 'OPP-8920',
      title: 'DeepCosmos GenAI Research Winter Fellowship 2026',
      category: 'Internship',
      source: 'Direct Partner API',
      submittedBy: 'Anthropic Labs India',
      status: 'pending',
      vectorScore: 0.98,
      date: '28 mins ago',
      value: '₹1.2L / mo',
      tags: ['AI/ML', 'PPO', 'Fellowship']
    },
    {
      id: 'OPP-8919',
      title: 'National Quantum & SpaceTech Hackathon 2026',
      category: 'Hackathon',
      source: 'Devpost Webhook',
      submittedBy: 'ISRO Tech Park & IIT Bombay',
      status: 'approved',
      vectorScore: 0.91,
      date: '1 hour ago',
      value: '₹25,00,000 Pool',
      tags: ['Quantum', 'Hackathon', 'ISRO']
    },
    {
      id: 'OPP-8918',
      title: 'Autonomous Robotics Fleet Lead Placement Drive',
      category: 'Placement',
      source: 'Campus Recruiter Portal',
      submittedBy: 'AeroDynamics AI Corp',
      status: 'pending',
      vectorScore: 0.88,
      date: '3 hours ago',
      value: '₹28 - 42 LPA',
      tags: ['Robotics', 'ROS2', 'Placements']
    },
    {
      id: 'OPP-8917',
      title: 'CPPP Defense Drone Avionics Firmware Systems RfP',
      category: 'Government Tender',
      source: 'CPPP Scraper #4',
      submittedBy: 'Ministry of Heavy Industries',
      status: 'rejected',
      vectorScore: 0.79,
      date: '5 hours ago',
      value: '₹12.8 Cr',
      tags: ['Defense', 'Firmware', 'CPPP']
    }
  ])

  // Interactive state: Ingestion jobs
  const [ingestionJobs, setIngestionJobs] = useState([
    {
      id: 'JOB-GEM-01',
      name: 'GeM Central Portal Tender Extractor',
      status: 'Running',
      itemsFetched: 428,
      latency: '1.2s',
      frequency: 'Every 30m',
      lastRun: 'Just now',
      health: 'Optimal',
      rate: '99.4%'
    },
    {
      id: 'JOB-CPPP-02',
      name: 'CPPP Defense & Infrastructure Parser',
      status: 'Idle',
      itemsFetched: 194,
      latency: '2.1s',
      frequency: 'Every 2h',
      lastRun: '42m ago',
      health: 'Optimal',
      rate: '98.8%'
    },
    {
      id: 'JOB-DEVPOST-03',
      name: 'Hackathon & Dev Competition Ingestor',
      status: 'Running',
      itemsFetched: 76,
      latency: '0.8s',
      frequency: 'Every 15m',
      lastRun: '3m ago',
      health: 'Optimal',
      rate: '100%'
    },
    {
      id: 'JOB-TECHCRUNCH-04',
      name: 'Seed & Series-A Stealth Startup Tracker',
      status: 'Idle',
      itemsFetched: 312,
      latency: '1.6s',
      frequency: 'Every 1h',
      lastRun: '18m ago',
      health: 'Warning',
      rate: '92.1%'
    },
    {
      id: 'JOB-ARXIV-05',
      name: 'arXiv CS/AI Emerging Tech Trend Scanner',
      status: 'Running',
      itemsFetched: 1450,
      latency: '0.9s',
      frequency: 'Every 4h',
      lastRun: '1h ago',
      health: 'Optimal',
      rate: '99.7%'
    }
  ])

  // Interactive state: Users list
  const [users, setUsers] = useState([
    {
      id: 'USR-1092',
      name: 'Priya Sharma',
      email: 'priya.sharma@iitd.ac.in',
      role: 'Student / Talent',
      status: 'Active',
      vectorMatchRate: '96.4%',
      skillsCount: 14,
      joined: '2 days ago',
      badge: 'Verified'
    },
    {
      id: 'USR-1091',
      name: 'Vikramaditya Bose',
      email: 'vikram.bose@neuralcraft.io',
      role: 'Startup Founder',
      status: 'Active',
      vectorMatchRate: '98.1%',
      skillsCount: 22,
      joined: '1 week ago',
      badge: 'Pro Member'
    },
    {
      id: 'USR-1090',
      name: 'Dr. Anita Roy',
      email: 'anita.roy@drdo.res.in',
      role: 'Tender Officer',
      status: 'Active',
      vectorMatchRate: '91.2%',
      skillsCount: 18,
      joined: '3 weeks ago',
      badge: 'Govt Official'
    },
    {
      id: 'USR-1089',
      name: 'Devon Vance',
      email: 'devon.v@hyperscale.ai',
      role: 'Tech Recruiter',
      status: 'Active',
      vectorMatchRate: '87.5%',
      skillsCount: 9,
      joined: '1 month ago',
      badge: 'Recruiter'
    },
    {
      id: 'USR-1088',
      name: 'Karan Mehra',
      email: 'karan.m@botnet.spam',
      role: 'Unassigned',
      status: 'Suspended',
      vectorMatchRate: '12.0%',
      skillsCount: 1,
      joined: 'Yesterday',
      badge: 'Flagged'
    }
  ])

  // Interactive state: System feature flags
  const [featureFlags, setFeatureFlags] = useState({
    gemTenderIngestion: true,
    pgvectorSimilaritySearch: true,
    fastApiMicroserviceInference: true,
    spectralGraphCentrality: true,
    autoApproveVerifiedRecruiters: false,
    maintenanceMode: false
  })

  // Toast trigger helper
  const showToast = (text) => {
    setToastMessage(text)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Action handlers
  const handleApprove = (id) => {
    setOpportunities(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'approved' } : item)
    )
    showToast(`Opportunity ${id} approved and published to live student feeds.`)
  }

  const handleReject = (id) => {
    setOpportunities(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'rejected' } : item)
    )
    showToast(`Opportunity ${id} rejected and flagged for review.`)
  }

  const handleTriggerSync = () => {
    setIsRefreshing(true)
    showToast('Triggering crawler spider cluster across GeM, CPPP, and Devpost...')
    setTimeout(() => {
      setIngestionJobs(prev =>
        prev.map(job => ({
          ...job,
          itemsFetched: job.itemsFetched + Math.floor(Math.random() * 15) + 3,
          lastRun: 'Just now'
        }))
      )
      setIsRefreshing(false)
      showToast('Crawler sync complete. 48 new vectors indexed in pgvector.')
    }, 1200)
  }

  const handleToggleFlag = (key) => {
    setFeatureFlags(prev => {
      const next = { ...prev, [key]: !prev[key] }
      showToast(`Feature flag "${key}" set to ${next[key] ? 'ENABLED' : 'DISABLED'}`)
      return next
    })
  }

  const handleToggleUserStatus = (id) => {
    setUsers(prev =>
      prev.map(u => {
        if (u.id === id) {
          const newStatus = u.status === 'Active' ? 'Suspended' : 'Active'
          showToast(`User ${u.name} status updated to ${newStatus}`)
          return { ...u, status: newStatus }
        }
        return u
      })
    )
  }

  return (
    <div className="min-h-screen bg-[#08080F] text-white flex flex-col relative selection:bg-[#FF2D78] selection:text-white">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40 z-0" />
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-[#9C27F4]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-10 left-1/4 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Floating Action Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl glass border border-[#00E5FF]/40 shadow-2xl backdrop-blur-xl animate-bounce">
          <Sparkles size={16} className="text-[#00E5FF]" />
          <span className="text-xs font-semibold text-white">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-gray-400 hover:text-white">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      {/* ── FIXED & INDEPENDENTLY SCROLLING ADMIN SIDEBAR ── */}
      <aside
        className={`fixed inset-y-0 left-0 top-0 bottom-0 h-screen z-40 flex flex-col transition-all duration-300 ease-in-out glass-dark border-r border-white/10 ${
          sidebarOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'
        }`}
        style={{
          background: 'linear-gradient(180deg, rgba(8, 8, 15, 0.98) 0%, rgba(13, 10, 24, 0.98) 100%)',
          borderRight: '1px solid rgba(0, 229, 255, 0.15)',
          boxShadow: '4px 0 24px rgba(0,0,0,0.6)'
        }}
      >
        {/* Brand Header */}
        <div className="h-18 p-4 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3 cursor-pointer group overflow-hidden"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #00E5FF 0%, #9C27F4 50%, #FF2D78 100%)',
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)'
              }}
            >
              <Shield size={20} color="white" />
            </div>
            {sidebarOpen && (
              <div className="truncate">
                <div className="font-black text-lg tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="text-[#00E5FF]">ADMIN</span> NEXUS
                </div>
                <div className="text-[10px] text-gray-400 font-mono tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                  ROOT // v2.4.0
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors hidden lg:block"
            title={sidebarOpen ? 'Collapse' : 'Expand'}
          >
            <Menu size={18} />
          </button>
        </div>

        {/* Security Credential Badge */}
        <div className="p-3 border-b border-white/5 flex-shrink-0">
          <div
            className={`flex items-center gap-3 p-2 rounded-xl glass ${
              sidebarOpen ? 'justify-start' : 'justify-center'
            }`}
            style={{ border: '1px solid rgba(0, 229, 255, 0.12)' }}
          >
            <div className="relative">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs text-white"
                style={{ background: 'linear-gradient(135deg, #00E5FF, #9C27F4)' }}
              >
                SA
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00E676] rounded-full border-2 border-[#08080F]" />
            </div>
            {sidebarOpen && (
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate flex items-center gap-1.5">
                  Super Admin
                  <span className="px-1.5 py-0.2 text-[9px] font-mono bg-[#00E5FF]/20 text-[#00E5FF] rounded">L4</span>
                </div>
                <div className="text-[10px] text-gray-400 font-mono">Cluster: ap-south-1</div>
              </div>
            )}
          </div>
        </div>

        {/* ── Scrollable Navigation Items ── */}
        <div className="flex-1 min-h-0 overflow-y-auto px-2 py-3 space-y-1 sidebar-scrollbar overscroll-contain">
          {ADMIN_MENU.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all relative group ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]'
                }`}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(90deg, ${item.color}25 0%, rgba(255,255,255,0.03) 100%)`,
                        borderLeft: `3px solid ${item.color}`,
                        color: 'white'
                      }
                    : {}
                }
                title={!sidebarOpen ? item.label : undefined}
              >
                <div
                  className="w-5 h-5 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ color: isActive ? item.color : 'inherit' }}
                >
                  <Icon size={18} />
                </div>

                {sidebarOpen && (
                  <div className="flex items-center justify-between flex-1 truncate">
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span
                        className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ml-2"
                        style={{
                          background: `${item.color}20`,
                          color: item.color,
                          border: `1px solid ${item.color}40`
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Bottom Switcher & Exit */}
        <div className="p-3 border-t border-white/10 flex-shrink-0 space-y-1.5">
          <button
            onClick={() => onNavigate && onNavigate('dashboard')}
            className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors ${
              sidebarOpen ? 'justify-start' : 'justify-center'
            }`}
            title="Switch to User Dashboard"
          >
            <ExternalLink size={15} />
            {sidebarOpen && <span>User Dashboard</span>}
          </button>

          <button
            onClick={() => onNavigate && onNavigate('landing')}
            className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 transition-colors ${
              sidebarOpen ? 'justify-start' : 'justify-center'
            }`}
            title="Log Out & Exit"
          >
            <LogOut size={15} />
            {sidebarOpen && <span>Exit Nexus</span>}
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA (Offset by fixed sidebar on desktop) ── */}
      <div
        className={`flex-1 flex flex-col min-w-0 min-h-screen transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'
        }`}
      >
        {/* ── TOP HEADER BAR (FIXED TO TOP - NEVER SCROLLS) ── */}
        <header
          className={`fixed top-0 right-0 z-30 h-16 px-6 flex items-center justify-between border-b border-white/10 transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'left-0 lg:left-64' : 'left-0 lg:left-20'
          }`}
          style={{
            background: 'rgba(8, 8, 15, 0.94)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 229, 255, 0.15)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Mobile toggle & title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-xl glass text-gray-300 hover:text-white"
            >
              <Menu size={18} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                  SYSTEM ADMINISTRATION
                </span>
                <span className="text-xs text-gray-400 hidden sm:inline">•</span>
                <span className="text-xs text-[#00E676] font-mono hidden sm:inline flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00E676] inline-block animate-pulse" />
                  Cluster Operational
                </span>
              </div>
              <h1 className="text-lg font-black text-white capitalize tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {ADMIN_MENU.find(m => m.id === activeTab)?.label || 'Command Center'}
              </h1>
            </div>
          </div>

          {/* Quick Actions & Search */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search audit, users, jobs..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs text-white glass placeholder-gray-500 focus:outline-none focus:border-[#00E5FF]/50 transition-all"
              />
            </div>

            <button
              onClick={handleTriggerSync}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, #00E5FF 0%, #00E676 100%)',
                boxShadow: '0 0 16px rgba(0, 229, 255, 0.4)'
              }}
            >
              <RefreshCw size={13} className={isRefreshing ? 'animate-spin' : ''} />
              <span>{isRefreshing ? 'Syncing...' : 'Sync Pipeline'}</span>
            </button>

            <button
              onClick={() => onNavigate && onNavigate('dashboard')}
              className="px-3 py-1.5 rounded-xl glass border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:border-[#FF2D78]/40 transition-colors flex items-center gap-1.5"
            >
              <span>User Mode</span>
              <ArrowUpRight size={13} />
            </button>
          </div>
        </header>

        {/* ── DASHBOARD BODY VIEWS (Offset by fixed top nav) ── */}
        <main className="flex-1 mt-16 p-6 space-y-6 max-w-7xl w-full mx-auto">

          {/* ═══════════════════════════════════════════════════════
              TAB 1: COMMAND CENTER (OVERVIEW)
          ═══════════════════════════════════════════════════════ */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Telemetry Vector Header Card */}
              <div
                className="p-6 rounded-2xl glass-dark border border-[#00E5FF]/20 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(8, 8, 15, 0.95) 0%, rgba(13, 20, 36, 0.95) 100%)'
                }}
              >
                <div className="absolute top-0 right-0 w-80 h-40 bg-gradient-to-bl from-[#00E5FF]/20 to-transparent pointer-events-none blur-2xl" />
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40">
                        SRS 9.2 SYSTEM ADMINISTRATION CORE
                      </span>
                      <span className="text-xs text-gray-400">pgvector & Scikit Engine</span>
                    </div>
                    <h2 className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Platform Telemetry & Real-Time Orchestration
                    </h2>
                    <p className="text-xs text-gray-400 mt-1 max-w-2xl">
                      Automated multi-source opportunity ingestion, pgvector cosine similarity index, and NetworkX talent graph clustering running across 5 active crawlers.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl glass border border-white/10 text-center min-w-[90px]">
                      <div className="text-lg font-black text-[#00E5FF]">99.98%</div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono">Uptime</div>
                    </div>
                    <div className="p-3 rounded-xl glass border border-white/10 text-center min-w-[90px]">
                      <div className="text-lg font-black text-[#00E676]">14.2ms</div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono">Vector P99</div>
                    </div>
                    <div className="p-3 rounded-xl glass border border-white/10 text-center min-w-[90px]">
                      <div className="text-lg font-black text-[#FF2D78]">1,842</div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono">Live Feeds</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Metric Vital Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl glass border border-white/10 relative overflow-hidden group hover:border-[#00E5FF]/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-medium">Total Registered Talent</span>
                    <div className="p-2 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]">
                      <Users size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">12,480</div>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#00E676]">
                    <ArrowUpRight size={13} />
                    <span>+18.4% this week</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl glass border border-white/10 relative overflow-hidden group hover:border-[#FF2D78]/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-medium">Pending Moderation</span>
                    <div className="p-2 rounded-lg bg-[#FF2D78]/10 text-[#FF2D78]">
                      <Layers size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">8 Opportunities</div>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#FF9E00]">
                    <AlertTriangle size={13} />
                    <span>3 high-value tenders</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl glass border border-white/10 relative overflow-hidden group hover:border-[#9C27F4]/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-medium">Active Ingestion Spiders</span>
                    <div className="p-2 rounded-lg bg-[#9C27F4]/10 text-[#9C27F4]">
                      <Database size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">5 Portals</div>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#00E5FF]">
                    <Activity size={13} />
                    <span>2,460 docs parsed / hr</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl glass border border-white/10 relative overflow-hidden group hover:border-[#00E676]/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-medium">AI Inference Workers</span>
                    <div className="p-2 rounded-lg bg-[#00E676]/10 text-[#00E676]">
                      <Cpu size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">4 GPU Instances</div>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#00E676]">
                    <CheckCircle2 size={13} />
                    <span>FastAPI cluster online</span>
                  </div>
                </div>
              </div>

              {/* 2-Column Grid: Live Ingestion Feed & Pending Queue */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Column 1 & 2: Quick Ingestion Queue */}
                <div className="lg:col-span-2 p-5 rounded-2xl glass border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Flame size={16} className="text-[#FF2D78]" />
                        Urgent Moderation Approvals
                      </h3>
                      <p className="text-[11px] text-gray-400">Items scraped requiring admin verification before public broadcasting</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('opportunities')}
                      className="text-xs text-[#00E5FF] hover:underline flex items-center gap-1 font-semibold"
                    >
                      View All
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {opportunities.filter(o => o.status === 'pending').map((opp) => (
                      <div
                        key={opp.id}
                        className="p-3.5 rounded-xl glass border border-white/5 hover:border-[#00E5FF]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#9C27F4]/20 text-[#9C27F4]">
                              {opp.category}
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono">{opp.id}</span>
                            <span className="text-[10px] text-[#00E676] font-mono">Match: {(opp.vectorScore * 100).toFixed(0)}%</span>
                          </div>
                          <div className="text-xs font-bold text-white">{opp.title}</div>
                          <div className="text-[11px] text-gray-400 flex items-center gap-3">
                            <span>By: {opp.submittedBy}</span>
                            <span>•</span>
                            <span className="text-[#FF9E00] font-semibold">{opp.value}</span>
                            <span>•</span>
                            <span>{opp.date}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleApprove(opp.id)}
                            className="px-3 py-1.5 rounded-lg bg-[#00E676]/20 text-[#00E676] hover:bg-[#00E676]/30 text-xs font-bold flex items-center gap-1 transition-all"
                          >
                            <Check size={13} />
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(opp.id)}
                            className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 text-xs font-bold flex items-center gap-1 transition-all"
                          >
                            <X size={13} />
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Microservice Cluster Vitals */}
                <div className="p-5 rounded-2xl glass border border-white/10 space-y-4">
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Server size={16} className="text-[#00E5FF]" />
                      Cluster Node Health
                    </h3>
                    <p className="text-[11px] text-gray-400">SRS Section 7 & 8 Microservices</p>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 font-medium">PostgreSQL + pgvector</span>
                        <span className="text-[#00E676] font-mono">31% RAM (Healthy)</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00E676] rounded-full" style={{ width: '31%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 font-medium">FastAPI Sentence-Transformers</span>
                        <span className="text-[#00E5FF] font-mono">54% GPU (Running)</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00E5FF] rounded-full" style={{ width: '54%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 font-medium">NetworkX Spectral Graph Worker</span>
                        <span className="text-[#9C27F4] font-mono">18% CPU (Idle)</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#9C27F4] rounded-full" style={{ width: '18%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 font-medium">Redis Feed Cache</span>
                        <span className="text-[#FF9E00] font-mono">89% Hit Rate</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF9E00] rounded-full" style={{ width: '89%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-400 space-y-1">
                    <div className="font-mono text-white text-xs">Active Portals Syncing:</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300 text-[10px]">GeM v4.2</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300 text-[10px]">CPPP Portal</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300 text-[10px]">Devpost API</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300 text-[10px]">arXiv RSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════
              TAB 2: USER DIRECTORY & ROLE MANAGEMENT
          ═══════════════════════════════════════════════════════ */}
          {activeTab === 'users' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Users size={20} className="text-[#9C27F4]" />
                    User Directory & Role-Based Access Control
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Manage platform roles, talent vector profiles, recruiter credentials, and security suspensions.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => showToast('User directory exported to CSV.')}
                    className="px-3.5 py-2 rounded-xl glass border border-white/10 text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1.5"
                  >
                    <Download size={14} />
                    Export CSV
                  </button>
                  <button
                    onClick={() => showToast('Opening Invite Admin modal...')}
                    className="px-3.5 py-2 rounded-xl bg-[#9C27F4] text-white text-xs font-bold hover:bg-[#9C27F4]/80 flex items-center gap-1.5"
                  >
                    <Plus size={14} />
                    Invite Admin
                  </button>
                </div>
              </div>

              {/* User Directory Table */}
              <div className="rounded-2xl glass border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-gray-300">
                    <thead className="bg-white/[0.04] text-gray-400 uppercase font-mono text-[10px] tracking-wider border-b border-white/10">
                      <tr>
                        <th className="px-5 py-3">User & Identity</th>
                        <th className="px-5 py-3">Role</th>
                        <th className="px-5 py-3">Vector Match</th>
                        <th className="px-5 py-3">Skills Indexed</th>
                        <th className="px-5 py-3">Status</th>
                        <th className="px-5 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {users.map((u) => (
                        <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9C27F4] to-[#00E5FF] flex items-center justify-center font-bold text-white text-[11px]">
                                {u.name.substring(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-bold text-white flex items-center gap-1.5">
                                  {u.name}
                                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 font-mono text-gray-300">
                                    {u.badge}
                                  </span>
                                </div>
                                <div className="text-[11px] text-gray-400">{u.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3.5 font-medium text-white">{u.role}</td>
                          <td className="px-5 py-3.5">
                            <span className="font-mono text-[#00E676]">{u.vectorMatchRate}</span>
                          </td>
                          <td className="px-5 py-3.5 font-mono">{u.skillsCount} skills</td>
                          <td className="px-5 py-3.5">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                                u.status === 'Active'
                                  ? 'bg-[#00E676]/20 text-[#00E676] border border-[#00E676]/30'
                                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
                              }`}
                            >
                              {u.status}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-right space-x-2">
                            <button
                              onClick={() => handleToggleUserStatus(u.id)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                                u.status === 'Active'
                                  ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
                                  : 'bg-[#00E676]/10 text-[#00E676] hover:bg-[#00E676]/20'
                              }`}
                            >
                              {u.status === 'Active' ? 'Suspend' : 'Activate'}
                            </button>
                            <button
                              onClick={() => showToast(`Opening profile details for ${u.name}`)}
                              className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 hover:text-white text-[11px]"
                            >
                              Inspect
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════
              TAB 3: OPPORTUNITY MODERATION
          ═══════════════════════════════════════════════════════ */}
          {activeTab === 'opportunities' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers size={20} className="text-[#FF2D78]" />
                    Inbound Opportunity Moderation Queue
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Approve, flag, or reject scraped tenders, fellowships, placement schedules, and hackathons.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">
                    {opportunities.filter(o => o.status === 'pending').length} Pending Review
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {opportunities.map((opp) => (
                  <div
                    key={opp.id}
                    className="p-5 rounded-2xl glass border border-white/10 hover:border-[#FF2D78]/30 transition-all space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FF2D78]/20 text-[#FF2D78] border border-[#FF2D78]/30">
                          {opp.category}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">{opp.id}</span>
                        <span className="text-xs text-[#00E5FF] font-mono">Source: {opp.source}</span>
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                            opp.status === 'approved'
                              ? 'bg-[#00E676]/20 text-[#00E676]'
                              : opp.status === 'rejected'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-[#FF9E00]/20 text-[#FF9E00]'
                          }`}
                        >
                          Status: {opp.status.toUpperCase()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {opp.status !== 'approved' && (
                          <button
                            onClick={() => handleApprove(opp.id)}
                            className="px-3 py-1.5 rounded-lg bg-[#00E676]/20 text-[#00E676] hover:bg-[#00E676]/30 text-xs font-bold flex items-center gap-1 transition-all"
                          >
                            <Check size={14} />
                            Publish
                          </button>
                        )}
                        {opp.status !== 'rejected' && (
                          <button
                            onClick={() => handleReject(opp.id)}
                            className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 text-xs font-bold flex items-center gap-1 transition-all"
                          >
                            <X size={14} />
                            Reject
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="text-base font-bold text-white">{opp.title}</div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                      <div>Submitted By: <span className="text-white font-medium">{opp.submittedBy}</span></div>
                      <div>•</div>
                      <div>Contract / Prize Value: <span className="text-[#FF9E00] font-bold">{opp.value}</span></div>
                      <div>•</div>
                      <div>Vector Similarity: <span className="text-[#00E676] font-mono">{(opp.vectorScore * 100).toFixed(1)}%</span></div>
                      <div>•</div>
                      <div>Timestamp: <span>{opp.date}</span></div>
                    </div>

                    <div className="flex items-center gap-1.5 pt-1">
                      {opp.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300 font-mono">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════
              TAB 4: CRAWLER & DATA INGESTION PIPELINE
          ═══════════════════════════════════════════════════════ */}
          {activeTab === 'ingestion' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Database size={20} className="text-[#FF9E00]" />
                    Data Ingestion Jobs & Crawler Spiders (SRS 9.2)
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Real-time status of scrapers parsing Government Portals (GeM, CPPP), hackathon boards, and tech journals.
                  </p>
                </div>
                <button
                  onClick={handleTriggerSync}
                  disabled={isRefreshing}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF9E00] to-[#FF2D78] text-white text-xs font-bold flex items-center gap-2 hover:opacity-90 transition-all"
                >
                  <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
                  Run All Crawlers Now
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {ingestionJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-5 rounded-2xl glass border border-white/10 hover:border-[#FF9E00]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FF9E00]/20 text-[#FF9E00] border border-[#FF9E00]/30">
                          {job.id}
                        </span>
                        <span className="text-xs font-bold text-white">{job.name}</span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            job.status === 'Running'
                              ? 'bg-[#00E676]/20 text-[#00E676]'
                              : 'bg-white/10 text-gray-300'
                          }`}
                        >
                          ● {job.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 flex flex-wrap items-center gap-4 pt-1">
                        <span>Items Ingested: <strong className="text-white font-mono">{job.itemsFetched}</strong></span>
                        <span>•</span>
                        <span>Latency: <strong className="text-[#00E5FF] font-mono">{job.latency}</strong></span>
                        <span>•</span>
                        <span>Schedule: <strong className="text-gray-300 font-mono">{job.frequency}</strong></span>
                        <span>•</span>
                        <span>Last Run: <strong className="text-gray-300">{job.lastRun}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Success Rate</div>
                        <div className="text-sm font-black text-[#00E676] font-mono">{job.rate}</div>
                      </div>
                      <button
                        onClick={() => showToast(`Spawning isolated runner for ${job.id}...`)}
                        className="p-2.5 rounded-xl glass border border-white/10 text-gray-300 hover:text-white hover:border-[#FF9E00]/50 transition-colors"
                        title="Restart Job"
                      >
                        <Play size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════
              TAB 5: AI & VECTOR GOVERNANCE
          ═══════════════════════════════════════════════════════ */}
          {activeTab === 'ai-engine' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Cpu size={20} className="text-[#00E676]" />
                  AI Microservice & Vector Governance (SRS Section 8)
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Configure Sentence Transformers embeddings, cosine similarity thresholds, and XGBoost career pathway weights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl glass border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles size={16} className="text-[#00E676]" />
                    Embedding & Vector Search Weights
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-gray-300">Min Cosine Match Threshold (Opportunities)</span>
                        <span className="text-[#00E676] font-mono font-bold">0.78</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="0.95"
                        step="0.01"
                        defaultValue="0.78"
                        className="w-full accent-[#00E676]"
                      />
                      <p className="text-[10px] text-gray-500 mt-1">Only matches above this threshold are delivered to student feeds.</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-gray-300">Skill Gap Penalty Factor</span>
                        <span className="text-[#00E5FF] font-mono font-bold">0.65</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.05"
                        defaultValue="0.65"
                        className="w-full accent-[#00E5FF]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-gray-300">Talent Centrality Weight (NetworkX)</span>
                        <span className="text-[#9C27F4] font-mono font-bold">0.82</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.05"
                        defaultValue="0.82"
                        className="w-full accent-[#9C27F4]"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => showToast('AI model hyperparameters saved and re-indexed.')}
                    className="w-full py-2.5 rounded-xl bg-[#00E676] text-black text-xs font-bold hover:bg-[#00E676]/90 transition-all"
                  >
                    Apply Parameter Tuning
                  </button>
                </div>

                <div className="p-5 rounded-2xl glass border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Server size={16} className="text-[#00E5FF]" />
                    AI Models in Production
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex justify-between font-bold text-white">
                        <span>sentence-transformers/all-MiniLM-L6-v2</span>
                        <span className="text-[#00E676] font-mono">ONLINE</span>
                      </div>
                      <div className="text-[11px] text-gray-400">384-dimensional dense vectors for semantic profile & opportunity matching.</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex justify-between font-bold text-white">
                        <span>XGBoost Career Horizon Predictor</span>
                        <span className="text-[#00E676] font-mono">ONLINE</span>
                      </div>
                      <div className="text-[11px] text-gray-400">Predicts emerging job trajectory & salary distributions across 2026-2030.</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex justify-between font-bold text-white">
                        <span>NetworkX Spectral Graph Engine</span>
                        <span className="text-[#00E676] font-mono">ONLINE</span>
                      </div>
                      <div className="text-[11px] text-gray-400">Computes eigenvector centrality and collaborative cluster density.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════
              TAB 6: SECURITY & AUDIT TRAIL
          ═══════════════════════════════════════════════════════ */}
          {activeTab === 'audit-logs' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Terminal size={20} className="text-[#00E5FF]" />
                    Security Audit Trail & Admin Actions (SRS 9.2)
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Immutable activity log recording credential checks, data ingestion triggers, and role modifications.
                  </p>
                </div>
                <button
                  onClick={() => showToast('Audit logs exported to JSON.')}
                  className="px-3.5 py-2 rounded-xl glass border border-white/10 text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1.5"
                >
                  <Download size={14} />
                  Export Audit Trail
                </button>
              </div>

              <div className="p-4 rounded-2xl glass border border-white/10 font-mono text-xs space-y-2 bg-black/40">
                <div className="text-[11px] text-gray-500 pb-2 border-b border-white/5">
                  SYSTEM TIME: {new Date().toISOString()} | HOST: skillpulse-core-prod-01
                </div>

                <div className="space-y-1.5 text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">[14:48:12]</span>
                    <span className="text-[#00E676] font-bold">INFO</span>
                    <span>Admin SA-101 published opportunity OPP-8919 (National Quantum Hackathon).</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">[14:32:05]</span>
                    <span className="text-[#00E5FF] font-bold">SPIDER</span>
                    <span>GeM Tender Extractor fetched 42 new RfPs. 12 matched criteria.</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">[14:15:40]</span>
                    <span className="text-[#FF9E00] font-bold">WARN</span>
                    <span>Rate limit approached on TechCrunch Stealth API (420/500 reqs/hr).</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">[13:58:22]</span>
                    <span className="text-red-400 font-bold">SECURITY</span>
                    <span>Suspended user USR-1088 due to automated bot traffic heuristics.</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">[13:40:11]</span>
                    <span className="text-[#00E676] font-bold">INFO</span>
                    <span>pgvector index maintenance re-indexed 14,800 opportunity vectors in 3.4s.</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">[13:12:09]</span>
                    <span className="text-[#9C27F4] font-bold">AUTH</span>
                    <span>SuperAdmin root session refreshed from IP 103.21.244.12 (MFA verified).</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════
              TAB 7: PLATFORM CONFIGURATION & FEATURE FLAGS
          ═══════════════════════════════════════════════════════ */}
          {activeTab === 'settings' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Settings size={20} className="text-gray-300" />
                  System Settings & Feature Switches
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Control real-time platform behaviors, automated scrapers, and database connection modes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl glass border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sliders size={16} className="text-[#00E5FF]" />
                    Global Feature Flags
                  </h3>

                  <div className="space-y-3.5">
                    {Object.entries(featureFlags).map(([key, val]) => (
                      <div
                        key={key}
                        onClick={() => handleToggleFlag(key)}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                      >
                        <div>
                          <div className="text-xs font-bold text-white capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            {val ? 'Enabled in production environment' : 'Disabled / Suspended'}
                          </div>
                        </div>

                        <div
                          className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                            val ? 'bg-[#00E5FF]' : 'bg-white/20'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full bg-black transition-transform ${
                              val ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <HardDrive size={16} className="text-[#FF2D78]" />
                    Database & Cache Purge Controls
                  </h3>

                  <div className="space-y-3 text-xs">
                    <p className="text-gray-400 text-xs">
                      Administrative maintenance actions. These operations execute directly on the production data layer.
                    </p>

                    <button
                      onClick={() => showToast('Redis feed cache flushed successfully.')}
                      className="w-full p-3 rounded-xl glass border border-white/10 hover:border-[#FF9E00]/50 text-left transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-white">Flush Opportunity Recommendation Cache</div>
                        <div className="text-[10px] text-gray-400">Forces immediate vector re-computation on user feed access</div>
                      </div>
                      <RefreshCw size={14} className="text-[#FF9E00]" />
                    </button>

                    <button
                      onClick={() => showToast('Rebuilding pgvector HNSW index in background...')}
                      className="w-full p-3 rounded-xl glass border border-white/10 hover:border-[#00E5FF]/50 text-left transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-white">Rebuild pgvector HNSW Index</div>
                        <div className="text-[10px] text-gray-400">Reconstructs similarity graph across 12k talent profiles</div>
                      </div>
                      <Cpu size={14} className="text-[#00E5FF]" />
                    </button>

                    <button
                      onClick={() => showToast('System audit report generated.')}
                      className="w-full p-3 rounded-xl glass border border-white/10 hover:border-[#00E676]/50 text-left transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-white">Generate Full Compliance Report</div>
                        <div className="text-[10px] text-gray-400">Generates encrypted PDF for institutional audit</div>
                      </div>
                      <Download size={14} className="text-[#00E676]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}
