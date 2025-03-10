"use client"

import React, { useState } from "react";

const Contact2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("Email sent successfully!");
        setFormData({
          name: "",
          contact: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus(`Failed to send email: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="section-contact-2 position-relative pb-60 overflow-hidden"
      >
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-7 pb-5 pb-lg-0">
              <div className="position-relative">
                <div className="position-relative z-2">
                  <h3 className="gradient-heading mb-3 mt-3"
                    style={{
                      padding: '20px 0 0 0',
                      fontSize: '2.2rem',
                      fontWeight: 700,
                    }}>Let’s connect</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6 ">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          aria-label="username"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="contact"
                          name="contact"
                          placeholder="Phone"
                          aria-label="phone"
                          value={formData.contact}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="email"
                          name="email"
                          placeholder="Emaill"
                          aria-label="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          aria-label="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control bg-3 border border-1 rounded-3"
                          id="message"
                          name="message"
                          placeholder="Message"
                          aria-label="With textarea"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary-2 rounded-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <i className="ri-arrow-right-up-line" />
                        </button>
                      </div>
                      {submitStatus && (
                        <div className="col-12">
                          <p
                            className={
                              submitStatus.includes("successfully")
                                ? "text-success"
                                : "text-danger"
                            }
                          >
                            {submitStatus}
                          </p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
                <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
              </div>
            </div>
            <div className="col-lg-5 d-flex flex-column ps-lg-8">
              {/* Phone Number */}
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-phone-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Phone Number</span>
                  <h6 className="mb-0">+1-904-243-6176</h6>
                </div>
                <a
                  href="tel:+19042436176"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>

              {/* Email */}
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-mail-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Email</span>
                  <h6 className="mb-0">sarmed@impleko.com</h6>
                </div>
                <a
                  href="mailto:sarmed@impleko.com"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>

              {/* Skype */}
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-skype-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Skype</span>
                  <h6 className="mb-0">saiyidsarmed_1</h6>
                </div>
                <a
                  href="skype:saiyidsarmed_1?chat"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>

              {/* Address */}
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-map-2-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Address</span>
                  <h6 className="mb-0">
                    7901 4th St N #19639, St. Petersburg, FL 33702, United
                    States
                  </h6>
                </div>
                <a
                  href="https://maps.google.com/?q=7901+4th+St+N+%2319639,+St.+Petersburg,+FL+33702,+United+States"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact2;
