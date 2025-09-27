import { useState, useEffect } from 'react'
import './Header.css'
import GradientBlur from './GradientBlur'

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className={isVisible ? 'header-visible' : 'header-hidden'}>
        <a href="https://app-galerie-com.vercel.app/" target="_blank" className='header-catalogue'>CATALOGUE</a>
        <p className='header-logo' onClick={() => window.location.href = '/'}>GALERIE</p>
        <div className='header-right'>
          <a href="mailto:edenbaud1@gmail.com" className='header-contact'>CONTACT</a>
          <a href="https://app-galerie-com.vercel.app/" target="_blank" className='header-login'>LOGIN</a>
        </div>
        
        <div className='hamburger-menu' onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </header>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-content'>
          <a href="https://app-galerie-com.vercel.app/" target="_blank" className='mobile-menu-item'>CATALOGUE</a>
          <a href="mailto:edenbaud1@gmail.com" className='mobile-menu-item'>CONTACT</a>
          <a href="https://app-galerie-com.vercel.app/" target="_blank" className='mobile-menu-item'>LOGIN</a>
        </div>
      </div>

      <GradientBlur isVisible={isVisible} />
    </> 
  )
}

export default Header
