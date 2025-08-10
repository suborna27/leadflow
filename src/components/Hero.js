import React from 'react'

const Hero = () => {


   const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="fade-in-up">
              <h1 className="display-1 mb-4">
                Transformeer Bezoekers in 
                <span className="text-gradient"> Klanten</span>
              </h1>
              <p className="lead mb-5">
                Leadflow helpt bedrijven hun online aanwezigheid te optimaliseren 
                en meer gekwalificeerde leads te genereren met bewezen strategieën 
                en geavanceerde technologie.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={scrollToContact}
                >
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Start Vandaag
                </button>
                <button 
                  className="btn btn-outline-light btn-lg"
                  onClick={scrollToServices}
                >
                  <i className="bi bi-play-circle me-2"></i>
                  Ontdek Meer
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <div className="hero-image-placeholder">
                <i className="bi bi-graph-up-arrow" style={{fontSize: '8rem', opacity: 0.3}}></i>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="row mt-5 pt-5">
          <div className="col-md-4 text-center">
            <h3 className="display-4 fw-bold">300+</h3>
            <p className="lead">Tevreden Klanten</p>
          </div>
          <div className="col-md-4 text-center">
            <h3 className="display-4 fw-bold">150%</h3>
            <p className="lead">Gemiddelde Lead Toename</p>
          </div>
          <div className="col-md-4 text-center">
            <h3 className="display-4 fw-bold">24/7</h3>
            <p className="lead">Support & Monitoring</p>
          </div>
        </div>
      </div>
    </section>
      )
}

export default Hero