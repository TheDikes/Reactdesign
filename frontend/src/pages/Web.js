import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import FirstPage from "../components/firstPage";
import RealWorld from "../components/Realworld";
import MarketSection from "../components/MarketSection";
import MarketSectionAdd from "../components/marketSectionAdd";
import BusinessGrowth from "../components/businessGrowth";
import QuestionAnswer from "../components/questionAnswer";
import TalkingAbout from "../components/talkingAbout";
import ConsultingSolution from "../components/consultingSolution";
import SmallBusiness from "../components/smallBusiness";
import Footer from "../components/footer";
import "./Web.css";


const Web = () => {
  return (
<div className="web-1920-1">
 
     <Header />
     <FirstPage />
      <img className="web-1920-1-child3" alt="" src="/rectangle-4.svg" />
      <img
        className="real-world-shape-icon"
        alt=""
        src="/mainslidershape3.svg"
      />

      {/* Second section */}
     
      <RealWorld />
     
      <MarketSection />
      <img className="web-1920-1-child12" alt="" src="/mainslidershape3.svg" />
      <img className="path-9-icon" alt="" src="/mainslidershape3.svg" />
      <img className="web-1920-1-child13" alt="" src="/rectangle-20.svg" />

     <MarketSectionAdd />

     <BusinessGrowth />

      {/* Fifth section */}
      <div className="mission-is-to-protect-your-bus-wrapper">
        <b className="mission-is-to">{`MISSION IS TO PROTECT YOUR BUSINESSES & MUCH MORE`}</b>
      </div>
      <div className="vector-parent">
        <img className="group-child" alt="" src="/rectangle-3.svg" />
        <b className="discover-more">DISCOVER MORE</b>
      </div>
      <img className="web-1920-1-child24" alt="" src="/rectangle-30.svg" />
      
      <QuestionAnswer />
     
      <TalkingAbout />

      <ConsultingSolution />
 
      <SmallBusiness />
      
      <Footer />
      </div>
  );
};

export default Web;