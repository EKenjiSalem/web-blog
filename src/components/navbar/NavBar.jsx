import {Link} from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import logo from "../../images/Coder-Logo.jpeg";
import "../../App.css";


function NavBar() {
  return (
     <nav className="nav-bar">
      <Link to="/">
       <img src={logo} className="coder-logo" />
        </Link>
      <div className="topleft">
      <a href="https://github.com/EKenjiSalem" target="_blank" rel="noopener noreferrer"><FaGithub className="git-hub" /></a>
      <FaLinkedin className="linkedin" />
      <a href="https://www.instagram.com/esalemcode/" target="_blank" rel="noopener noreferrer"><FaInstagram className="instagram" /></a>
      <FaPinterest  className="pinterest" /> 
      </div>
        <div className="topcenter">
          <ul className="toplist"> 
                <Link to="/blog" className={"nav-item"}>Blog </Link>
                <Link to="/html" className="nav-item">HTML </Link>
                <Link to="/css" className="nav-item">CSS </Link>
                <Link to="/javascript" className="nav-item">Javascript </Link>
                <Link to="/reactblog" className="nav-item">React </Link>
          </ul>
         </div>
     </nav>
  );
}

export default NavBar;



