import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Bedankt voor uw bericht! Wij nemen binnen 24 uur contact met u op.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: 'bi-telephone',
      title: 'Telefoon',
      info: '+31 20 123 4567',
      link: 'tel:+31201234567'
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      info: 'info@leadflow.nl',
      link: 'mailto:info@leadflow.nl'
    },
    {
      icon: 'bi-geo-alt',
      title: 'Adres',
      info: 'Herengracht 123, 1015 BG Amsterdam',
      link: 'https://maps.google.com'
    },
    {
      icon: 'bi-whatsapp',
      title: 'WhatsApp',
      info: '+31 6 1234 5678',
      link: 'https://wa.me/31612345678'
    }
  ];

  return (
    <section id="contact" className="section-padding" style={{background: 'var(--leadflow-bg-light)'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="section-title">Neem Contact Op</h2>
            <p className="section-subtitle">
              Klaar om uw online aanwezigheid naar het volgende niveau te tillen? 
              Neem contact met ons op voor een gratis consultatie.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form">
              <h4 className="mb-4">Stuur ons een Bericht</h4>
              
              {submitMessage && (
                <div className="alert alert-success" role="alert">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Naam *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="company" className="form-label">Bedrijf</label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Telefoon</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="service" className="form-label">Interesse in Dienst</label>
                  <select
                    className="form-control"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="seo">SEO Optimalisatie</option>
                    <option value="leadgen">Lead Generatie</option>
                    <option value="automation">Marketing Automatisering</option>
                    <option value="website">Website Ontwikkeling</option>
                    <option value="analytics">Analytics & Rapportage</option>
                    <option value="consultancy">Consultancy & Training</option>
                    <option value="other">Anders</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Bericht *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Vertel ons over uw project en doelen..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Verzenden...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send me-2"></i>
                      Verstuur Bericht
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="ps-lg-4">
              <h4 className="mb-4">Contact Informatie</h4>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                      <i className={info.icon}></i>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="mb-1">{info.title}</h6>
                    <a href={info.link} className="text-decoration-none">
                      {info.info}
                    </a>
                  </div>
                </div>
              ))}

              <div className="mt-5">
                <h5 className="mb-3">Openingstijden</h5>
                <div className="mb-2">
                  <strong>Maandag - Vrijdag:</strong><br />
                  09:00 - 18:00
                </div>
                <div className="mb-2">
                  <strong>Zaterdag:</strong><br />
                  10:00 - 16:00
                </div>
                <div>
                  <strong>Zondag:</strong><br />
                  Gesloten
                </div>
              </div>

              <div className="mt-5">
                <h5 className="mb-3">Volg Ons</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

