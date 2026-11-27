import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Compass, Briefcase, Brain, Target, Building2,
  Rocket, Code2, GraduationCap, Award, FileText, Network, Globe,
  MessageSquare, Settings, Search, Bell, Sparkles, ChevronRight,
  TrendingUp, CheckCircle2, Clock, MapPin, DollarSign, ExternalLink,
  Bookmark, Send, ThumbsUp, MessageCircle, Share2, Filter, LogOut,
  ChevronDown, X, User, Menu, ShieldCheck, Zap, AlertCircle
} from 'lucide-react'

// ─── SIDEBAR NAVIGATION ITEMS (SRS 6.4) ──────────────────────────────────
const SIDEBAR_ITEMS = [
  { id: 'overview',       label: 'Overview',            icon: LayoutDashboard, color: '#FF2D78', badge: null },
  { id: 'opportunities',  label: 'Opportunities',       icon: Compass,         color: '#00E5FF', badge: '1.4K' },
  { id: 'future-jobs',    label: 'Future Jobs',         icon: Briefcase,       color: '#9C27F4', badge: 'AI Predict' },
  { id: 'career-intel',   label: 'Career Intelligence', icon: Brain,           color: '#FF2D78', badge: null },
  { id: 'skill-gap',      label: 'Skill Gap',           icon: Target,          color: '#FF9E00', badge: '74% Match' },
  { id: 'companies',      label: 'Companies',           icon: Building2,       color: '#00E5FF', badge: null },
  { id: 'startups',       label: 'Startups',            icon: Rocket,          color: '#00E676', badge: 'Hot' },
  { id: 'hackathons',     label: 'Hackathons',          icon: Code2,           color: '#FF2D78', badge: '14 Active' },
  { id: 'internships',    label: 'Internships',         icon: GraduationCap,   color: '#9C27F4', badge: null },
  { id: 'placements',     label: 'Placements',          icon: Award,           color: '#FF9E00', badge: 'Drives' },
  { id: 'tenders',        label: 'Government Tenders',  icon: FileText,        color: '#00E676', badge: 'GeM / CPPP' },
  { id: 'talent-network', label: 'Talent Network',      icon: Network,         color: '#00E5FF', badge: 'Graph' },
  { id: 'social-feed',    label: 'Social Feed',         icon: Globe,           color: '#FF2D78', badge: 'Live' },
  { id: 'ai-assistant',   label: 'AI Assistant',        icon: MessageSquare,   color: '#9C27F4', badge: 'Copilot' },
  { id: 'settings',       label: 'Settings',            icon: Settings,        color: '#8892A4', badge: null },
]

export default function Dashboard({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [savedItems, setSavedItems] = useState(new Set(['opp-1', 'hack-1']))

  const toggleSave = (id) => {
    setSavedItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-[#08080F] text-white flex overflow-x-hidden font-sans relative">
      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      {/* ── LEFT SIDEBAR (SRS 6.4) ── Fixed to viewport and internal scroll */}
      <aside
        className={`fixed inset-y-0 left-0 top-0 bottom-0 h-screen z-40 flex flex-col transition-all duration-300 ease-in-out glass-dark border-r border-white/10 ${
          sidebarOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'
        }`}
        style={{
          background: 'linear-gradient(180deg, rgba(8, 8, 15, 0.98) 0%, rgba(13, 14, 26, 0.98) 100%)',
          borderRight: '1px solid rgba(255, 45, 120, 0.15)',
          boxShadow: '4px 0 24px rgba(0,0,0,0.5)'
        }}
      >
        {/* Brand Header */}
        <div className="h-18 p-4 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div
            onClick={() => { setActiveTab('overview'); onNavigate && onNavigate('dashboard'); }}
            className="flex items-center gap-3 cursor-pointer group overflow-hidden"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 50%, #00E5FF 100%)',
                boxShadow: '0 0 20px rgba(255, 45, 120, 0.4)'
              }}
            >
              <Sparkles size={20} color="white" />
            </div>
            {sidebarOpen && (
              <div className="truncate">
                <div className="font-black text-lg tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="gradient-text">SKILLS</span> PULSE
                </div>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                  Future Intelligence
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors hidden lg:block"
            title={sidebarOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
          >
            <Menu size={18} />
          </button>
        </div>

        {/* User Card in Sidebar */}
        <div className="p-3 border-b border-white/5 flex-shrink-0">
          <div
            className={`flex items-center gap-3 p-2 rounded-xl glass ${
              sidebarOpen ? 'justify-start' : 'justify-center'
            }`}
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="relative">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs text-white"
                style={{ background: 'linear-gradient(135deg, #FF2D78, #9C27F4)' }}
              >
                PS
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00E676] rounded-full border-2 border-[#08080F]" />
            </div>
            {sidebarOpen && (
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">Priya Sharma</div>
                <div className="text-[10px] text-[#00E5FF] font-medium">96.4% Vector Match</div>
              </div>
            )}
          </div>
        </div>

        {/* 15 Sidebar Navigation Links (Fixed Height & Scrollable) */}
        <div className="flex-1 min-h-0 overflow-y-auto px-2 py-3 space-y-1 sidebar-scrollbar overscroll-contain">
          {SIDEBAR_ITEMS.map((item) => {
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

        {/* Bottom Logout Button */}
        <div className="p-3 border-t border-white/10 flex-shrink-0">
          <button
            onClick={() => onNavigate && onNavigate('landing')}
            className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-xs font-bold text-red-400 hover:bg-red-500/10 transition-colors ${
              sidebarOpen ? 'justify-start' : 'justify-center'
            }`}
          >
            <LogOut size={16} />
            {sidebarOpen && <span>Exit to Home</span>}
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA (Offset by fixed sidebar on desktop) ── */}
      <div
        className={`flex-1 flex flex-col min-w-0 min-h-screen transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'
        }`}
      >
        {/* ── TOP NAVIGATION (FIXED TO TOP - NEVER SCROLLS) ── */}
        <header
          className={`fixed top-0 right-0 z-30 h-16 px-6 flex items-center justify-between border-b border-white/10 transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'left-0 lg:left-64' : 'left-0 lg:left-20'
          }`}
          style={{
            background: 'rgba(8, 8, 15, 0.94)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 45, 120, 0.15)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Mobile Sidebar Toggle & Page Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-xl glass text-gray-300 hover:text-white"
            >
              <Menu size={18} />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-black text-white capitalize tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {SIDEBAR_ITEMS.find(s => s.id === activeTab)?.label || 'Dashboard'}
              </h1>
              <p className="text-[11px] text-gray-400 hidden sm:block">
                AI Opportunity & Predictive Analytics Ecosystem
              </p>
            </div>
          </div>

          {/* Global Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search opportunities, skills, companies, tenders..."
                className="w-full pl-10 pr-12 py-2 rounded-xl text-xs text-white glass placeholder-gray-500 focus:outline-none transition-all"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)'
                }}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-500 border border-white/10 px-1.5 py-0.5 rounded">
                ⌘K
              </span>
            </div>
          </div>

          {/* Right Action Icons (Notifications, AI Trigger, Profile) */}
          <div className="flex items-center gap-3">
            {/* Quick AI Assistant Button */}
            <button
              onClick={() => setActiveTab('ai-assistant')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-md transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
                boxShadow: '0 0 15px rgba(255, 45, 120, 0.4)'
              }}
            >
              <Sparkles size={14} />
              <span>Ask AI Copilot</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-xl glass text-gray-300 hover:text-white transition-colors relative"
              >
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF2D78] rounded-full animate-pulse" />
              </button>

              {/* Notifications Popover */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-80 glass-dark rounded-2xl p-4 shadow-2xl z-50 border border-white/10"
                    style={{ background: '#0D0E1A' }}
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs font-bold text-white">Notifications (3 New)</span>
                      <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-white">
                        <X size={14} />
                      </button>
                    </div>

                    <div className="space-y-3 pt-3">
                      <div className="p-2.5 rounded-xl glass border border-[#FF2D78]/20 flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-[#FF2D78]/20 text-[#FF2D78] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Code2 size={13} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">Hackathon Registration Ending</p>
                          <p className="text-[10px] text-gray-400">GenAI Hackathon closes in 48 hours. Team looking for ML Engineer.</p>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl glass border border-[#00E676]/20 flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-[#00E676]/20 text-[#00E676] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FileText size={13} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">New GeM Tender Match</p>
                          <p className="text-[10px] text-gray-400">Govt of Karnataka issued ₹42L Tender for AI Data Pipeline.</p>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl glass border border-[#00E5FF]/20 flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award size={13} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">Campus Placement Shortlist</p>
                          <p className="text-[10px] text-gray-400">Google AI Campus Drive shortlist released. Vector match: 94%.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1.5 rounded-xl glass text-gray-200 hover:text-white transition-all"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white"
                  style={{ background: 'linear-gradient(135deg, #FF2D78, #9C27F4)' }}
                >
                  PS
                </div>
                <ChevronDown size={14} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-56 glass-dark rounded-2xl p-3 shadow-2xl z-50 border border-white/10"
                    style={{ background: '#0D0E1A' }}
                  >
                    <div className="p-2 border-b border-white/10 mb-2">
                      <p className="text-xs font-bold text-white">Priya Sharma</p>
                      <p className="text-[10px] text-gray-400">priya.sharma@iitd.ac.in</p>
                      <span className="inline-block mt-1 text-[9px] font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full">
                        AI Verified Candidate
                      </span>
                    </div>

                    <button
                      onClick={() => { onNavigate && onNavigate('admin'); setShowProfileMenu(false); }}
                      className="w-full text-left p-2 rounded-lg text-xs text-[#00E5FF] hover:bg-[#00E5FF]/10 flex items-center gap-2 font-semibold"
                    >
                      <ShieldCheck size={14} className="text-[#00E5FF]" /> Admin Command Nexus
                    </button>
                    <button
                      onClick={() => { setActiveTab('settings'); setShowProfileMenu(false); }}
                      className="w-full text-left p-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-2 mt-0.5"
                    >
                      <Settings size={14} /> Profile & Settings
                    </button>
                    <button
                      onClick={() => onNavigate && onNavigate('landing')}
                      className="w-full text-left p-2 rounded-lg text-xs text-red-400 hover:bg-red-500/10 flex items-center gap-2 mt-1"
                    >
                      <LogOut size={14} /> Log Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* ── DYNAMIC CONTENT CONTAINER (Offset by fixed top nav) ── */}
        <main className="flex-1 mt-16 p-4 sm:p-6 lg:p-8 space-y-8 bg-grid">
          {activeTab === 'overview' && (
            <OverviewWidgets savedItems={savedItems} toggleSave={toggleSave} setActiveTab={setActiveTab} />
          )}

          {activeTab === 'opportunities' && (
            <OpportunitiesView savedItems={savedItems} toggleSave={toggleSave} />
          )}

          {activeTab === 'future-jobs' && (
            <FutureJobsView />
          )}

          {activeTab === 'career-intel' && (
            <CareerIntelView />
          )}

          {activeTab === 'skill-gap' && (
            <SkillGapView />
          )}

          {activeTab === 'companies' && (
            <CompaniesView />
          )}

          {activeTab === 'startups' && (
            <StartupsView />
          )}

          {activeTab === 'hackathons' && (
            <HackathonsView savedItems={savedItems} toggleSave={toggleSave} />
          )}

          {activeTab === 'internships' && (
            <InternshipsView savedItems={savedItems} toggleSave={toggleSave} />
          )}

          {activeTab === 'placements' && (
            <PlacementsView />
          )}

          {activeTab === 'tenders' && (
            <GovernmentTendersView savedItems={savedItems} toggleSave={toggleSave} />
          )}

          {activeTab === 'talent-network' && (
            <TalentNetworkView />
          )}

          {activeTab === 'social-feed' && (
            <SocialFeedView />
          )}

          {activeTab === 'ai-assistant' && (
            <AIAssistantView />
          )}

          {activeTab === 'settings' && (
            <SettingsView />
          )}
        </main>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// WIDGETS SECTION (SRS 6.4: All Dashboard Widgets)
// ─────────────────────────────────────────────────────────────────────────────
function OverviewWidgets({ savedItems, toggleSave, setActiveTab }) {
  return (
    <div className="space-y-8">
      {/* ── WELCOME BANNER & TALENT SCORE ── */}
      <div
        className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden"
        style={{
          border: '1px solid rgba(255, 45, 120, 0.25)',
          background: 'linear-gradient(135deg, rgba(255,45,120,0.12) 0%, rgba(156,39,244,0.12) 50%, rgba(8,8,15,0.95) 100%)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}
      >
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider glass text-[#00E5FF] mb-3 border border-[#00E5FF]/30">
              <Sparkles size={12} />
              AI Intelligence Active · Fresh Data Synced 4m ago
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Welcome back, Priya! Here are your <span className="gradient-text">Future Opportunities</span>.
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl leading-relaxed">
              Your profile vector was benchmarked across <strong>500,000+ industry signals</strong>. You are matching <strong>140+ high-growth roles</strong>, 3 upcoming campus hackathons, and 8 GeM tenders.
            </p>
          </div>

          {/* Quick Talent Vector Metric Gauge */}
          <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/10 flex-shrink-0">
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
                <circle
                  cx="18" cy="18" r="15" fill="none"
                  stroke="#FF2D78" strokeWidth="3.5"
                  strokeDasharray="96.4 100"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 8px #FF2D78)' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-black text-xs text-[#FF2D78]">
                96%
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-white">Talent Score</div>
              <div className="text-[11px] text-[#00E676] font-semibold">+4.2% this week</div>
              <div className="text-[10px] text-gray-400">Target: ML Engineer</div>
            </div>
          </div>
        </div>

        {/* Quick Stat Pill Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-6 pt-6 border-t border-white/10">
          <div className="p-3 rounded-xl glass border border-white/5 cursor-pointer hover:border-[#FF2D78]/40 transition-colors" onClick={() => setActiveTab('opportunities')}>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Matched Opportunities</div>
            <div className="text-xl font-black text-white mt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1,420</div>
            <div className="text-[10px] text-[#00E5FF] mt-0.5">84 High Affinity</div>
          </div>

          <div className="p-3 rounded-xl glass border border-white/5 cursor-pointer hover:border-[#9C27F4]/40 transition-colors" onClick={() => setActiveTab('skill-gap')}>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Skill Gap Readiness</div>
            <div className="text-xl font-black text-white mt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>74%</div>
            <div className="text-[10px] text-[#FF9E00] mt-0.5">2 Priority Modules</div>
          </div>

          <div className="p-3 rounded-xl glass border border-white/5 cursor-pointer hover:border-[#00E5FF]/40 transition-colors" onClick={() => setActiveTab('hackathons')}>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Active Hackathons</div>
            <div className="text-xl font-black text-white mt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>14</div>
            <div className="text-[10px] text-[#00E676] mt-0.5">$2.4M Prize Pool</div>
          </div>

          <div className="p-3 rounded-xl glass border border-white/5 cursor-pointer hover:border-[#00E676]/40 transition-colors" onClick={() => setActiveTab('tenders')}>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Govt Tender Alerts</div>
            <div className="text-xl font-black text-white mt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>8</div>
            <div className="text-[10px] text-[#FF2D78] mt-0.5">₹1.8 Cr Potential</div>
          </div>
        </div>
      </div>

      {/* ── GRID OF DASHBOARD WIDGETS (SRS 6.4) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* WIDGET 1: RECOMMENDED OPPORTUNITIES (Span 2) */}
        <div className="lg:col-span-2 glass rounded-3xl p-6 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF2D78]/20 text-[#FF2D78] flex items-center justify-center">
                <Compass size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Recommended Opportunities</h3>
                <p className="text-[11px] text-gray-400">Personalized via content & graph filtering</p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('opportunities')}
              className="text-xs font-bold text-[#00E5FF] hover:underline flex items-center gap-1"
            >
              View All (1.4K) <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                id: 'opp-1',
                title: 'Generative AI & LLM Systems Engineer',
                company: 'Google DeepMind / Cloud',
                type: 'Placement Drive',
                typeColor: '#FF2D78',
                location: 'Bengaluru · Hybrid',
                stipend: '₹28 - 42 LPA',
                match: 96,
                deadline: '4 Days Left',
                tags: ['PyTorch', 'Transformers', 'Distributed Systems']
              },
              {
                id: 'opp-2',
                title: 'Computer Vision & Multi-Modal Intern',
                company: 'Microsoft Research India',
                type: 'Internship',
                typeColor: '#9C27F4',
                location: 'Hyderabad · Remote Option',
                stipend: '₹1.2L / month',
                match: 91,
                deadline: '10 Days Left',
                tags: ['Diffusion Models', 'Python', 'CUDA']
              },
              {
                id: 'opp-3',
                title: 'State AI Healthcare Data Pipeline',
                company: 'Govt of Karnataka (GeM Tender)',
                type: 'Govt Tender',
                typeColor: '#00E676',
                location: 'State Tender · Karnataka',
                stipend: '₹45,00,000 Budget',
                match: 88,
                deadline: '8 Days Left',
                tags: ['GeM Portal', 'FastAPI', 'PostgreSQL']
              }
            ].map(item => (
              <div
                key={item.id}
                className="p-4 rounded-2xl glass hover:border-white/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/5"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full"
                      style={{ background: `${item.typeColor}20`, color: item.typeColor, border: `1px solid ${item.typeColor}40` }}
                    >
                      {item.type}
                    </span>
                    <span className="text-[10px] font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full">
                      {item.match}% Match
                    </span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Clock size={11} /> {item.deadline}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white hover:text-[#00E5FF] cursor-pointer transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs text-gray-300 flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-gray-200">{item.company}</span>
                    <span>•</span>
                    <span className="text-gray-400 flex items-center gap-1"><MapPin size={11} /> {item.location}</span>
                    <span>•</span>
                    <span className="text-[#00E676] font-semibold">{item.stipend}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-md glass text-gray-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => toggleSave(item.id)}
                    className="p-2 rounded-xl glass hover:text-white transition-colors border border-white/10"
                    title={savedItems.has(item.id) ? 'Saved' : 'Save'}
                  >
                    <Bookmark size={15} fill={savedItems.has(item.id) ? '#FF2D78' : 'none'} color={savedItems.has(item.id) ? '#FF2D78' : 'currentColor'} />
                  </button>
                  <button
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md flex items-center gap-1.5"
                    style={{ background: 'linear-gradient(135deg, #FF2D78, #9C27F4)' }}
                  >
                    Apply Now <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WIDGET 2: FUTURE JOB PREDICTIONS */}
        <div className="glass rounded-3xl p-6 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#9C27F4]/20 text-[#9C27F4] flex items-center justify-center">
                <Brain size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Future Job Demand</h3>
                <p className="text-[11px] text-gray-400">ML Forecast 2026 - 2028</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-gray-400">v2.4</span>
          </div>

          <div className="space-y-4">
            {[
              { role: 'Generative AI Engineer', growth: '+72% Demand', confidence: 95, salary: '₹24 - 45L', color: '#FF2D78' },
              { role: 'Autonomous Agent Dev',   growth: '+115% Demand', confidence: 89, salary: '₹22 - 40L', color: '#9C27F4' },
              { role: 'MLOps & LLMOps Lead',    growth: '+48% Demand', confidence: 84, salary: '₹28 - 50L', color: '#00E5FF' },
              { role: 'Quantum Software Eng',   growth: '+60% Demand', confidence: 78, salary: '₹30 - 65L', color: '#FF9E00' },
            ].map(job => (
              <div key={job.role} className="p-3 rounded-2xl glass border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{job.role}</span>
                  <span className="text-[11px] font-bold text-[#00E676]">{job.growth}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span>Confidence: <strong className="text-white">{job.confidence}%</strong></span>
                  <span className="text-gray-300 font-medium">{job.salary}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${job.confidence}%`, background: job.color }} />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setActiveTab('future-jobs')}
            className="w-full mt-4 py-2.5 rounded-xl text-xs font-bold text-white glass hover:bg-white/5 border border-white/10 transition-colors text-center"
          >
            Explore Career Roadmap Engine →
          </button>
        </div>
      </div>

      {/* ── ROW 2: SKILL GAP & HACKATHONS & GOVERNMENT TENDERS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* WIDGET 3: SKILL DEMAND & GAP RADAR */}
        <div className="glass rounded-3xl p-6 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF9E00]/20 text-[#FF9E00] flex items-center justify-center">
                <Target size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Skill Gap Analysis</h3>
                <p className="text-[11px] text-gray-400">Target: ML Engineer</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#00E676]">74% Match</span>
          </div>

          <div className="space-y-3">
            {[
              { skill: 'Python & FastAPI', val: 94, color: '#00E676', state: 'Proficient' },
              { skill: 'Machine Learning Models', val: 88, color: '#00E5FF', state: 'Strong' },
              { skill: 'Vector Databases (pgvector)', val: 78, color: '#9C27F4', state: 'Good' },
              { skill: 'PyTorch Deep Learning', val: 45, color: '#FF9E00', state: 'Gap to Close' },
              { skill: 'Distributed MLOps', val: 24, color: '#FF2D78', state: 'Priority Missing' }
            ].map(s => (
              <div key={s.skill} className="text-xs space-y-1">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-gray-300 font-medium">{s.skill}</span>
                  <span style={{ color: s.color }} className="font-bold">{s.val}% · {s.state}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${s.val}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-[#00E676]/10 border border-[#00E676]/25 text-[11px] text-gray-300 leading-relaxed">
            <span className="font-bold text-[#00E676] block mb-0.5">AI Pathway Recommendation:</span>
            Finish <strong>Distributed PyTorch & Kubernetes</strong> in 30 days to leapfrog to 94% role match.
          </div>
        </div>

        {/* WIDGET 4: UPCOMING HACKATHONS */}
        <div className="glass rounded-3xl p-6 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF2D78]/20 text-[#FF2D78] flex items-center justify-center">
                <Code2 size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Upcoming Hackathons</h3>
                <p className="text-[11px] text-gray-400">Team formation & prizes</p>
              </div>
            </div>
            <button onClick={() => setActiveTab('hackathons')} className="text-xs font-bold text-[#FF2D78] hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {[
              { id: 'hack-1', title: 'Global Autonomous Agent Hack 2026', prize: '$120,000', days: '3 Days Left', theme: 'AI Agents', teams: '420 Teams' },
              { id: 'hack-2', title: 'Smart India Innovation Fest', prize: '₹25,00,000', days: '8 Days Left', theme: 'Public GovTech', teams: '1.2K Teams' },
              { id: 'hack-3', title: 'CyberDefend Quantum Challenge', prize: '$85,000', days: '14 Days Left', theme: 'Security', teams: '210 Teams' }
            ].map(h => (
              <div key={h.id} className="p-3.5 rounded-2xl glass border border-white/5 space-y-2 hover:border-[#FF2D78]/30 transition-colors">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white truncate max-w-[180px]">{h.title}</span>
                  <span className="text-[10px] font-bold text-[#FF2D78] bg-[#FF2D78]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                    {h.days}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span className="text-[#00E676] font-bold">{h.prize}</span>
                  <span>{h.theme}</span>
                  <span>{h.teams}</span>
                </div>
                <button
                  onClick={() => setActiveTab('hackathons')}
                  className="w-full py-1.5 rounded-lg text-[11px] font-bold text-white glass hover:bg-white/10 transition-colors"
                >
                  Join / Form Squad
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* WIDGET 5: GOVERNMENT TENDER ALERTS */}
        <div className="glass rounded-3xl p-6 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00E676]/20 text-[#00E676] flex items-center justify-center">
                <FileText size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Government Tender Radar</h3>
                <p className="text-[11px] text-gray-400">GeM & CPPP Public Contracts</p>
              </div>
            </div>
            <button onClick={() => setActiveTab('tenders')} className="text-xs font-bold text-[#00E676] hover:underline">
              Live Bids
            </button>
          </div>

          <div className="space-y-3">
            {[
              { id: 'tender-1', title: 'AI Citizen Assistance Chatbot', dept: 'Ministry of Electronics & IT', val: '₹65 Lakhs', deadline: '5 Days' },
              { id: 'tender-2', title: 'Cloud Infrastructure Migration & SOC', dept: 'State Health Mission, MH', val: '₹1.2 Crore', deadline: '9 Days' },
              { id: 'tender-3', title: 'Automated Smart Traffic Analysis System', dept: 'Delhi Transport Dept', val: '₹88 Lakhs', deadline: '12 Days' }
            ].map(t => (
              <div key={t.id} className="p-3.5 rounded-2xl glass border border-white/5 space-y-1.5 hover:border-[#00E676]/30 transition-colors">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white truncate max-w-[190px]">{t.title}</span>
                  <span className="text-[10px] font-black text-[#00E676]">{t.val}</span>
                </div>
                <div className="text-[11px] text-gray-400 truncate">{t.dept}</div>
                <div className="flex items-center justify-between pt-1 text-[10px]">
                  <span className="text-gray-400">Deadline: <strong className="text-red-400">{t.deadline}</strong></span>
                  <span className="text-[#00E5FF] font-bold hover:underline cursor-pointer">View Tender Doc →</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl glass border border-white/10 text-[11px] text-gray-400 flex items-center justify-between">
            <span>MSME & Startup Exemption:</span>
            <span className="font-bold text-[#00E676]">Eligible (0 EMD)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 1: OPPORTUNITIES (All categories filterable)
// ─────────────────────────────────────────────────────────────────────────────
function OpportunitiesView({ savedItems, toggleSave }) {
  const [filter, setFilter] = useState('all')

  const items = [
    { id: 'opp-1', title: 'Generative AI & LLM Systems Engineer', company: 'Google DeepMind', cat: 'jobs', location: 'Bengaluru · Hybrid', stipend: '₹28 - 42 LPA', match: 96, deadline: '4 Days Left', tags: ['PyTorch', 'Transformers', 'FastAPI'] },
    { id: 'opp-2', title: 'Computer Vision & Multi-Modal Intern', company: 'Microsoft Research India', cat: 'internships', location: 'Hyderabad · Remote', stipend: '₹1.2L / mo', match: 91, deadline: '10 Days Left', tags: ['Python', 'CUDA', 'Diffusion'] },
    { id: 'opp-3', title: 'Karnataka State AI Data Pipeline', company: 'Govt of Karnataka (GeM)', cat: 'tenders', location: 'Bengaluru', stipend: '₹45L Contract', match: 88, deadline: '8 Days Left', tags: ['GeM', 'PostgreSQL', 'Docker'] },
    { id: 'opp-4', title: 'Campus Placement: Software Engineer', company: 'Amazon Web Services', cat: 'placements', location: 'Hyderabad', stipend: '₹32 LPA', match: 93, deadline: '2 Days Left', tags: ['Java', 'Cloud', 'Algorithms'] },
    { id: 'opp-5', title: 'Global Autonomous Agent Hackathon', company: 'Anthropic Ecosystem', cat: 'hackathons', location: 'Online', stipend: '$120,000 Prizes', match: 97, deadline: '3 Days Left', tags: ['Agents', 'Tool Calling', 'TypeScript'] }
  ]

  const filtered = filter === 'all' ? items : items.filter(i => i.cat === filter)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Opportunity Universe Matrix
          </h2>
          <p className="text-xs text-gray-400">Showing {filtered.length} verified opportunities matched to your talent vector</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {['all', 'jobs', 'internships', 'hackathons', 'tenders', 'placements'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-[#FF2D78] to-[#9C27F4] text-white shadow-md'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(item => (
          <div key={item.id} className="p-5 rounded-3xl glass border border-white/10 space-y-3 relative overflow-hidden hover:border-[#FF2D78]/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#FF2D78] bg-[#FF2D78]/10 px-2.5 py-1 rounded-full border border-[#FF2D78]/30">
                {item.cat}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full">{item.match}% Match</span>
                <button onClick={() => toggleSave(item.id)} className="text-gray-400 hover:text-white">
                  <Bookmark size={16} fill={savedItems.has(item.id) ? '#FF2D78' : 'none'} color={savedItems.has(item.id) ? '#FF2D78' : 'currentColor'} />
                </button>
              </div>
            </div>

            <h3 className="text-base font-bold text-white hover:text-[#00E5FF] cursor-pointer transition-colors">
              {item.title}
            </h3>

            <div className="text-xs text-gray-300 flex items-center justify-between">
              <span className="font-semibold text-white">{item.company}</span>
              <span className="text-[#00E676] font-bold">{item.stipend}</span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-gray-400">
              <span className="flex items-center gap-1"><MapPin size={11} /> {item.location}</span>
              <span className="flex items-center gap-1"><Clock size={11} /> {item.deadline}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map(t => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-md glass text-gray-300 border border-white/5">{t}</span>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">Eligibility: Verified</span>
              <button className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md" style={{ background: 'linear-gradient(135deg, #FF2D78, #9C27F4)' }}>
                Apply with Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 2: FUTURE JOBS (AI Career Demand Prediction)
// ─────────────────────────────────────────────────────────────────────────────
function FutureJobsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Future Job Demand Forecast (2026 - 2030)
        </h2>
        <p className="text-xs text-gray-400">Macroeconomic hiring indicators analyzed using XGBoost and time-series spectral models.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Generative AI & LLM Systems Engineer', demand: '+78%', conf: 96, salary: '₹25 - 48 LPA', desc: 'Fine-tuning, quantization, model distillation, and high-throughput vLLM cluster deployments.', skills: ['PyTorch', 'vLLM', 'CUDA', 'Triton'] },
          { title: 'Autonomous Multi-Agent Architect', demand: '+125%', conf: 92, salary: '₹22 - 42 LPA', desc: 'Designing self-orchestrating agent teams with LangGraph, AutoGen, and tool calling frameworks.', skills: ['LangGraph', 'Python', 'FastAPI', 'Redis'] },
          { title: 'AI Governance & Safety Auditor', demand: '+94%', conf: 88, salary: '₹20 - 38 LPA', desc: 'Red-teaming models, bias audits, compliance with EU AI Act and India DPDPA regulations.', skills: ['Evals', 'Red Teaming', 'Python', 'Policy'] },
          { title: 'Edge AI & Embedded Neural Engineer', demand: '+65%', conf: 85, salary: '₹24 - 45 LPA', desc: 'Deploying quantized quantized models onto microcontrollers, edge devices, and robotic platforms.', skills: ['TensorRT', 'C++', 'ONNX', 'Embedded'] },
          { title: 'Quantum Computing Algorithm Dev', demand: '+82%', conf: 81, salary: '₹30 - 60 LPA', desc: 'Simulating quantum variational circuits and error-correction algorithms for drug discovery.', skills: ['Qiskit', 'Cirq', 'Linear Algebra', 'Python'] },
          { title: 'Spatial Computing & XR Visionary', demand: '+55%', conf: 79, salary: '₹18 - 35 LPA', desc: 'Developing 3D vision, Gaussian splatting, and neural radiance field experiences.', skills: ['3D Vision', 'NeRFs', 'Unity', 'PyTorch'] },
        ].map(job => (
          <div key={job.title} className="p-6 rounded-3xl glass border border-white/10 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-[#00E676] bg-[#00E676]/10 px-2.5 py-1 rounded-full border border-[#00E676]/30">
                {job.demand} YoY Growth
              </span>
              <span className="text-xs font-bold text-gray-300">Confidence: {job.conf}%</span>
            </div>

            <h3 className="text-lg font-bold text-white leading-snug">{job.title}</h3>
            <p className="text-xs text-gray-300 leading-relaxed">{job.desc}</p>
            <div className="text-sm font-bold text-[#00E5FF]">{job.salary}</div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {job.skills.map(s => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-md glass text-gray-300 border border-white/5">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 3: CAREER INTELLIGENCE (Transition & Trajectory Engine)
// ─────────────────────────────────────────────────────────────────────────────
function CareerIntelView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Career Path Transition Intelligence
        </h2>
        <p className="text-xs text-gray-400">Algorithmic pathways connecting your current profile to aspirational future roles.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl glass border border-white/10 space-y-5">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <TrendingUp size={18} className="text-[#FF2D78]" />
            Fastest High-Yield Transition Pathway
          </h3>

          <div className="space-y-4">
            {[
              { step: 'Stage 1 (Current)', title: 'Full-Stack Developer / Python Engineer', salary: '₹8 - 14 LPA', status: 'Completed' },
              { step: 'Stage 2 (In 45 Days)', title: 'AI Systems Specialist & Model Finetuner', salary: '₹18 - 25 LPA', status: 'In Progress (74%)' },
              { step: 'Stage 3 (In 1 Year)', title: 'Senior Generative AI Platform Architect', salary: '₹35 - 55 LPA', status: 'Target Role' },
            ].map((p, idx) => (
              <div key={p.step} className="p-4 rounded-2xl glass border border-white/5 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-[#FF2D78]">{p.step}</span>
                  <span className="text-[10px] font-bold text-[#00E676]">{p.status}</span>
                </div>
                <div className="text-sm font-bold text-white">{p.title}</div>
                <div className="text-xs text-gray-400">Expected Compensation: {p.salary}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl glass border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Brain size={18} className="text-[#9C27F4]" />
            Market Demand Drivers
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Hiring volume for <strong>AI Engineer</strong> has expanded by <strong>340%</strong> across tier-1 Indian tech centers (Bengaluru, Hyderabad, Pune, Gurugram) over the past 12 months.
          </p>

          <div className="space-y-2 pt-2">
            <div className="p-3 rounded-xl glass border border-white/5 flex justify-between text-xs">
              <span className="text-gray-300">Startups Series A+ Hiring</span>
              <span className="text-[#00E676] font-bold">1,840 Open Roles</span>
            </div>
            <div className="p-3 rounded-xl glass border border-white/5 flex justify-between text-xs">
              <span className="text-gray-300">Campus Drives with AI Mandate</span>
              <span className="text-[#00E5FF] font-bold">78% of Tech Companies</span>
            </div>
            <div className="p-3 rounded-xl glass border border-white/5 flex justify-between text-xs">
              <span className="text-gray-300">Average Base Salary Premium</span>
              <span className="text-[#FF9E00] font-bold">+42% vs Web Dev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 4: SKILL GAP ANALYZER
// ─────────────────────────────────────────────────────────────────────────────
function SkillGapView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Target Role: Machine Learning Engineer
        </h2>
        <p className="text-xs text-gray-400">Benchmark your verified skills against 2,400+ current ML Job Descriptions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-3xl glass border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white">Skill Proficiency Spectrum</h3>

          <div className="space-y-4">
            {[
              { skill: 'Python (OOP, Concurrency, AsyncIO)', match: 94, status: 'Verified Mastered', color: '#00E676' },
              { skill: 'Scikit-Learn & Classical Statistics', match: 88, status: 'Strong', color: '#00E5FF' },
              { skill: 'SQL & pgvector Embeddings', match: 78, status: 'Competent', color: '#9C27F4' },
              { skill: 'PyTorch Deep Learning & Distributed Training', match: 42, status: 'Target Gap', color: '#FF9E00' },
              { skill: 'MLOps, Triton, vLLM & Kubernetes', match: 22, status: 'Critical Gap', color: '#FF2D78' }
            ].map(s => (
              <div key={s.skill} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-white">{s.skill}</span>
                  <span style={{ color: s.color }} className="font-bold text-[11px]">{s.match}% · {s.status}</span>
                </div>
                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${s.match}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl glass border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white">Recommended 45-Day Sprint</h3>

          <div className="space-y-3">
            <div className="p-3 rounded-xl glass border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-[#FF2D78]">Step 1 · Week 1-2</span>
              <p className="text-xs font-semibold text-white">Fine-tune LLaMA 3 with LoRA & Unsloth</p>
              <p className="text-[10px] text-gray-400">Learn parameter-efficient fine-tuning on custom dataset.</p>
            </div>

            <div className="p-3 rounded-xl glass border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-[#9C27F4]">Step 2 · Week 3-4</span>
              <p className="text-xs font-semibold text-white">Deploy on vLLM with Docker Container</p>
              <p className="text-[10px] text-gray-400">Implement tensor parallel inference API endpoints.</p>
            </div>

            <div className="p-3 rounded-xl glass border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-[#00E5FF]">Step 3 · Week 5-6</span>
              <p className="text-xs font-semibold text-white">Build RAG with pgvector & Hybrid Search</p>
              <p className="text-[10px] text-gray-400">Integrate multi-vector retrieval with rerankers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 5: COMPANIES & RADAR
// ─────────────────────────────────────────────────────────────────────────────
function CompaniesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Company Tech & Hiring Radar
        </h2>
        <p className="text-xs text-gray-400">Deep-dive into tech stacks, funding, and campus placement frequency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Google India', domain: 'Cloud & AI Research', hiring: 'Very High', drives: 'Campus + Off-Campus', stack: ['Python', 'TensorFlow', 'JAX', 'C++'], openings: 84 },
          { name: 'Microsoft India', domain: 'Azure & AI Platform', hiring: 'High', drives: 'Pre-Placement Offers', stack: ['C#', 'Python', 'PyTorch', 'Azure'], openings: 62 },
          { name: 'Swiggy / Instamart', domain: 'Quick Commerce AI', hiring: 'High', drives: 'Direct Hackathon Hiring', stack: ['Go', 'Kafka', 'Python', 'pgvector'], openings: 38 },
          { name: 'Zomato / Blinkit', domain: 'Logistics AI', hiring: 'Moderate', drives: 'Off-Campus Recruitment', stack: ['Python', 'Kubernetes', 'FastAPI'], openings: 26 },
          { name: 'Flipkart', domain: 'E-commerce Recommendation', hiring: 'High', drives: 'GRiD Campus Hackathon', stack: ['Java', 'Scala', 'PyTorch'], openings: 45 },
          { name: 'Razorpay', domain: 'Fintech Infrastructure', hiring: 'High', drives: 'Stealth Drive', stack: ['Go', 'Node.js', 'React', 'PostgreSQL'], openings: 31 }
        ].map(c => (
          <div key={c.name} className="p-6 rounded-3xl glass border border-white/10 space-y-3 hover:border-[#00E5FF]/40 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full">{c.hiring} Hiring</span>
              <span className="text-xs font-bold text-white">{c.openings} Open Roles</span>
            </div>
            <h3 className="text-lg font-bold text-white">{c.name}</h3>
            <p className="text-xs text-gray-400">{c.domain}</p>
            <div className="text-[11px] text-gray-300">Recruitment Mode: <strong>{c.drives}</strong></div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {c.stack.map(s => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-md glass text-gray-300 border border-white/5">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 6: STARTUPS & STEALTH HIRING
// ─────────────────────────────────────────────────────────────────────────────
function StartupsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Emerging Startups & Stealth Hiring
        </h2>
        <p className="text-xs text-gray-400">Discover early-stage ventures hiring foundational engineering and AI talent.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Sarvam AI', round: '$41M Series A', focus: 'Indian Indic Language LLMs', hiring: 'Lead ML / Voice Engineers', equity: '0.1% - 0.5%' },
          { name: 'Krutrim AI', round: '$50M Unicorn', focus: 'Full-Stack AI Data Center & Models', hiring: 'Cluster & Silicon Engineers', equity: 'Stock Options' },
          { name: 'Nexus Cloud IO', round: '$4M Seed', focus: 'AI Agent Observability', hiring: 'Full-Stack React & FastAPI', equity: '0.2% - 1.0%' },
        ].map(s => (
          <div key={s.name} className="p-6 rounded-3xl glass border border-white/10 space-y-3 hover:border-[#00E676]/40 transition-colors">
            <span className="text-[10px] font-black text-[#00E676] bg-[#00E676]/10 px-2.5 py-1 rounded-full border border-[#00E676]/30">
              {s.round}
            </span>
            <h3 className="text-lg font-bold text-white">{s.name}</h3>
            <p className="text-xs text-gray-400">{s.focus}</p>
            <div className="text-xs text-white">Target Roles: <strong>{s.hiring}</strong></div>
            <div className="text-xs text-[#00E5FF]">Equity Grants: <strong>{s.equity}</strong></div>
            <button className="w-full mt-2 py-2 rounded-xl text-xs font-bold text-white glass hover:bg-white/10 transition-colors">
              Connect with Founders →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 7: HACKATHONS
// ─────────────────────────────────────────────────────────────────────────────
function HackathonsView({ savedItems, toggleSave }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Active & Upcoming Hackathons
        </h2>
        <p className="text-xs text-gray-400">Form squads, build prototypes, and win prize pools.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { id: 'hack-1', title: 'Global Autonomous Agent Hack 2026', prize: '$120,000 USD', dates: 'Dec 12 - 15, 2026', mode: 'Virtual Online', squads: '420 Teams Registered', tags: ['AI Agents', 'Open Source', 'LLMs'] },
          { id: 'hack-2', title: 'Smart India Hackathon (SIH)', prize: '₹25,00,000 INR', dates: 'Jan 5 - 8, 2027', mode: 'Offline (Delhi & Bengaluru)', squads: '1,420 Teams', tags: ['GovTech', 'Agritech', 'Healthcare'] },
          { id: 'hack-3', title: 'CyberDefend Post-Quantum Challenge', prize: '$85,000 USD', dates: 'Jan 20 - 22, 2027', mode: 'Hybrid', squads: '210 Teams', tags: ['Cryptography', 'Rust', 'Quantum'] },
          { id: 'hack-4', title: 'India Web3 & DeFi Builders Sprint', prize: '$50,000 USD', dates: 'Feb 1 - 3, 2027', mode: 'Bengaluru Hub', squads: '315 Teams', tags: ['Solana', 'Smart Contracts', 'Zero Knowledge'] },
        ].map(h => (
          <div key={h.id} className="p-6 rounded-3xl glass border border-white/10 space-y-4 hover:border-[#FF2D78]/40 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-xs font-black text-[#FF2D78] bg-[#FF2D78]/10 px-2.5 py-1 rounded-full border border-[#FF2D78]/30">
                Prize: {h.prize}
              </span>
              <button onClick={() => toggleSave(h.id)} className="text-gray-400 hover:text-white">
                <Bookmark size={16} fill={savedItems.has(h.id) ? '#FF2D78' : 'none'} color={savedItems.has(h.id) ? '#FF2D78' : 'currentColor'} />
              </button>
            </div>

            <h3 className="text-lg font-bold text-white">{h.title}</h3>
            <div className="flex items-center gap-4 text-xs text-gray-300">
              <span>📅 {h.dates}</span>
              <span>📍 {h.mode}</span>
            </div>
            <div className="text-xs text-gray-400">{h.squads}</div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {h.tags.map(t => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-md glass text-gray-300 border border-white/5">{t}</span>
              ))}
            </div>

            <div className="pt-2 flex gap-3">
              <button className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white shadow-md" style={{ background: 'linear-gradient(135deg, #FF2D78, #9C27F4)' }}>
                Register Squad
              </button>
              <button className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-200 glass border border-white/10 hover:text-white">
                Find Teammates
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 8: INTERNSHIPS
// ─────────────────────────────────────────────────────────────────────────────
function InternshipsView({ savedItems, toggleSave }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Pre-Placement Internships (Summer & Winter)
        </h2>
        <p className="text-xs text-gray-400">High-stipend internships offering Pre-Placement Offers (PPO).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { id: 'int-1', role: 'Machine Learning Research Intern', comp: 'Microsoft Research India', stipend: '₹1,20,000 / month', duration: '6 Months', loc: 'Bengaluru / Remote', match: 94 },
          { id: 'int-2', role: 'AI Platform Engineering Intern', comp: 'Amazon Development Centre', stipend: '₹1,10,000 / month', duration: '3 Months', loc: 'Hyderabad', match: 91 },
          { id: 'int-3', role: 'Data Intelligence Intern', comp: 'Swiggy AI Core Team', stipend: '₹85,000 / month', duration: '6 Months', loc: 'Remote', match: 88 },
          { id: 'int-4', role: 'Applied Deep Learning Intern', comp: 'Flipkart Tech', stipend: '₹95,000 / month', duration: '6 Months', loc: 'Bengaluru', match: 86 }
        ].map(i => (
          <div key={i.id} className="p-5 rounded-3xl glass border border-white/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white">{i.comp}</span>
              <span className="text-xs font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full">{i.match}% Match</span>
            </div>
            <h3 className="text-base font-bold text-white">{i.role}</h3>
            <div className="flex items-center justify-between text-xs text-gray-300">
              <span className="text-[#00E5FF] font-bold">{i.stipend}</span>
              <span>{i.duration} · {i.loc}</span>
            </div>
            <button className="w-full py-2.5 rounded-xl text-xs font-bold text-white shadow-md" style={{ background: 'linear-gradient(135deg, #00E5FF, #9C27F4)' }}>
              Apply for Internship
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 9: PLACEMENTS
// ─────────────────────────────────────────────────────────────────────────────
function PlacementsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Campus & Off-Campus Placement Drives
        </h2>
        <p className="text-xs text-gray-400">Direct hiring schedules, tier-1 package criteria, and shortlist alerts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { company: 'Google Software Engineering', pkg: '₹38 - 52 LPA', eligible: 'B.Tech / M.Tech / MCA', date: 'Dec 18, 2026', mode: 'Campus Shortlist' },
          { company: 'Uber Technologies', pkg: '₹42 - 60 LPA', eligible: 'CSE / ECE / Data', date: 'Dec 22, 2026', mode: 'Direct Coding Round' },
          { company: 'Atlassian Engineering', pkg: '₹55 - 75 LPA', eligible: 'All Tech Graduates', date: 'Jan 4, 2027', mode: 'System Design Interview' },
        ].map(p => (
          <div key={p.company} className="p-6 rounded-3xl glass border border-white/10 space-y-3 hover:border-[#FF9E00]/40 transition-colors">
            <span className="text-[10px] font-bold text-[#FF9E00] bg-[#FF9E00]/10 px-2.5 py-1 rounded-full border border-[#FF9E00]/30">
              Package: {p.pkg}
            </span>
            <h3 className="text-base font-bold text-white">{p.company}</h3>
            <p className="text-xs text-gray-400">Eligible: {p.eligible}</p>
            <div className="text-xs text-gray-300">Drive Date: <strong>{p.date}</strong></div>
            <div className="text-xs text-[#00E5FF]">Selection: {p.mode}</div>
            <button className="w-full mt-2 py-2 rounded-xl text-xs font-bold text-white glass hover:bg-white/10 transition-colors">
              Review Test Syllabus →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 10: GOVERNMENT TENDERS (GeM & CPPP)
// ─────────────────────────────────────────────────────────────────────────────
function GovernmentTendersView({ savedItems, toggleSave }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Government Procurement & Tender Intelligence
          </h2>
          <p className="text-xs text-gray-400">Real-time alerts from GeM (Government e-Marketplace), CPPP, and state procurement portals.</p>
        </div>
        <span className="text-xs font-bold text-[#00E676] bg-[#00E676]/10 px-3 py-1.5 rounded-full border border-[#00E676]/30">
          Startup & MSME Exemptions Active
        </span>
      </div>

      <div className="space-y-4">
        {[
          { id: 'tender-1', title: 'AI Citizen Assistance & Query Resolution Voice Chatbot', authority: 'Ministry of Electronics & Information Technology (MeitY)', value: '₹65,00,000 INR', state: 'New Delhi / Central', deadline: '5 Days Remaining', emd: 'Exempt for Startups', tags: ['NLP', 'Voice AI', 'GeM Portal'] },
          { id: 'tender-2', title: 'Statewide Health Mission Tele-Medicine Cloud Infrastructure', authority: 'National Health Mission, Maharashtra', value: '₹1,20,00,000 INR', state: 'Mumbai, Maharashtra', deadline: '9 Days Remaining', emd: '₹50,000 (Exempt MSME)', tags: ['Cloud', 'PostgreSQL', 'SOC2'] },
          { id: 'tender-3', title: 'Automated Real-Time Traffic Density & Smart Signal System', authority: 'Delhi Transport Infrastructure Development Corporation', value: '₹88,00,000 INR', state: 'Delhi NCT', deadline: '12 Days Remaining', emd: 'Exempt', tags: ['Computer Vision', 'YOLO', 'CPPP'] },
          { id: 'tender-4', title: 'Agricultural Produce Price Trend Forecasting Engine', authority: 'Dept of Agriculture & Farmers Welfare, Karnataka', value: '₹42,00,000 INR', state: 'Bengaluru, Karnataka', deadline: '15 Days Remaining', emd: 'Exempt for Startups', tags: ['Time-Series', 'Predictive', 'GeM'] },
        ].map(t => (
          <div key={t.id} className="p-6 rounded-3xl glass border border-white/10 space-y-3 hover:border-[#00E676]/40 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-black text-[#00E676]">{t.value}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-red-400 font-bold bg-red-500/10 px-2.5 py-0.5 rounded-full">{t.deadline}</span>
                <button onClick={() => toggleSave(t.id)} className="text-gray-400 hover:text-white">
                  <Bookmark size={16} fill={savedItems.has(t.id) ? '#00E676' : 'none'} color={savedItems.has(t.id) ? '#00E676' : 'currentColor'} />
                </button>
              </div>
            </div>

            <h3 className="text-base font-bold text-white">{t.title}</h3>
            <p className="text-xs text-gray-300">Procurement Entity: <strong>{t.authority}</strong></p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-400 pt-1">
              <div>Location: <strong className="text-white">{t.state}</strong></div>
              <div>EMD Guarantee: <strong className="text-[#00E5FF]">{t.emd}</strong></div>
              <div>Status: <strong className="text-[#00E676]">Bidding Open</strong></div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {t.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md glass text-gray-300 border border-white/5">{tag}</span>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-gray-400">Document Verification: 100% Match</span>
              <button className="px-5 py-2 rounded-xl text-xs font-bold text-white shadow-md" style={{ background: 'linear-gradient(135deg, #00E676, #00E5FF)', color: '#000' }}>
                Download Tender RFP & Eligibility
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 11: TALENT NETWORK (Graph Intelligence)
// ─────────────────────────────────────────────────────────────────────────────
function TalentNetworkView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Talent Graph & Peer Ecosystem
        </h2>
        <p className="text-xs text-gray-400">Spectral graph neural network mapping peers, mentors, and recruiters by skill centrality.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-3xl glass border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Network size={18} className="text-[#00E5FF]" />
            Your Graph Neighborhood
          </h3>
          <p className="text-xs text-gray-400">
            You are connected with <strong>42 engineers</strong> who transitioned into ML Engineer roles within 6 months.
          </p>

          <div className="space-y-3 pt-2">
            {[
              { name: 'Dr. Ramesh K.', role: 'Principal Scientist @ Google AI', connection: '2nd Degree · Co-published in NeurIPS', match: 96 },
              { name: 'Simran Walia', role: 'Founding Engineer @ Sarvam AI', connection: 'Alumni Network (IIT Delhi)', match: 92 },
              { name: 'Aditya Nair', role: 'Staff Tech Recruiter @ Microsoft', connection: 'Viewed your profile 2d ago', match: 89 }
            ].map(p => (
              <div key={p.name} className="p-3.5 rounded-2xl glass border border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{p.name}</h4>
                  <p className="text-xs text-gray-300">{p.role}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{p.connection}</p>
                </div>
                <button className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white glass border border-white/10 hover:border-[#00E5FF]/40">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl glass border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white">Graph Centrality Metrics</h3>
          <div className="space-y-3">
            <div className="p-3 rounded-xl glass border border-white/5">
              <div className="text-[11px] text-gray-400">Degree Centrality</div>
              <div className="text-lg font-black text-white">Top 8%</div>
              <div className="text-[10px] text-[#00E676]">High connectivity in AI ecosystems</div>
            </div>
            <div className="p-3 rounded-xl glass border border-white/5">
              <div className="text-[11px] text-gray-400">Recruiter Visibility Velocity</div>
              <div className="text-lg font-black text-white">+38% Views</div>
              <div className="text-[10px] text-[#00E5FF]">Profile shortlisted in 14 searches</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 12: SOCIAL FEED (Instagram-Style Opportunities Feed)
// ─────────────────────────────────────────────────────────────────────────────
function SocialFeedView() {
  const [likes, setLikes] = useState({ 1: 42, 2: 89 })

  const handleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }))
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Social Opportunity Feed
        </h2>
        <p className="text-xs text-gray-400">Discover verified breakthroughs, hackathon demos, and campus recruitment updates.</p>
      </div>

      <div className="space-y-6">
        {[
          {
            id: 1,
            author: 'Google AI Campus Team',
            handle: '@googlecampus_in',
            time: '2 hours ago',
            content: '🚀 Shortlist is out for the Summer 2027 Machine Learning Research Program! 80 candidates chosen across 35 universities. Direct PPO tracks for top contributors.',
            tag: '#CampusPlacements #DeepMind',
            badge: 'Verified Recruiter',
            badgeColor: '#00E676'
          },
          {
            id: 2,
            author: 'Autonomous Agent Hackathon',
            handle: '@agenthack_2026',
            time: '5 hours ago',
            content: '🏆 $120,000 Prize Pool Announced! We are accepting prototype submissions in Multi-Agent Consensus, Tool Calling, and Offline LLM deployment.',
            tag: '#HackathonAlert #Web3 #AI',
            badge: 'Featured Event',
            badgeColor: '#FF2D78'
          }
        ].map(post => (
          <div key={post.id} className="p-6 rounded-3xl glass border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FF2D78] to-[#9C27F4] flex items-center justify-center font-bold text-white text-xs">
                  {post.author.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{post.author}</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${post.badgeColor}20`, color: post.badgeColor }}>
                      {post.badge}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400">{post.handle} · {post.time}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-200 leading-relaxed">{post.content}</p>
            <div className="text-xs font-bold text-[#00E5FF]">{post.tag}</div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <button onClick={() => handleLike(post.id)} className="flex items-center gap-1.5 hover:text-[#FF2D78] transition-colors">
                <ThumbsUp size={16} /> <span>{likes[post.id]} Likes</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                <MessageCircle size={16} /> <span>14 Comments</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-[#00E5FF] transition-colors">
                <Share2 size={16} /> <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 13: AI CAREER ASSISTANT
// ─────────────────────────────────────────────────────────────────────────────
function AIAssistantView() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello Priya! I am your Skills Pulse Career Copilot. I have synchronized your talent vector against 1,420 opportunities. What would you like to explore today?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = (textToSend) => {
    const query = textToSend || input
    if (!query.trim()) return

    const newMsgs = [...messages, { sender: 'user', text: query }]
    setMessages(newMsgs)
    setInput('')

    setTimeout(() => {
      let reply = "Based on your talent vector, focusing on Distributed PyTorch and vLLM will increase your candidate match from 74% to 96% for Google's ML Engineer placement drive. Would you like a 30-day curated syllabus?"
      if (query.toLowerCase().includes('tender') || query.toLowerCase().includes('gem')) {
        reply = "I found 8 matching government procurement tenders on GeM. As a recognized developer / MSME, you are 100% exempt from EMD deposits. The Karnataka State Health Mission tender (₹45L) closes in 8 days."
      } else if (query.toLowerCase().includes('hackathon')) {
        reply = "You are shortlisted for the Global Autonomous Agent Hackathon ($120K prizes). 3 teams are looking for a PyTorch & FastAsync engineer right now."
      }
      setMessages([...newMsgs, { sender: 'ai', text: reply }])
    }, 800)
  }

  return (
    <div className="max-w-3xl mx-auto h-[650px] flex flex-col glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-white/10 flex items-center justify-between" style={{ background: '#0D0E1A' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#FF2D78] to-[#9C27F4]">
            <Sparkles size={18} color="white" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">AI Career Copilot</h3>
            <p className="text-[10px] text-[#00E676]">Connected to Vector DB & GeM Registry</p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-gray-400">Context: Priya Sharma</span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`p-3.5 rounded-2xl max-w-md text-xs leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-gradient-to-r from-[#FF2D78] to-[#9C27F4] text-white'
                  : 'glass text-gray-200 border border-white/10'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompts Chips */}
      <div className="p-3 border-t border-white/5 flex gap-2 overflow-x-auto">
        {['What is my biggest skill gap?', 'Show active GeM tenders', 'Find me a hackathon team'].map(chip => (
          <button
            key={chip}
            onClick={() => handleSend(chip)}
            className="text-[11px] font-medium text-gray-300 glass px-3 py-1.5 rounded-full border border-white/10 hover:border-[#00E5FF]/40 transition-colors whitespace-nowrap"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input bar */}
      <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-4 border-t border-white/10 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about careers, skill roadmaps, tenders, or placement drives..."
          className="flex-1 px-4 py-2.5 rounded-xl text-xs text-white glass placeholder-gray-500 focus:outline-none"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        />
        <button
          type="submit"
          className="p-2.5 rounded-xl bg-gradient-to-r from-[#FF2D78] to-[#9C27F4] text-white hover:scale-105 transition-transform"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW 14: SETTINGS
// ─────────────────────────────────────────────────────────────────────────────
function SettingsView() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          User Preferences & AI Personalization
        </h2>
        <p className="text-xs text-gray-400">Manage privacy, notifications, and AI matching parameters.</p>
      </div>

      <div className="p-6 rounded-3xl glass border border-white/10 space-y-5">
        <h3 className="text-sm font-bold text-white">Notification Alert Frequencies</h3>
        <div className="space-y-3">
          {[
            { label: 'Instant Hackathon & Competition Alerts', desc: 'Notify me when a prize pool over $25K opens' },
            { label: 'Government GeM & CPPP Tender Monitoring', desc: 'Alert when tenders matching software/AI are published' },
            { label: 'Placement Drive Shortlist Notifications', desc: 'Instant alert when campus recruiter shortlists my profile' }
          ].map(pref => (
            <div key={pref.label} className="flex items-center justify-between p-3 rounded-xl glass border border-white/5">
              <div>
                <p className="text-xs font-bold text-white">{pref.label}</p>
                <p className="text-[10px] text-gray-400">{pref.desc}</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#FF2D78]" />
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-white">AI Behavioral Personalization</p>
            <p className="text-[10px] text-gray-400">Consent-based skill extraction and graph modeling</p>
          </div>
          <span className="text-xs font-bold text-[#00E676]">Enabled</span>
        </div>
      </div>
    </div>
  )
}
