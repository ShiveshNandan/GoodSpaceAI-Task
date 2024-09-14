import React from 'react';
import '../StyleSheets/Footer.scss';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-border">
        <div className="footer-logo">
        <div className="logo">
          <img src={"/logo.png"} alt="ExpenseBook logo" />
        </div>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <img src='/Shape.png' alt='' className=""></img> Address
          </div>
          <div className="contact-item">
            <img src='/call.png' alt='call'></img> <p>+91 1234567890</p>
          </div>
          <div className="social-media">
            <h1>Social Media</h1>
            <a href="#" className='footer-icon'><img src='/Instagram.png'  alt='' ></img></a>
            <a href="#" className='footer-icon'><img src='/youtube.png'  alt='' ></img></a>
            <a href="#" className='footer-icon'><img src='/LinkedIn.png' alt='' ></img></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Blogs</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Integrations</a>
        </div>

        <div className="copyright">
          Copyright &copy; 2024 • ExpenseBook
        </div>
      </div>
    </footer>
  );
};

export default Footer;
