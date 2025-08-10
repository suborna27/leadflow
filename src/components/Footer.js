function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    diensten: [
      { name: 'SEO Optimalisatie', href: '#services' },
      { name: 'Lead Generatie', href: '#services' },
      { name: 'Marketing Automatisering', href: '#services' },
      { name: 'Website Ontwikkeling', href: '#services' },
      { name: 'Analytics & Rapportage', href: '#services' },
      { name: 'Consultancy & Training', href: '#services' }
    ],
    bedrijf: [
      { name: 'Over Ons', href: '#about' },
      { name: 'Ons Team', href: '#about' },
      { name: 'Carrière', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    support: [
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Support Center', href: '#' },
      { name: 'Documentatie', href: '#' },
      { name: 'Status Pagina', href: '#' },
      { name: 'Feedback', href: '#' }
    ]
  };

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <div className="mb-4">
              <h4 className="text-white mb-3">
                <i className="bi bi-lightning-charge-fill me-2"></i>
                Leadflow
              </h4>
              <p className="text-light mb-4">
                Wij helpen bedrijven hun online aanwezigheid te optimaliseren en meer 
                gekwalificeerde leads te genereren met bewezen strategieën en geavanceerde technologie.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Diensten</h5>
            <ul className="list-unstyled">
              {footerLinks.diensten.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Bedrijf</h5>
            <ul className="list-unstyled">
              {footerLinks.bedrijf.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              {footerLinks.support.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-2 mb-4">
            <h5>Contact</h5>
            <div className="mb-3">
              <i className="bi bi-geo-alt me-2"></i>
              <small>Herengracht 123<br />1015 BG Amsterdam</small>
            </div>
            <div className="mb-3">
              <i className="bi bi-telephone me-2"></i>
              <a href="tel:+31201234567">+31 20 123 4567</a>
            </div>
            <div className="mb-3">
              <i className="bi bi-envelope me-2"></i>
              <a href="mailto:info@leadflow.nl">info@leadflow.nl</a>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{borderColor: '#374151'}} />

        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-light">
              © {currentYear} Leadflow. Alle rechten voorbehouden.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-md-end">
              <a href="#" className="text-light text-decoration-none">
                Privacy Beleid
              </a>
              <a href="#" className="text-light text-decoration-none">
                Cookie Beleid
              </a>
              <a href="#" className="text-light text-decoration-none">
                Algemene Voorwaarden
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="row mt-4">
          <div className="col-lg-6 mx-auto text-center">
            <div className="bg-primary p-4 rounded-3">
              <h5 className="text-white mb-3">Blijf op de Hoogte</h5>
              <p className="text-light mb-3">
                Ontvang de nieuwste tips en trends over lead generatie en digitale marketing.
              </p>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Uw email adres"
                />
                <button className="btn btn-light" type="button">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

