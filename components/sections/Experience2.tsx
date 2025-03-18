"use client";
import { useState } from "react";
import { experienceData } from "@/data/experience-data";
import exp from "constants";

export default function Experience2() {
  const [activeCompany, setActiveCompany] = useState("impleko");

  return (
    <>
      <section id="portfolio" className="section-experience pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 position-relative custom-padding z-1">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-primary-2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={6}
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle cx="2.5" cy={3} r="2.5" fill="#69eabb" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">
                    {" "}
                    Expericence{" "}
                  </span>
                </div>
                <h3
                  style={{
                    padding: "8px 0 8px 0",
                    fontSize: "2rem",
                    fontWeight: 500,
                  }}
                >
                  +8 <span className="text-300"> years of </span>
                  passion{" "}
                  <span className="text-300">
                    for <br />
                    programming techniques
                  </span>
                </h3>

                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      {experienceData.map((exp) => (
                        <div
                          key={exp.id}
                          className={`technology border border-1 rounded-3 p-3 ${activeCompany === exp.id ? "active" : ""
                            }`}
                          onClick={() => setActiveCompany(exp.id)}
                          style={{
                            background: activeCompany === exp.id ? "linear-gradient(45deg, #268568 60%, #69eabb)" : "transparent",
                            cursor: "pointer",
                            padding: "10px",
                            borderRadius: "5px",
                          }}
                        >
                          <div className="d-flex align-items-center gap-2 experience-logo">
                            <img src={exp.logo} alt={exp.company} />
                            <div className="d-flex flex-column ms-2">
                              <h4 className="mb-1">{exp.company}</h4>
                              <span className="text-300 text-dark space-nowrap">{exp.years}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    {experienceData.map(
                      (exp) =>
                        activeCompany === exp.id && (
                          <>
                            <div key={exp.id} id={exp.id}>
                              <h4 className="text-linear-4">{exp.title}</h4>
                              <ul className="mt-4">
                                {exp.description.map((desc, index) => (
                                  <li key={index} className="text-dark mb-3">
                                    {desc}
                                  </li>
                                ))}
                              </ul>

                              <h4 className="text-linear-4">{exp.title2}</h4>
                              <ul className="mt-4">
                                {exp.description2.map((desc, index) => (
                                  <li key={index} className="text-dark mb-3">
                                    {desc}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                              {exp.skills?.map((skill, index) => (
                                <span
                                  key={index}
                                  className="text-300 border border-1 px-3 py-1 cursor-pointer"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </>
                        )
                    )}


                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="grid-background"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}