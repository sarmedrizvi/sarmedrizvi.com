"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "../../app/whatsapp-automation.css";
const WhatsappAutomationLandingPageForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        industry: "",
        prompt: "",
        leadSource: "website",
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus("");

        try {
            const response = await fetch(
                "https://automations.impleko.ai/webhook/3c254395-9700-4190-8e34-8aca88dac6f5",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setSubmitStatus("We'll get back to you on your email with the information");
                setFormData({
                    name: "",
                    contact: "",
                    email: "",
                    industry: "",
                    prompt: "",
                    leadSource: "website",
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
                id="whatsapp-contact"
                className="section-contact-2 position-relative pb-60 overflow-hidden"
            >
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-5 pb-lg-0 form">
                            <div className="position-relative form-inner">
                                <div className="position-relative z-2">
                                    <h3
                                        className="gradient-heading my-5"
                                        style={{
                                            padding: "20px 0 0 0",
                                            fontSize: "1.9rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        🚀 Try Our WhatsApp Bot Free for 1 Day
                                    </h3>
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
                                                <PhoneInput
                                                    country={"us"}
                                                    value={formData.contact}
                                                    onChange={(phone) =>
                                                        setFormData({ ...formData, contact: phone })
                                                    }
                                                    inputClass="form-control bg-3 border border-1 rounded-3"
                                                    inputProps={{
                                                        name: "contact",
                                                        required: true,
                                                    }}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
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
                                                <select
                                                    className="form-control bg-3 border border-1 rounded-3"
                                                    id="industry"
                                                    name="industry"
                                                    aria-label="industry"
                                                    value={formData.industry}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="">Select Industry</option>
                                                    <option value="Technology">Technology</option>
                                                    <option value="Healthcare">Healthcare</option>
                                                    <option value="Finance">Finance</option>
                                                    <option value="Education">Education</option>
                                                    <option value="Retail">Retail</option>
                                                    <option value="Manufacturing">
                                                        Manufacturing
                                                    </option>
                                                    <option value="Real Estate">Real Estate</option>
                                                    <option value="Transportation">
                                                        Transportation
                                                    </option>
                                                    <option value="Hospitality">Hospitality</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <textarea
                                                    className="form-control bg-3 border border-1 rounded-3"
                                                    id="prompt"
                                                    name="prompt"
                                                    placeholder="Prompt you want to use for the bot"
                                                    aria-label="With textarea"
                                                    value={formData.prompt}
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
                                                    {isSubmitting ? "Sending..." : "Start Now"}
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhatsappAutomationLandingPageForm;
