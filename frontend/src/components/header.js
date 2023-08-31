import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div>   
    <img className="background-icon" alt="" src="/background.svg" /> 
    <img className="web-1920-1-item" alt="" src="/group-1.svg" />
    {/* <img
      className="main-slider-shape-3-icon"
      alt=""
      src="/mainslidershape3.svg"
    /> */}
    {/* <img
      className="main-slider-shape-1-icon"
      alt=""
      src="/mainslidershape3.svg"
    /> */}
    {/* <img
      className="main-slider-shape-2-icon"
      alt=""
      src="/mainslidershape3.svg"
    /> */}
    {/* <img
      className="main-slider-shape-4-icon"
      alt=""
      src="/mainslidershape3.svg"
    /> */}
    {/* <img
      className="main-slider-shape-5-icon"
      alt=""
      src="/mainslidershape3.svg"
    /> */}

     <button className="logo-1-parent">
      {/* <img className="logo-1-icon" alt="" src="/mainslidershape3.svg" /> */}
      <b className="creativelogo">CreativeLogo</b>
     </button> 

    <img className="web-1920-1-inner" alt="" src="/line-1.svg" />
    <button className="home">
      Home Services Pages Case Shop Blog Content
    </button>
    <img className="line-icon" alt="" src="/line-2.svg" />
    <img className="web-1920-1-child1" alt="" src="/line-2.svg" />
    <img className="web-1920-1-child2" alt="" src="/line-2.svg" />
    <img
      className="icon-feather-search"
      alt=""
      src="/icon-feathersearch.svg"
    />
    <img
      className="icon-simple-facebook"
      alt=""
      src="/icon-simplefacebook.svg"
    />
    <img
      className="icon-ionic-logo-twitter"
      alt=""
      src="/icon-ioniclogotwitter.svg"
    />
    <img
      className="icon-ionic-logo-linkedin"
      alt=""
      src="/icon-ioniclogolinkedin.svg"
    />
    <a className="icon-feather-instagram" target="_blank">
      <img className="path-3-icon" alt="" src="/path-3.svg" />
      <img className="path-4-icon" alt="" src="/path-4.svg" />
      <img className="path-5-icon" alt="" src="/mainslidershape3.svg" />
    </a>
    <b className="need-help-92-666">Need help? +92 666 888 0000</b>
    </div>
  )
}

export default Header;