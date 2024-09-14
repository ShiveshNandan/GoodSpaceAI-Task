import React from 'react'
import "../StyleSheets/HeroSection.scss"


const HeroSection = () => {
  return (
    <header className="header">
      <div className='text-container'>
        <h1 className='top-heading'>The World's Most Configurable</h1>
        <h1 className='main-heading'>Travel & Expense Management Software</h1>
        <p className='description'>
          Configure <span className='highlight'>any</span> rule. Enable a world-class mobile experience for your users. Get seamless
          reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel expenses.
          Open APIs to connect with external systems.
        </p>
      </div>
      <div className="trial-form">
        <input type="text" placeholder="Name" className='input-field' />
        <input type="email" placeholder="Official email ID" className='email-input' />
        <button className='trial-button'>Start trial</button>
      </div>
      <p className="free-trial-info">30 Days free trial · Up to 10 users</p>
    </header>
  );
};

export default HeroSection;
