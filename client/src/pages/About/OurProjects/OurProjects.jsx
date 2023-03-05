import React from "react";
import "./OurProjects.css";
import pro1 from "../../../assets/pro1.jpg";
import pro2 from "../../../assets/pro2.jpg";
import pro3 from "../../../assets/pro3.jpg";
import pro4 from "../../../assets/pro4.jpg";
import pro5 from "../../../assets/pro5.jpg";
import pro6 from "../../../assets/pro6.jpg";

export function OurProjects() {
  return (
    <section id="portfolio">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <h6 className="text-primary">PROJECTS</h6>
            <h1>Our Recent Work</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur nisi necessitatibus
              repellat distinctio eveniet eaque fuga in cumque optio consectetur
              harum vitae debitis sapiente praesentium aperiam aut
            </p>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-lg-4 col-sm-6">
            <div className="project">
              <img src={pro1} alt="" />
              <div className="overlay">
                <div>
                  <h4 className="text-white">Project Title</h4>
                  <h6 className="text-white">Website Design</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="project">
              <img src={pro2} alt="" />
              <div className="overlay">
                <div>
                  <h4 className="text-white">Project Title</h4>
                  <h6 className="text-white">Website Design</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="project">
              <img src={pro3} alt="" />
              <div className="overlay">
                <div>
                  <h4 className="text-white">Project Title</h4>
                  <h6 className="text-white">Website Design</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="project">
              <img src={pro4} alt="" />
              <div className="overlay">
                <div>
                  <h4 className="text-white">Project Title</h4>
                  <h6 className="text-white">Website Design</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="project">
              <img src={pro5} alt="" />
              <div className="overlay">
                <div>
                  <h4 className="text-white">Project Title</h4>
                  <h6 className="text-white">Website Design</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="project">
              <img src={pro6} alt="" />
              <div className="overlay">
                <div>
                  <h4 className="text-white">Project Title</h4>
                  <h6 className="text-white">Website Design</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
