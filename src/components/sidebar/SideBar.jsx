import React from 'react';
import sidebar from "../../images/rsz_sidebar.jpg";
import "../../App.css";
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar">
     <div className="sidebar-area">
     <hr />
        <span className="sidebar-title"> About the Author </span>
     <hr/>
        <img src={sidebar} className="sidebar-img" alt=""  />
        <p className="sidebar-info"> Hello World! Welcome to code life, a front-end focused
        web blog. I'm Elias, a passionate and creative web developer with a deep fascination
        for all things code and design. With 8 off and on years of experience in the web 
        development industry, I've had the privilege of witnessing the evolution of the web 
        firsthand, from its simpler beginnings to the complex and interconnected digital 
        landscape we navigate today.
<br />
<br />
          My coding journey began in Decemeber 2015, when I enrolled in codecademy, sparking 
          a curiosity that turned into a full-blown devotion to creating exceptional online
          experiences. From front-end aesthetics to back-end functionality, I thrive on the
          process of translating ideas into captivating websites that not only look incredible
          but also provide seamless user experiences.
<br />
<br />
           In this blog, I aim to share my insights, tips, and discoveries as I continue to grow
           and learn in this ever-evolving field. Whether you're a fellow developer seeking
           innovative solutions, a beginner eager to grasp the basics, or simply someone who's
           curious about web development, this blog is here to assist in the world of web development.
<br />
<br />
            Thank you for joining me on this exhilarating journey through the digital realm.
            Let's dive into the intricacies of web development together, and feel free to
            reach out with your thoughts and or questions.</p>
     </div>
     <div className="sidebar-area">
     <div className="sidebar-title-categories"> Categories </div>
     <ul className="sidebar-list">
        <li className="sidebar-list-item"> HTML </li>
        <li className="sidebar-list-item"> CSS</li>
        <li className="sidebar-list-item"> JavScript</li>
        <li className="sidebar-list-item"> React</li>
     </ul>
     </div>
     <div className="sidebar-area">
        <div className="sidebar-title-follow"> Follow US </div>
        <div className="sidebar-social">
        <FaGithub className="git-hub" />
      <FaLinkedin className="linkedin" />
      <FaInstagram className="instagram" />
      <FaPinterest  className="pinterest" /> 

        </div>
     </div>

    </div>
  )
}

export default SideBar