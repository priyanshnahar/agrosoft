import React from "react";
import Service from "../Service/Service";

function Hero() {
  return (
    <>
    <div className="hero vh-100 d-flex align-items-center" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h1 className="display-4 text-dark">PROGRESSIVE AGRO</h1>
            <p className="text-dark my-3">
              We are your go-to consultants for horticulture warehouse subsidies
              and all agri-related government schemes. Our expert advice and
              support help you navigate funding programs, maximize benefits, and
              drive sustainable growth for your agricultural business.
            </p>
            <a href="/" className="btn me-2 btn-warning">
              Get Started
            </a>
            <a href="/" className="btn me-2 btn-success">
              My Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
    <Service />
    </>
  );
}

export default Hero;
