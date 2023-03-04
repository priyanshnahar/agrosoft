import React from "react";

function Hero() {
  return (
    <div className="hero vh-100 d-flex align-items-center" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h1 className="display-4 text-dark">
              Build robust landing pages now
            </h1>
            <p className="text-dark my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              quia sequi eius. Quas, totam aliquid. Repudiandae reiciendis vel
              excepturi ipsa voluptate dicta!
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
  );
}

export default Hero;
