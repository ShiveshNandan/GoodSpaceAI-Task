import React from 'react';
import '../StyleSheets/Integration.scss';

const Integration = () => {
  return (
    <div className='integration-bg'>
      <section className="integration-section">
        <h2 className='integration-heading'>Integrations</h2>
        <img src="/vector.png" alt="" className='integration-image' />
        <div className="integration-cards">

          <div className="integration-card hrms">
            <div className='integration-card-header'>
              <img src="/hrms.png" alt="" className='integration-icon' />
              <h3 className='integration-card-title'>HRMS Systems</h3>
            </div>
            <p className='integration-text'>
              We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.
            </p>
            <p className='integration-text'>
              We are already deeply integrated with PeopleStrong and others are coming up.
            </p>
          </div>

          <div className="integration-card finance">
            <div className='integration-card-header'>
              <img src="/finance.png" alt="" className='integration-icon' />
              <h3 className='integration-card-title'>Finance Systems</h3>
            </div>
            <p className='integration-text'>
              Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.
            </p>
            <p className='integration-text'>Open APIs available to connect.</p>
          </div>

          <div className="integration-card sso">
            <div className='integration-card-header'>
              <img src="/signin.png" alt="" className='integration-icon' />
              <h3 className='integration-card-title'>Single Sign-on Systems</h3>
            </div>
            <p className='integration-text'>
              We can integrate to ensure that your users don’t have to log in multiple times into different logins.
            </p>
            <p className='integration-text'>SSO is possible with any system that offers it.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Integration;

