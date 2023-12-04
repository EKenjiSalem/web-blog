import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import logo from "../../images/Coder-Logo.jpeg";
import "../../App.css";
import icon from '../../images/menu-icon.png';



function NavBar() {

  const [ menuOpen, setMenuOpen ] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen (!menuOpen);
  }


  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    // Optionally, close the menu after selecting an option
    setMenuOpen(false);
  };

  return (
     <nav className="nav-bar">
      <Link to="/">
       <img src={logo} className="coder-logo" />
        </Link>
      <div className="topleft">
      <a href="https://github.com/EKenjiSalem" target="_blank" rel="noopener noreferrer"><FaGithub className="git-hub" /></a>
      <a href="https://www.linkedin.com/in/elias-k-salem-65740831/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="linkedin" /></a>
      <a href="https://www.instagram.com/esalemcode/" target="_blank" rel="noopener noreferrer"><FaInstagram className="instagram" /></a>
      <a href="https://www.pinterest.com/esalemcode/" target="_blank" rel="noopener noreferrer"><FaPinterest  className="pinterest" /></a>
      </div>

      {/* https://www.pinterest.com/esalemcode/*/}

      <div className="nav-menu" onClick={toggleMenu} >
        <img src={icon} className="menu-icon" />
      </div>
      
        <div className="topcenter">
        <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
                <NavLink to="/blog" 
                className={`nav-item ${selectedMenu === 'blog' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('blog')}> Opinion </NavLink>
                <NavLink to="/html" className={`nav-item ${selectedMenu === 'blog' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('blog')}> HTML </NavLink>
                <NavLink to="/css" className={`nav-item ${selectedMenu === 'blog' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('blog')}> CSS </NavLink>
                <NavLink to="/javascript" className={`nav-item ${selectedMenu === 'blog' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('blog')}> Javascript </NavLink>
                <NavLink to="/reactblog" className={`nav-item ${selectedMenu === 'blog' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('blog')}> React </NavLink>
          </ul>
         </div>
     </nav>
  );
}

export default NavBar;



