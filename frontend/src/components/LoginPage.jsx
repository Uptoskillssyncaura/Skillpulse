import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu, ArrowLeft, Mail, Lock, Eye, EyeOff, Sparkles,
  ArrowRight, CheckCircle2, AlertCircle, X, KeyRound
} from 'lucide-react'

export default function LoginPage({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Forgot password modal state
  const [isForgotOpen, setIsForgotOpen] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotSent, setForgotSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.')
      return
    }

    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      setLoginSuccess(true)
    }, 900)
  }

  const handleForgotSubmit = (e) => {
    e.preventDefault()
    if (!forgotEmail) return
    setForgotSent(true)
  }

  return (
    <div className="min-h-screen text-white relative flex items-center justify-center overflow-x-hidden p-4 sm:p-6 bg-[#08080F]">
      {/* Background Ambient Mesh Glows */}
      <div
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full pointer-events-none filter blur-[140px] opacity-25"
        style={{ background: '#FF2D78' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full pointer-events-none filter blur-[140px] opacity-25"
        style={{ background: '#9C27F4' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none filter blur-[130px] opacity-15"
        style={{ background: '#00E5FF' }}
      />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Back to Home Button */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('landing')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white glass px-3.5 py-1.5 rounded-xl transition-all hover:scale-105"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <ArrowLeft size={14} />
            Back to Home
          </button>

          <button
            onClick={() => onNavigate('register')}
            className="text-xs font-bold text-[#00E5FF] hover:underline"
          >
            Create Account →
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
          style={{
            border: '1px solid rgba(255, 45, 120, 0.25)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
            background: 'linear-gradient(135deg, rgba(255,45,120,0.06) 0%, rgba(156,39,244,0.08) 50%, rgba(8,8,15,0.92) 100%)'
          }}
        >
          {/* Header Brand */}
          <div className="text-center mb-8">
            <div
              className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
                boxShadow: '0 0 30px rgba(255,45,120,0.5)'
              }}
            >
              <Cpu size={28} color="white" />
            </div>

            <h1
              className="text-2xl font-black text-white tracking-tight mb-1.5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Sign In to <span className="gradient-text">Skills Pulse</span>
            </h1>
            <p className="text-xs text-gray-400">
              Enter your email and password to access your account
            </p>
          </div>

          {/* Success Notification */}
          {loginSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl text-center glass"
              style={{
                border: '1px solid rgba(0, 230, 118, 0.4)',
                background: 'rgba(0, 230, 118, 0.08)'
              }}
            >
              <CheckCircle2 size={42} className="text-[#00E676] mx-auto mb-3" />
              <h2 className="text-lg font-bold text-white mb-1">
                Welcome Back!
              </h2>
              <p className="text-xs text-gray-300 mb-5">
                Authentication successful. Ready to discover opportunities.
              </p>
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full py-3 rounded-xl font-bold text-black text-xs flex items-center justify-center gap-2 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #00E676, #00E5FF)' }}
              >
                Go to Dashboard <ArrowRight size={14} />
              </button>
            </motion.div>
          ) : (
            /* Login Form: Email and Password */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div
                  className="p-3 rounded-xl text-xs font-medium text-red-300 flex items-center gap-2"
                  style={{ background: 'rgba(255, 45, 120, 0.15)', border: '1px solid rgba(255, 45, 120, 0.3)' }}
                >
                  <AlertCircle size={15} className="text-[#FF2D78] flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Email Field */}
              <div>
                <label className="text-xs font-bold text-gray-300 mb-1.5 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl text-sm text-white glass placeholder-gray-500 focus:outline-none transition-all"
                    style={{
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.03)'
                    }}
                    required
                  />
                </div>
              </div>

              {/* 2. Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-300">
                    Password
                  </label>
                  {/* Forgot Password Link */}
                  <button
                    type="button"
                    onClick={() => {
                      setForgotEmail(email)
                      setForgotSent(false)
                      setIsForgotOpen(true)
                    }}
                    className="text-xs font-semibold text-[#00E5FF] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-11 pr-11 py-3 rounded-xl text-sm text-white glass placeholder-gray-500 focus:outline-none transition-all"
                    style={{
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.03)'
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(255,45,120,0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="btn-shimmer w-full py-3.5 rounded-xl font-bold text-white text-sm shadow-xl flex items-center justify-center gap-2 mt-6 transition-all"
                style={{
                  background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Sign In</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </form>
          )}

          {/* No Account? Register / Create Account Link */}
          <div className="mt-6 pt-5 border-t border-white/10 text-center text-xs text-gray-400">
            Don't have an account yet?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="font-bold text-[#FF2D78] hover:underline"
            >
              Create Account Free
            </button>
          </div>
        </motion.div>
      </div>

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {isForgotOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass rounded-3xl p-7 max-w-sm w-full relative shadow-2xl"
              style={{
                border: '1px solid rgba(0, 229, 255, 0.3)',
                background: 'linear-gradient(135deg, rgba(8,8,15,0.98) 0%, rgba(16,23,42,0.95) 100%)'
              }}
            >
              <button
                onClick={() => setIsForgotOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#00E5FF] bg-[#00E5FF]/20">
                <KeyRound size={22} />
              </div>

              <h2 className="text-xl font-bold text-white mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Reset Your Password
              </h2>
              <p className="text-xs text-gray-300 mb-5 leading-relaxed">
                Enter your registered email and we'll send you an encrypted password recovery link.
              </p>

              {forgotSent ? (
                <div className="text-center p-4 rounded-xl glass bg-[#00E676]/10 border border-[#00E676]/30">
                  <CheckCircle2 size={32} className="text-[#00E676] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-white">
                    Password recovery email sent to <strong>{forgotEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setIsForgotOpen(false)}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-bold text-black"
                    style={{ background: '#00E676' }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 mb-1 block">Email Address</label>
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white glass placeholder-gray-500 focus:outline-none"
                      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl font-bold text-sm text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #00E5FF, #9C27F4)' }}
                  >
                    Send Recovery Link
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
