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
      <div className="tired">
        <img
      style={{ cursor:"pointer" , height:"500px", width:"900px" }}
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwx5kGKPrWY9L_7GAHlMiA31DmBnAUiGuAw&usqp=CAU" 
       alt='logo'/>
      </div>
      
      <div className="tired">
        <img
      style={{ cursor:"pointer" , height:"500px", width:"900px" }}
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZc_JiYB-txhStVqjPa_u1EBEdo7ZsMzA4g&usqp=CAU" 
       alt='logo'/>
      </div>
      <div className="tired">
        <img
      style={{ cursor:"pointer" , height:"500px", width:"900px" }}
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPml-BFNpkMZau4WOxuxK9xQthceFPc7MoNw&usqp=CAU" 
       alt='logo'/>
      </div>

      <div className="tired">
        <img
      style={{ cursor:"pointer" , height:"500px", width:"900px" }}
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluMMGMlGH3ALdH67i7mVEWrpRSFjBOE0xpw&usqp=CAU" 
       alt='logo'/>
      </div>
      
      <div className="tired">
        <img
      style={{ cursor:"pointer" , height:"500px", width:"900px" }}
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0eXIEFymGf2pWogRNDXBkSLz6g3zidMvXY9JdfE1hiO2C9d97AQjwFmusSS2cFH2ba0&usqp=CAU" 
       alt='logo'/>
      </div>

       </div>
   
  
  
 
  );
}

export default Navbar