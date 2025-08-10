import React from 'react';

function FAQ() {
  const faqs = [
    {
      id: 'faq1',
      question: 'Wat is lead generatie en waarom is het belangrijk?',
      answer:
        'Lead generatie is het proces van het aantrekken en converteren van prospects in potentiële klanten. Het is cruciaal omdat het uw verkooppijplijn vult met gekwalificeerde prospects, wat direct bijdraagt aan omzetgroei en bedrijfssucces.'
    },
    {
      id: 'faq2',
      question: 'Hoe lang duurt het voordat ik resultaten zie?',
      answer:
        'De tijdlijn varieert per dienst. Voor SEO zien we meestal eerste resultaten binnen 3-6 maanden, terwijl lead generatie campagnes vaak binnen 2-4 weken resultaten opleveren. Wij stellen altijd realistische verwachtingen en houden u op de hoogte van de voortgang.'
    },
    {
      id: 'faq3',
      question: 'Welke kosten zijn verbonden aan jullie diensten?',
      answer:
        'Onze prijzen zijn afhankelijk van uw specifieke behoeften en doelen. Wij bieden maatwerk oplossingen vanaf €1.500 per maand. Tijdens een gratis consultatie bespreken wij uw situatie en maken een passend voorstel.'
    },
    {
      id: 'faq4',
      question: 'Werken jullie met bedrijven in alle sectoren?',
      answer:
        'Ja, wij hebben ervaring met diverse sectoren waaronder B2B dienstverlening, e-commerce, technologie, gezondheidszorg en meer. Onze strategieën passen wij aan op uw specifieke markt en doelgroep.'
    },
    {
      id: 'faq5',
      question: 'Hoe meten jullie het succes van campagnes?',
      answer:
        'Wij gebruiken uitgebreide analytics en rapportages om prestaties te meten. Dit omvat metrics zoals website traffic, conversieratio\'s, lead kwaliteit, ROI en andere KPI\'s die relevant zijn voor uw doelen. U ontvangt maandelijkse rapportages met duidelijke inzichten.'
    },
    {
      id: 'faq6',
      question: 'Kan ik mijn contract op elk moment opzeggen?',
      answer:
        'Wij werken met flexibele contracten. De meeste diensten hebben een minimale looptijd van 3-6 maanden om effectieve resultaten te kunnen leveren. Daarna kunt u maandelijks opzeggen met een opzegtermijn van 30 dagen.'
    },
    {
      id: 'faq7',
      question: 'Bieden jullie ook training aan mijn team?',
      answer:
        'Absoluut! Wij geloven in kennisoverdracht en bieden training aan uw team op gebied van digitale marketing, lead generatie en het gebruik van marketing tools. Dit zorgt voor duurzame resultaten en interne expertise.'
    },
    {
      id: 'faq8',
      question: 'Wat gebeurt er als ik niet tevreden ben met de resultaten?',
      answer:
        'Uw tevredenheid staat voorop. Als u niet tevreden bent, analyseren wij samen wat er beter kan en passen onze strategie aan. In uitzonderlijke gevallen bieden wij een geld-terug-garantie binnen de eerste 30 dagen.'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="section-title">Veelgestelde Vragen</h2>
            <p className="section-subtitle">
              Hier vindt u antwoorden op de meest gestelde vragen over onze diensten. Heeft u nog andere vragen? Neem gerust contact met ons op.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="accordion-item">
                  <h3 className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      <i className="bi bi-question-circle me-3"></i>
                      {faq.question}
                    </button>
                  </h3>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Help Section */}
            <div className="text-center mt-5">
              <div className="bg-light p-5 rounded-4">
                <h4 className="mb-3">Nog Vragen?</h4>
                <p className="mb-4">
                  Kunt u uw vraag niet vinden? Ons team staat klaar om u te helpen.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <button className="btn btn-primary" onClick={scrollToContact}>
                    <i className="bi bi-envelope me-2"></i> Stuur een Bericht
                  </button>
                  <a href="tel:+31201234567" className="btn btn-outline-primary">
                    <i className="bi bi-telephone me-2"></i> Bel Ons Direct
                  </a>
                  <a
                    href="https://wa.me/31612345678"
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp me-2"></i> WhatsApp
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

export default FAQ;
