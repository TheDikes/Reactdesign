import React from 'react'
import { Button } from "react-bootstrap";
import "./firstPage.css";

const FirstPage = () => {
  return (
    <div className='first'> 
    <img className="rectangle-icon" alt="" src="/rectangle-2.svg" />
    <div className="welcome-to-codeshaper">Welcome to Codeshaper</div>
    <div className='firstpage'>
    <b className="consulting-for-everybusiness">
      Consulting For Every Business
    </b>
    <Button
      className="group-button"
      variant="primary"
      name="btn-m"
      id="btn-m"
      size="lg"
      disabled
    >
      DISCOVER MORE
    </Button>
    </div>
    </div>
  )
}

export default FirstPage;