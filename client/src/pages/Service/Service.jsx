import React from "react";
import "./Service.css";
import { Data } from "./Data";

function Service() {
  return (
    <section id="service">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <h6 className="text-primary">SERVICES</h6>
            <h1>Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur nisi necessitatibus
              repellat distinctio eveniet eaque fuga in cumque optio consectetur
              harum vitae debitis sapiente praesentium aperiam aut
            </p>
          </div>
        </div>
        <div className="row g-4">
          {Data.map((service) => (
            <div className="col-lg-4 col-sm-6" key={service.id}>
              <div className="service card-effect bounceInUp">
                <div className="iconbox">
                  <i className={service.icon}></i>
                </div>
                <h5 className="mt-4 mb-2">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
