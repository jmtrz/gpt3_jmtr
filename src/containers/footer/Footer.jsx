import React from 'react';
import './footer.css';
import gpt3logo  from "../../assets/logo.svg";


var currentDate = () => {
    var dateToday = new Date();
    // var date = String (dateToday.getDate()).padStart(2,'0');
    // var month = String (dateToday.getMonth()).padStart(2,'0');
    var year = String (dateToday.getFullYear());

    return  year;
}

const Footer = () => {

  return (
    <div className="gpt3__footer section__padding">
      <div className='gpt3__footer-heading'>
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo"  />
          <p>Crechterwood K12 182 DK ALknjcb,<br/> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Crechterwood K12 182 DK Alknjkcb</p>
          <p>085-0132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@{currentDate()} GPT-3. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
