import React, {useEffect, useState} from 'react'
import './Nav.css'
import Logo1 from '../../assets/Asset2.png'
import Logo2 from '../../assets/Asset1.png'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FiSun} from 'react-icons/fi'
import {MdOutlineNightlight} from 'react-icons/md'



const Header = (props) => {
  const [activeNav, setActiveNav] = useState('#')
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowMenu(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  function toggleMenu(){
    setShowMenu(!showMenu);
   }

  return (
   <div className={props.darkMode ? "dark" : ''}>
      <nav className={`${props.darkMode ? "dark" : ''} ${showMenu ? 'mobile-menu' : 'mobile-menu-icon'}`}>
        <a href="#" className='logo'>
          <img src={props.darkMode ? Logo1 : Logo2} alt="Logo"/>
        </a>
            <a href="#" title='Home' 
              onClick={()=> setActiveNav("#")} 
              className={activeNav === "#" ? "active" : ""}>Home
            </a>
              <hr/>
            <a href="#about" title='About' 
              onClick={()=> setActiveNav("#about")} 
              className={activeNav === "#about" ? "active" : ""}> About 
            </a>

              <hr/>
            <a href="#experience" title='Experience'
              onClick={()=> setActiveNav("#Experience")} 
              className={activeNav === "#Experience" ? "active" : ""}> Experience
            </a>
              <hr/>

            <a href="#services" title='Services'
              onClick={()=> setActiveNav("#Services")}
              className={activeNav === "#Services" ? "active" : ""}>Services
            </a>
              <hr/>

            <a href="#portfolio" title='Projects'
              onClick={()=> setActiveNav("#Projects")}
              className={activeNav === "#Projects" ? "active" : ""}> Projects
            </a>

              <hr/>
            <a href="#contact" title='Contact'
              onClick={()=> setActiveNav("#Contact")}
              className={activeNav === "#Contact" ? "active" : ""}> Contact
            </a>
              <hr/>

            <a href="#" className='theme-icon' onClick={props.toggleDarkMode}>{props.darkMode ? <FiSun /> : <MdOutlineNightlight /> }</a>
            <hr/>

            {/* <a href="#" 
              onClick={()=> setShowMenu(!showMenu)}>
              {showMenu ? <RxHamburgerMenu className='icon' /> : <ImCancelCircle className='icon'/>}
            </a> */}
      </nav>
      <a href={"#activeNav"} onClick={toggleMenu}>
      {<RxHamburgerMenu className='icon'/>}
    </a>
  </div>
    
  )
}

export default Header