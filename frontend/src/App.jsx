import React, { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Dashboard from './components/Dashboard'
import AdminDashboard from './components/AdminDashboard'

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  // Listen to hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#/login' || hash === '#login') {
        setCurrentPage('login')
      } else if (hash === '#/register' || hash === '#register') {
        setCurrentPage('register')
      } else if (hash === '#/dashboard' || hash === '#dashboard') {
        setCurrentPage('dashboard')
      } else if (hash === '#/admin' || hash === '#admin') {
        setCurrentPage('admin')
      } else {
        setCurrentPage('landing')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    if (page === 'login') {
      window.location.hash = '#/login'
    } else if (page === 'register') {
      window.location.hash = '#/register'
    } else if (page === 'dashboard') {
      window.location.hash = '#/dashboard'
    } else if (page === 'admin') {
      window.location.hash = '#/admin'
    } else {
      window.location.hash = ''
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#08080F] text-white">
      {currentPage === 'admin' && (
        <AdminDashboard onNavigate={handleNavigate} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={handleNavigate} />
      )}
      {currentPage === 'login' && (
        <LoginPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'register' && (
        <RegisterPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'landing' && (
        <LandingPage onNavigate={handleNavigate} />
      )}
    </div>
  )
}
