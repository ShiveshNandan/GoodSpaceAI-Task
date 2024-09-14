import React from 'react';
import '../StyleSheets/Features.scss';

const featureItems = [
  {
    img: "/setup.png",
    heading: "Setup Employee Groups",
    text: "Use any parameter to setup distinct employee groups to implement policies.",
    comingSoon: false
  },
  {
    img: "/Definitive.png",
    heading: "The Definitive Rule Engine",
    text: "Configure ANY policy - and if you can't configure it, we promise to work on it for free.",
    comingSoon: false
  },
  {
    img: "/Report.png",
    heading: "Customized Reports",
    text: "Setup the reports that you want using our seamless reporting engine.",
    comingSoon: false
  },
  {
    img: "/superior.png",
    heading: "Superior Employee Experience",
    text: "Manage all expenses and travel requests easily. Empower your employees with personalized reports.",
    comingSoon: false
  },
  {
    img: "/integration.png",
    heading: "Easy Integrations",
    text: "Integrate with your upstream, HRMS, or your downstream finance system to seamlessly deliver value.",
    comingSoon: false
  },
  {
    img: "/workflows.png",
    heading: "Configurable Workflows",
    text: "Configure approvals, rejections, escalations, and reports. Setup new groups at will.",
    comingSoon: false
  },
  {
    img: "/scan.png",
    heading: "Scan any Bill",
    text: "The world’s best OCR system backs up this product. All data goes in. 99% success.",
    comingSoon: false
  },
  {
    img: "/concierge.png",
    heading: "AI-Based Concierge",
    text: "Ask the concierge to change things during your travel – and it will trigger relevant actions 24×7.",
    comingSoon: true
  },
  {
    img: "/trip.png",
    heading: "AI-Assisted Trip Planning",
    text: "Just tell us what you want to do in normal language and we will put together the best itinerary for you.",
    comingSoon: true
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Features that suit your needs</h2>
        <div className="features-grid">
          {featureItems.map((item, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-header">
                <div className="feature-icon-container">
                  <img src={item.img} alt={item.img} className="feature-icon" />
                </div>
                <div className='feature-heading-container'>
                <h3 className="feature-heading">{item.heading}
                </h3>
                {item.comingSoon && <span className="coming-soon">coming soon</span>}
                </div>
              </div>
              <p className="feature-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;




