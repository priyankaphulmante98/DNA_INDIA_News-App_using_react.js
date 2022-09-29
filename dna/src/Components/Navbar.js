import React from 'react';
import './Navbar.css';
import HamburgerDrawer from './HamburgerDrawer'

const Navbar = (setCategory) => {
  return (
    <div>
       <div className='navbar'>

        <div className="menu"><HamburgerDrawer /></div>
        <HamburgerDrawer setCategory={setCategory} />
       

       <img 
       style={{ cursor:"pointer" }}
       src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" 
       height='60%'
       alt='logo'/>

      <button className="hindi" href="">हिंदी में पढ़ें</button>

       </div>
       </div>
   
  );
}

export default Navbar