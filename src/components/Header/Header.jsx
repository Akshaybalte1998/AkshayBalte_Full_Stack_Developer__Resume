import React, { useRef, useEffect, useState, useCallback } from 'react';

const headerStyle = {
  width: '100%',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  backgroundColor: '#333',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
};

const stickyHeaderStyle = {
  backgroundColor: '#444',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  transform: 'translateY(0)',
  transition: 'transform 0.3s ease',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const logoTextStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: '#1e40af',
  color: '#ffffff',
  textAlign: 'center',
  lineHeight: '40px',
  borderRadius: '50%',
  fontSize: '20px',
  fontWeight: '600',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const nameStyle = {
  lineHeight: '1.2',
};

const nameHeaderStyle = {
  fontSize: '1.5rem',
  color: '#ffffff',
  fontWeight: '700',
  textTransform: 'uppercase',
};

const nameSubHeaderStyle = {
  color: '#d3d3d3',
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'uppercase',
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

const mobileMenuIconStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  color: '#ffffff',
  transition: 'color 0.3s ease',
};

const mobileMenuStyle = {
  display: 'none',
  flexDirection: 'column',
  position: 'absolute',
  top: '80px',
  left: 0,
  width: '100%',
  backgroundColor: '#333',
  padding: '10px 0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  zIndex: 999,
};

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
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

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.clientHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
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
    const targetAttr = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetAttr);

    if (targetElement) {
      const headerHeight = headerRef.current.offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
    if (isMenuOpen) setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        ref={headerRef}
        style={{
          ...headerStyle,
          ...(isSticky ? stickyHeaderStyle : { transform: 'translateY(-80px)' }),
        }}
      >
        <div style={logoStyle}>
          <span style={logoTextStyle}>AB</span>
          <div style={nameStyle}>
            <h2 style={nameHeaderStyle}>Akshay</h2>
            <p style={nameSubHeaderStyle}>Balte</p>
          </div>
        </div>

        <nav style={navStyle}>
          <ul style={{ ...ulStyle, ...(isMenuOpen ? mobileMenuStyle : {}) }}>
            <li><a href="#home" onClick={handleClick} style={activeSection === 'home' ? {...linkStyle, ...activeLinkStyle} : linkStyle} aria-label="Home Page">Home Page</a></li>
            <li><a href="#services" onClick={handleClick} style={activeSection === 'services' ? {...linkStyle, ...activeLinkStyle} : linkStyle} aria-label="Educational Journey">Educational Journey</a></li>
            <li><a href="#Project" onClick={handleClick} style={activeSection === 'Project' ? {...linkStyle, ...activeLinkStyle} : linkStyle} aria-label="Project Showcase">Project Showcase</a></li>
            <li><a href="#skills" onClick={handleClick} style={activeSection === 'skills' ? {...linkStyle, ...activeLinkStyle} : linkStyle} aria-label="Skills & Expertise">Skills & Expertise</a></li>
            <li><a href="#portfolio" onClick={handleClick} style={activeSection === 'portfolio' ? {...linkStyle, ...activeLinkStyle} : linkStyle} aria-label="Certification">Certification</a></li>
            <li><a href="#contact" onClick={handleClick} style={activeSection === 'contact' ? {...linkStyle, ...activeLinkStyle} : linkStyle} aria-label="Let's Talk">Let's Talk</a></li>
          </ul>
        </nav>

        <div onClick={toggleMenu} style={{ ...mobileMenuIconStyle, color: isMenuOpen ? '#1e40af' : '#ffffff' }} aria-label="Toggle Menu">
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </header>

      <style jsx>{`
        @media (max-width: 768px) {
          nav ul {
            display: ${isMenuOpen ? 'flex' : 'none'};
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
