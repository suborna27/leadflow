import { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Badge, Form } from 'react-bootstrap';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem('language', selectedLang);
    setLanguage(selectedLang);
    window.location.reload();
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => scrollToSection('home')}>
         <img src='/leadFlow.png' />
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('services')}>
                Diensten
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('about')}>
                Over Ons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('contact')}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('faq')}>
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ms-3" href="#" onClick={() => scrollToSection('contact')}>
                Gratis Consultatie
              </a>
            </li>
          </ul>

             <Form.Select
      value={language}
      onChange={handleLanguageChange}
      style={{ width: '120px', marginLeft: '1rem' }}
      aria-label="Language select"
    >
      <option value="en">English</option>
      <option value="de">German</option>
    </Form.Select>
        </div>
      </div>
    </nav>
  );
}

export default Header;

