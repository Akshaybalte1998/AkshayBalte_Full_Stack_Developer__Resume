import React, { useRef, useEffect, useState, useCallback } from 'react';
import logoImage from "../Header/developer.png"

const headerStyle = {
  width: '100%',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  backgroundColor: '#333',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  transition: 'all 0.3s ease',
};

const stickyHeaderStyle = {
  backgroundColor: '#444',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const logoImageStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const nameStyle = {
  lineHeight: '1.2',
};

const nameHeaderStyle = {
  fontSize: '2rem',
  color: '#ffffff',
  fontWeight: '700',
  textTransform: 'uppercase',
};

const nameSubHeaderStyle = {
  color: '#d3d3d3',
  fontSize: '1rem',
  fontWeight: '500',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
};

const ulStyle = {
  display: 'flex',
  gap: '25px',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#f1f1f1',
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  transition: 'color 0.3s ease, border-bottom 0.3s ease, background-color 0.3s ease',
  padding: '8px 12px',
  borderRadius: '5px',
};

const activeLinkStyle = {
  color: '#1e40af',
  backgroundColor: '#f1f1f1',
  borderBottom: '2px solid #1e40af',
};

const Header = () => {
  const headerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setSticky] = useState(false);

  const stickyHeaderFunc = useCallback(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      const sections = ['home', 'about', 'services', 'Project', 'portfolio', 'skills', 'contact'];
      const scrollPosition = scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.clientHeight) > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cleanup = stickyHeaderFunc();
    return cleanup;
  }, [stickyHeaderFunc]);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.closest('a').getAttribute('href');
    const targetElement = document.querySelector(targetAttr);

    if (targetElement) {
      const headerHeight = headerRef.current.offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      ref={headerRef}
      style={{
        ...headerStyle,
        ...(isSticky ? stickyHeaderStyle : {}),
      }}
    >
      <div style={logoStyle}>
        <img
          src={logoImage}
          alt="Logo"
          style={logoImageStyle}
        />
        <div style={nameStyle}>
          <h2 style={nameHeaderStyle}>Akshay Balte</h2>
          <span style={nameSubHeaderStyle}>An Inspiring Developer</span>
        </div>
      </div>

      <nav style={navStyle} role="navigation" aria-label="Main Navigation">
        <ul style={ulStyle}>
          <li><a href="#home" onClick={handleClick} style={activeSection === 'home' ? { ...linkStyle, ...activeLinkStyle } : linkStyle} aria-label="Home Page">Home</a></li>
          <li><a href="#services" onClick={handleClick} style={activeSection === 'services' ? { ...linkStyle, ...activeLinkStyle } : linkStyle} aria-label="Educational Journey">Education</a></li>
          <li><a href="#Project" onClick={handleClick} style={activeSection === 'Project' ? { ...linkStyle, ...activeLinkStyle } : linkStyle} aria-label="Project Showcase">Projects</a></li>
          <li><a href="#skills" onClick={handleClick} style={activeSection === 'skills' ? { ...linkStyle, ...activeLinkStyle } : linkStyle} aria-label="Skills & Expertise">Skills</a></li>
          <li><a href="#portfolio" onClick={handleClick} style={activeSection === 'portfolio' ? { ...linkStyle, ...activeLinkStyle } : linkStyle} aria-label="Certification">Certifications</a></li>
          <li><a href="#contact" onClick={handleClick} style={activeSection === 'contact' ? { ...linkStyle, ...activeLinkStyle } : linkStyle} aria-label="Let's Talk">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
