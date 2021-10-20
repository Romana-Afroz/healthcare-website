import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main-footer bg-info mt-5">
      <div className="container mt-5">
        <div className="row mt-5">
          {/* GET IN TOUCH */}
          <div className="col-lg-3 col-sm-12">
            <h4>get in touch</h4>
            <hr className="w-25 m-auto mb-2" />
            <h6 className="list-unstyled">
              <li>+91 7000622625</li>
              <li>info@mediexhealthcare.com</li>
              <li>JGF House
                E-4/108, vANDEMATRAM CIRCLE, Opp.
                BAGHIRA APPARTMENT, ARERA COLONY,
                BHOPAL INDIA</li>
              <li>IRIS/I/402, Magarpatta City,
                Hadapsar, PUNE-411028</li>
            </h6>
          </div>
          {/* OUR SERVICES */}
          <div className="col-lg-3 col-sm-12">
            <h4>OUR SERVICES</h4>
            <hr className="w-25 m-auto mb-2" />
            <h6 className="list-unstyled our-services">
              <li>Dental Care</li>
              <li>Eye care</li>
              <li>Physical  Therapy</li>
              <li>Surgery</li>
            </h6>
          </div>
          {/* QUICK LINKS */}
          <div className="col-lg-3 col-sm-12">
            <h4>QUICK LINKS</h4>
            <hr className="w-25 m-auto mb-2" />
            <h6 className="list-unstyled quick-links">
              <li>Blog</li>
              <li>Our Expertise</li>
              <li>Faq</li>
              <li>Doctors</li>
            </h6>
          </div>

          {/* SOCIAL LINK */}
          <div className="col-lg-3 col-sm-12">
            <h4>SOCIAL LINK</h4>
            <hr className="w-25 m-auto mb-2" />
            <div className="m-2">
              <i class="fab facebook fa-facebook-square p-2"></i>
              <i class="fab youtube fa-youtube p-2"></i>
              <i class="fab instagram fa-instagram p-2"></i>
              <i class="fab twitter fa-twitter p-2"></i>
              <i class="fab linkedin fa-linkedin-in p-2"></i>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            <span className="copy">&copy;</span>2021
            Mediex Healthcare Pvt Ltd | All rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
