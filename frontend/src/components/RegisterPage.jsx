import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Cpu, ArrowLeft, User, Mail, Lock, Eye, EyeOff, Sparkles,
  ArrowRight, CheckCircle2, AlertCircle, ShieldCheck
} from 'lucide-react'

export default function RegisterPage({ onNavigate }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!fullName || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all required fields.')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.')
      return
    }

    if (!agreeTerms) {
      setErrorMessage('Please agree to the Terms of Service & Privacy Policy.')
      return
    }

    setIsLoading(true)

    // Simulate account registration
    setTimeout(() => {
      setIsLoading(false)
      setRegisterSuccess(true)
    }, 1000)
  }

  const handleSocialSignIn = (provider) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setRegisterSuccess(true)
    }, 900)
  }

  return (
    <div className="min-h-screen text-white relative flex items-center justify-center overflow-x-hidden p-4 sm:p-6 bg-[#08080F]">
      {/* Background Ambient Mesh Glows */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none filter blur-[140px] opacity-25"
        style={{ background: '#FF2D78' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none filter blur-[140px] opacity-25"
        style={{ background: '#9C27F4' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none filter blur-[130px] opacity-15"
        style={{ background: '#00E5FF' }}
      />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-lg mx-auto py-6">
        {/* Back to Home Button */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => onNavigate('landing')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white glass px-3.5 py-1.5 rounded-xl transition-all hover:scale-105"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <ArrowLeft size={14} />
            Back to Home
          </button>

          <span className="text-xs text-gray-400">
            Already registered?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="text-[#00E5FF] font-bold hover:underline"
            >
              Sign In
            </button>
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-7 sm:p-9 shadow-2xl relative overflow-hidden"
          style={{
            border: '1px solid rgba(255, 45, 120, 0.25)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
            background: 'linear-gradient(135deg, rgba(255,45,120,0.06) 0%, rgba(156,39,244,0.08) 50%, rgba(8,8,15,0.92) 100%)'
          }}
        >
          {/* Header Brand */}
          <div className="text-center mb-6">
            <div
              className="w-13 h-13 rounded-2xl mx-auto flex items-center justify-center mb-3.5 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
                boxShadow: '0 0 30px rgba(255,45,120,0.5)',
                width: 52,
                height: 52
              }}
            >
              <Cpu size={26} color="white" />
            </div>

            <h1
              className="text-2xl font-black text-white tracking-tight mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Create Your <span className="gradient-text">Skills Pulse</span> Account
            </h1>
            <p className="text-xs text-gray-400">
              Join 120,000+ members discovering future opportunities
            </p>
          </div>

          {/* Registration Success View */}
          {registerSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl text-center glass"
              style={{
                border: '1px solid rgba(0, 230, 118, 0.4)',
                background: 'rgba(0, 230, 118, 0.08)'
              }}
            >
              <CheckCircle2 size={46} className="text-[#00E676] mx-auto mb-3" />
              <h2 className="text-xl font-bold text-white mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Account Created Successfully!
              </h2>
              <p className="text-xs text-gray-300 mb-5 leading-relaxed">
                Welcome to Skills Pulse, <strong>{fullName || 'Innovator'}</strong>. Your talent vector has been registered.
              </p>
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full py-3 rounded-xl font-bold text-black text-xs flex items-center justify-center gap-2 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #00E676, #00E5FF)' }}
              >
                Go to Platform Dashboard <ArrowRight size={14} />
              </button>
            </motion.div>
          ) : (
            <div>
              {/* Social One-Click Registration Buttons (Google & GitHub) */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {/* Google Sign-in */}
                <button
                  type="button"
                  onClick={() => handleSocialSignIn('Google')}
                  className="py-2.5 px-3 rounded-xl glass text-xs font-semibold text-gray-200 hover:text-white hover:border-[#FF2D78]/50 transition-all flex items-center justify-center gap-2"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.3 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.6 7.3C.6 9.3 0 11.6 0 14s.6 4.7 1.6 6.7l3.7-2.9z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16c1.9 3.8 5.8 7 10.4 7z"
                    />
                  </svg>
                  <span>Google</span>
                </button>

                {/* GitHub Sign-in */}
                <button
                  type="button"
                  onClick={() => handleSocialSignIn('GitHub')}
                  className="py-2.5 px-3 rounded-xl glass text-xs font-semibold text-gray-200 hover:text-white hover:border-[#9C27F4]/50 transition-all flex items-center justify-center gap-2"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-4 flex items-center justify-center">
                <div className="w-full border-t border-white/10" />
                <span className="absolute px-3 text-[10px] font-bold text-gray-500 uppercase bg-[#08080F]">
                  Or register with email
                </span>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleRegister} className="space-y-3.5">
                {errorMessage && (
                  <div
                    className="p-3 rounded-xl text-xs font-medium text-red-300 flex items-center gap-2"
                    style={{ background: 'rgba(255, 45, 120, 0.15)', border: '1px solid rgba(255, 45, 120, 0.3)' }}
                  >
                    <AlertCircle size={15} className="text-[#FF2D78] flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 1. Full Name */}
                <div>
                  <label className="text-xs font-bold text-gray-300 mb-1 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-white glass placeholder-gray-500 focus:outline-none transition-all"
                      style={{
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.03)'
                      }}
                      required
                    />
                  </div>
                </div>

                {/* 2. Email Address */}
                <div>
                  <label className="text-xs font-bold text-gray-300 mb-1 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-white glass placeholder-gray-500 focus:outline-none transition-all"
                      style={{
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.03)'
                      }}
                      required
                    />
                  </div>
                </div>

                {/* 3. Password */}
                <div>
                  <label className="text-xs font-bold text-gray-300 mb-1 block">
                    Password (min 6 characters)
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create secure password"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm text-white glass placeholder-gray-500 focus:outline-none transition-all"
                      style={{
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.03)'
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* 4. Confirm Password */}
                <div>
                  <label className="text-xs font-bold text-gray-300 mb-1 block">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-white glass placeholder-gray-500 focus:outline-none transition-all"
                      style={{
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.03)'
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer select-none text-xs text-gray-400">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#FF2D78] mt-0.5"
                    />
                    <span>
                      I agree to the{' '}
                      <span className="text-[#00E5FF] hover:underline">Terms of Service</span> and{' '}
                      <span className="text-[#00E5FF] hover:underline">Privacy Policy</span>.
                    </span>
                  </label>
                </div>

                {/* Submit Register Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(255,45,120,0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-shimmer w-full py-3.5 rounded-xl font-bold text-white text-sm shadow-xl flex items-center justify-center gap-2 mt-4 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      <span>Create Account</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Already have an account */}
              <div className="mt-5 text-center text-xs text-gray-400">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('login')}
                  className="font-bold text-[#FF2D78] hover:underline"
                >
                  Sign In here
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
