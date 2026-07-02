'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section') || document.querySelector('.hero-aboutus') || document.querySelector('.hero-menu') || document.querySelector('.hero-store');
      const heroHeight = heroSection ? heroSection.clientHeight : window.innerHeight;
      
      if (window.scrollY > heroHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
      role="banner" className={`nav-menu w-nav ${isScrolled ? 'nav-scrolled' : 'nav-transparent'} ${pathname === '/about-us' ? 'is-about-us' : ''}`}>
      <div className="container w-container">
        <Link href="/" className="logo-brand w-nav-brand">
          <img
            src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a2f144f41055e78b169206_More%20Logo%20-%20White.png"
            loading="lazy"
            sizes="(max-width: 767px) 98vw, 621.0000610351562px"
            srcSet="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a2f144f41055e78b169206_More%20Logo%20-%20White-p-500.png 500w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a2f144f41055e78b169206_More%20Logo%20-%20White.png 621w"
            alt="More Coffee & Space Logo"
            className="image-3"
          />
        </Link>
        <nav role="navigation" className={`nav-menu-button w-nav-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link href="/about-us" className={`nav-link-button w-nav-link ${pathname === '/about-us' ? 'nav-link-active' : ''}`}>About Us</Link>
          <Link href="/store" className={`nav-link-button w-nav-link ${pathname === '/store' ? 'nav-link-active' : ''}`}>Store</Link>
          <Link href="/menu" className={`nav-link-button w-nav-link ${pathname === '/menu' ? 'nav-link-active' : ''}`}>Menu</Link>
          <Link href="/contact" className={`nav-link-button w-nav-link ${pathname === '/contact' ? 'nav-link-active' : ''}`}>Contact</Link>
        </nav>
        <div className={`menu-button w-nav-button ${isMenuOpen ? 'w--open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="icon w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
}
