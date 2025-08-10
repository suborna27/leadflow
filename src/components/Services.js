import React from 'react';

function Services() {
  const services = [
    {
      icon: 'bi-search',
      title: 'SEO Optimalisatie',
      description: 'Verhoog uw zichtbaarheid in zoekmachines met onze bewezen SEO strategieën en technische optimalisaties.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Optimalisatie']
    },
    {
      icon: 'bi-megaphone',
      title: 'Lead Generatie',
      description: 'Genereer meer gekwalificeerde leads met gerichte campagnes en geoptimaliseerde landingspaginas.',
      features: ['Landing Pages', 'Lead Magnets', 'Conversion Optimalisatie', 'A/B Testing']
    },
    {
      icon: 'bi-graph-up',
      title: 'Marketing Automatisering',
      description: 'Automatiseer uw marketingprocessen en nurture leads effectief naar conversie.',
      features: ['Email Marketing', 'CRM Integratie', 'Lead Scoring', 'Workflow Automatisering']
    },
    {
      icon: 'bi-laptop',
      title: 'Website Ontwikkeling',
      description: 'Moderne, responsieve websites die converteren en uw merk versterken.',
      features: ['Responsive Design', 'Performance Optimalisatie', 'CMS Integratie', 'E-commerce']
    },
    {
      icon: 'bi-bar-chart',
      title: 'Analytics & Rapportage',
      description: 'Krijg inzicht in uw prestaties met uitgebreide analytics en rapportages.',
      features: ['Google Analytics', 'Conversion Tracking', 'ROI Rapportage', 'Dashboard Setup']
    },
    {
      icon: 'bi-people',
      title: 'Consultancy & Training',
      description: 'Persoonlijke begeleiding en training om uw team te empoweren.',
      features: ['Strategische Consultancy', 'Team Training', 'Best Practices', 'Ongoing Support']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--leadflow-bg-light)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">Onze Diensten</h2>
            <p className="section-subtitle">
              Wij bieden een compleet pakket aan diensten om uw online succes te garanderen. 
              Van SEO tot lead generatie, wij hebben de expertise om uw bedrijf te laten groeien.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card h-100 d-flex flex-column">
                <div className="service-icon mb-3">
                  <i className={service.icon}></i>
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-muted mb-4">{service.description}</p>
                <ul className="list-unstyled">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <button className="btn btn-outline-primary">
                    Meer Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="bg-primary text-white p-5 rounded-4">
              <h3 className="mb-3">Klaar om te Starten?</h3>
              <p className="mb-4">
                Ontdek hoe wij uw bedrijf kunnen helpen groeien met onze bewezen strategieën.
              </p>
              <button
                className="btn btn-light btn-lg"
                onClick={scrollToContact}
              >
                Gratis Consultatie Aanvragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
