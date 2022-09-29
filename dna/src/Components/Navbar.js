import React from 'react';
import './Navbar.css';
import HamburgerDrawer from './HamburgerDrawer'

const Navbar = (setCategory) => {
  return (
    <div>
       <div className='nav'>

        <div className="menu"><hamburger /></div>
        <HamburgerDrawer setCategory={setCategory} />
       

       <img 
       style={{ cursor:"pointer" }}
       src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" 
       height='60%'
       alt='logo'/>

      <button class="hindi" href="">हिंदी में पढ़ें</button>

       </div>
       </div>
   
  );
}

export default Navbar