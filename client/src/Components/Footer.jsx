import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <div className="footer-section-main-div">
      <h1>Contact Us</h1>
      <p>
        Contact our tech professionals, and together let's lead the world
        towards digital disruption via multiple digital modes of <br />{" "}
        communication and implementation techniques
      </p>

      <div className="row">
        <div className="col-sm-4  text-white font-div">
          
          <br />
          <br />
          Contact Us
          <p>
            Reach Out to Us <br />
            <a href="#">
              <b>Find More details</b>
            </a>
          </p>
        </div>

        <div className="col-sm-4 text-white font-div">
         
          <br />
          <br />
          Call Us
          <p>Tel : 0717981980</p>
        </div>

        <div className="col-sm-4 text-white font-div">
         
          <br />
          <br />
          Partner with Us <br />
          <br />
          <a href="#">
            Let's Innovate <br /> <b> Together</b>{" "}
          </a>
        </div>   

      <footer>
       <br /><br /><br /> © 2023 MEX Technology | All Rights Reserved
        </footer>


      </div>

    </div>
  );
};

export default Footer;
