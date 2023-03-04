import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <h6 className="text-primary">CONTACT</h6>
            <h1>Get In Touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur nisi necessitatibus
              repellat distinctio eveniet eaque fuga in cumque optio consectetur
              harum vitae debitis sapiente praesentium aperiam aut
            </p>
          </div>
        </div>

        <form action="" className="row g-3 justify-content-center">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter E-mail"
            />
          </div>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Subject"
            />
          </div>
          <div className="col-md-10">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="form-control"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <div className="col-md-10 d-grid">
            <button className="btn btn-primary">Contact</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
