import React from 'react';
import '../StyleSheets/Customers.scss';

const Customers = () => {
  return (
    <section className="customers-section">
      <div className="container">
        <h2 className="title">Our customers love us</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item rohit">
            <p className="feedback">
              ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.
            </p>
            <div className="customer-info">
              <img src="rohit.png" alt="Rohit Mehra" className="customer-image" />
              <div className="customer-details">
                <h4 className="customer-name">Rohit Mehra</h4>
                <h4 className="customer-position">CFO, XYZ</h4>
              </div>
            </div>
          </div>

          <div className="testimonial-item alan">
            <p className="feedback">
              ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.
            </p>
            <div className="customer-info">
              <img src="alan.png" alt="Alan Turing" className="customer-image" />
              <div className="customer-details">
                <h4 className="customer-name">Alan Turing</h4>
                <h4 className="customer-position">CFO, XYZ</h4>
              </div>
            </div>
          </div>

          <div className="testimonial-item mark">
            <p className="feedback">
              ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.
            </p>
            <div className="customer-info">
              <img src="mark.png" alt="Mark Jacob" className="customer-image" />
              <div className="customer-details">
                <h4 className="customer-name">Mark Jacob</h4>
                <h4 className="customer-position">CEO, XYZ</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
