import React from 'react';
import '../StyleSheets/Manage.scss';

const Manage = () => {
  return (
    <>
      <div className='manage-container'>
        <h1 className='manage-title'>Manage your travel and expenses the smart way!</h1>
        <div className="trial-form">
          <input type="text" placeholder="Name" className='input-field' />
          <input type="email" placeholder="Official email ID" className='input-field email-input' />
          <button className='start-trial-btn'>Start trial</button>
        </div>
        <p className="free-trial-info">30 Days free trial · Up to 10 users</p>
      </div>
    </>
  );
}

export default Manage;
