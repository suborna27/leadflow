function About() {
  const teamMembers = [
    {
      name: 'Sarah van der Berg',
      role: 'CEO & Lead Strategist',
      description: '10+ jaar ervaring in digitale marketing en lead generatie.',
      image: 'bi-person-circle'
    },
    {
      name: 'Mark Janssen',
      role: 'Technical Director',
      description: 'Expert in website ontwikkeling en marketing automatisering.',
      image: 'bi-person-circle'
    },
    {
      name: 'Lisa de Vries',
      role: 'SEO Specialist',
      description: 'Gespecialiseerd in SEO optimalisatie en content marketing.',
      image: 'bi-person-circle'
    }
  ];

  const values = [
    {
      icon: 'bi-target',
      title: 'Resultaatgericht',
      description: 'Wij focussen op meetbare resultaten en ROI voor onze klanten.'
    },
    {
      icon: 'bi-lightbulb',
      title: 'Innovatief',
      description: 'Wij blijven voorop lopen met de nieuwste trends en technologieën.'
    },
    {
      icon: 'bi-handshake',
      title: 'Transparant',
      description: 'Eerlijke communicatie en volledige transparantie in onze werkwijze.'
    },
    {
      icon: 'bi-award',
      title: 'Kwaliteit',
      description: 'Wij leveren alleen werk van de hoogste kwaliteit en standaard.'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Mission Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="section-title">Over Leadflow</h2>
            <p className="lead mb-4">
              Leadflow is opgericht met de missie om bedrijven te helpen hun online potentieel 
              volledig te benutten. Wij geloven dat elke website een krachtige lead generatie 
              machine kan zijn.
            </p>
            <p className="mb-4">
              Met meer dan 10 jaar ervaring in digitale marketing hebben wij honderden bedrijven 
              geholpen hun online aanwezigheid te transformeren en hun omzet significant te verhogen.
            </p>
            <div className="row">
              <div className="col-6">
                <h4 className="text-primary">300+</h4>
                <p>Projecten Voltooid</p>
              </div>
              <div className="col-6">
                <h4 className="text-primary">150%</h4>
                <p>Gemiddelde Groei</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <div className="bg-light p-5 rounded-4">
                <i className="bi bi-building" style={{fontSize: '6rem', color: 'var(--leadflow-primary)'}}></i>
                <h4 className="mt-3">Onze Visie</h4>
                <p className="text-muted">
                  Een wereld waarin elk bedrijf zijn online potentieel volledig benut 
                  om duurzame groei te realiseren.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-5">
            <h3 className="section-title">Onze Waarden</h3>
            <p className="section-subtitle">
              Deze kernwaarden sturen alles wat wij doen en bepalen hoe wij met onze klanten samenwerken.
            </p>
          </div>
          {values.map((value, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="service-icon mx-auto mb-3">
                  <i className={value.icon}></i>
                </div>
                <h5>{value.title}</h5>
                <p className="text-muted">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h3 className="section-title">Ons Team</h3>
            <p className="section-subtitle">
              Ontmoet de experts die uw succes mogelijk maken.
            </p>
          </div>
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className={member.image} style={{fontSize: '4rem', color: 'var(--leadflow-primary)'}}></i>
                </div>
                <h5>{member.name}</h5>
                <p className="text-primary fw-semibold">{member.role}</p>
                <p className="text-muted">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="bg-light p-5 rounded-4">
              <h3 className="mb-3">Klaar voor Groei?</h3>
              <p className="mb-4">
                Laten wij samen kijken hoe wij uw bedrijf kunnen helpen groeien.
              </p>
              <button 
                className="btn btn-primary btn-lg"
                onClick={scrollToContact}
              >
                Neem Contact Op
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

