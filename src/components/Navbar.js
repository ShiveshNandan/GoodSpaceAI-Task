import React, { useEffect, useState } from 'react';
import '../StyleSheets/Navbar.scss';

const Navbar = () => {
  // const [isVisible, setIsVisible] = useState(false);

  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY / window.innerHeight;
  //     // console.log("position :",window.innerHeight)
  //     if (scrollPosition > 0.2945 ) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  const [menu, setmenu] = useState(false);
  // const toggle = () => {
  //   {theme ==='dark' ? setTheme('light') : setTheme('dark')}
  //   // console.log(theme)
  // }
  return (
    <div className="navbar-outer">
      <nav className="navbar">
        <div className="logo">
          <img src={"/logo.png"} alt="ExpenseBook logo" />
        </div>

        <div className="nav-links">
          <a href="#">Blogs</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Integrations</a>
          <button className="trial-button">Start trial</button>
        </div>

        {/*============ mobile navbar =========== */}
        <div onClick={()=> {setmenu(true)}} className='open'><img src="/menu.png" alt="" className='open-menu' /></div>
        {/* <div className='black-div'> */}
        <div onClick={() => setmenu(false)} className={`menu-overlay ${!menu ? "translate-hide" : "translate-show"}`}>
      <div className={`menu-content ${!menu ? "translate-hide" : "translate-show"}`}>
        <img onClick={() => { setmenu(false) }} src={"/close.png"} height={100} width={1000} alt='' className='close-icon' />

        <div className="menu-links">
          <a href="#">Blogs</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Integrations</a>
        </div>

      </div>
    </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
