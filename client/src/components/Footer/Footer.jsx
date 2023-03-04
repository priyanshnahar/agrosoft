import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <img className="logo" src="img/logo-white.svg" alt="" />
            </div>
            <div className="col-lg-2">
              <h5 className="text-white">Brand</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="text-white">More</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">FAQ's</a>
                </li>
                <li>
                  <a href="/">Privacy & Policy</a>
                </li>
                <li>
                  <a href="/">Warranty</a>
                </li>
                <li>
                  <a href="/">Shipment</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="text-white">Contact</h5>
              <ul className="list-unstyled">
                <li>Address: 2715 Ash Dr. San Jose, South Dakota 83475</li>
                <li>Email: jackson.graham@example.com</li>
                <li>Phone: (603) 555-0123</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">
                © 2020 copyright all right reserved | Designed with{" "}
                <i className="bx bx-heart text-danger"></i> by
                <a
                  href="https://www.youtube.com/channel/UCYMEEnLzGGGIpQQ3Nu_sBsQ"
                  className="text-white"
                >
                  SA7MAN
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <div className="social-icons">
                <a href="/">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="/">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="/">
                  <i className="bx bxl-instagram-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
