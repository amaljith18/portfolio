import React, { useRef, useState } from 'react'
import './Navbar.css';
// import Logo from '../../assets/logo.svg';
import unerline_image from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {
  const [menu, setMenu] = useState("HOME");
  const menuRef = useRef<HTMLUListElement | null>(null);
  const openmenu = ()=>{
    if(menuRef.current) {
      menuRef.current.style.right= "0";
    }

  }
  const closemenu = ()=>{
    if(menuRef.current){
      menuRef.current.style.right= "-350px";
    }
    
  }



  return (
    <div id= 'HOME' className='navbar'>
      {/* <img src={Logo} alt="" className='logo' /> */}
      <h1 className="logo">AMAL</h1>
      <img src={menu_open} onClick={openmenu} alt="" className='nav-mob-open' />
      <ul  ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closemenu}  alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-tag' href='#HOME'><p onClick={()=>{setMenu('HOME')}}>HOME</p></AnchorLink>{menu==='HOME'? <img src={unerline_image}  alt=''/>: <></>}</li>
        <li><AnchorLink className='anchor-tag' offset={50}href='#ABOUT ME'><p onClick={()=>{setMenu('ABOUT ME')}}>ABOUT ME</p></AnchorLink>{menu==='ABOUT ME'? <img src={unerline_image}  alt=''/>: <></>}</li>
        <li><AnchorLink className='anchor-tag' offset={50}href='#SERVICES'><p onClick={()=>{setMenu('SERVICES')}}>SERVICES</p></AnchorLink>{menu==='SERVICES'? <img src={unerline_image}  alt=''/>: <></>}</li>
        <li><AnchorLink className='anchor-tag' offset={50}href='#PORTFOLIO'><p onClick={()=>{setMenu('PORTFOLIO')}}>PORTFOLIO</p></AnchorLink>{menu==='PORTFOLIO'? <img src={unerline_image}  alt=''/>: <></>}</li>
        <li><AnchorLink className='anchor-tag' offset={50}href='#CONTACT'><p onClick={()=>{setMenu('CONTACT')}}>CONTACT</p></AnchorLink>{menu==='CONTACT'? <img src={unerline_image}  alt=''/>: <></>}</li>
      </ul>
      <div className="nav-connect"> <AnchorLink className='anchor-tag' offset={50}href='#CONTACT'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
