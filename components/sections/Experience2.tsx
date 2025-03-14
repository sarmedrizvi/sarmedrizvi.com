import Link from "next/link";

export default function Experience2() {
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
                    padding: '8px 0 8px 0',
                    fontSize: '2rem',
                    fontWeight: 500,
                  }}>
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
                      <Link
                        href="https://www.linkedin.com/company/impleko/"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center flex-grow-1 experience-logo gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/impleko-logo.jpg"
                            alt="Impleko"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1"
                              style={{
                                fontSize: '1.5rem',
                                fontWeight: 900,
                                color: 'white',
                              }}>
                              Impleko</h5>
                            <span className="text-300 text-nowrap">
                              2024 - Present
                            </span>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/inkcoinc/"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center experience-logo gap-2 flex-grow-1">
                          <img
                            src="assets/imgs/home-page-2/experience/ink-logo.png"
                            alt="INK"
                          />
                          <div className="d-flex flex-column ms-2 w-auto">
                            <h5 className="mb-1"
                              style={{
                                fontSize: '1.5rem',
                                fontWeight: 900,
                                color: 'white',
                              }}>INK</h5>
                            <span className="text-300 text-nowrap">2022 - 2023</span>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/serverpoint-com/"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center experience-logo gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/server-point-logo.jpeg"
                            alt="ServerPoint"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1"
                              style={{
                                fontSize: '1.5rem',
                                fontWeight: 900,
                                color: 'white',
                              }}>ServerPoint</h5>
                            <span className="text-300 text-nowrap">2021 - 2022</span>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/innovationinsight/"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center experience-logo gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/innovation-insight.jpeg"
                            alt="Innovation Insight"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1"
                              style={{
                                fontSize: '1.5rem',
                                fontWeight: 900,
                                color: 'white',
                              }}>Innovation Insight</h5>
                            <span className="text-300 text-nowrap">2021 - 2022</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <ul className="mt-4">
                      <h4 className="gradient-heading text-sm"
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 900,
                        }}>
                        Impleko</h4>
                      <h6 >Co-Founder (2024 - Present)</h6>
                      <li className="text-dark mb-3">
                        Co-founding and driving innovation as a leader in
                        digital transformation and AI-driven solutions.
                      </li>

                      <h4 className="gradient-heading text-sm"
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 900,
                        }}>INK</h4>
                      <h6 >
                        Development Team Lead (Feb 2023 - Oct 2023)
                      </h6>
                      <li className="text-dark mb-3">
                        Directed development teams and ensured efficient
                        delivery of projects.
                      </li>
                      <li className="text-dark mb-3">
                        Skills:{" "}
                        <span className="text-secondary-2">
                          Development Design
                        </span>
                        ,{" "}
                        <span className="text-secondary-2">IT Leadership</span>,{" "}
                        <span className="text-secondary-2">
                          Team Management
                        </span>
                      </li>
                      <h6 >
                        React Developer (Oct 2022 - Feb 2023)
                      </h6>
                      <li className="text-dark mb-3">
                        Built web applications with React and Node.js, utilizing
                        TypeScript for efficient and scalable codebases.
                      </li>
                      <li className="text-dark mb-3">
                        Skills:{" "}
                        <span className="text-secondary-2">Node.js</span>,{" "}
                        <span className="text-secondary-2">TypeScript</span>,{" "}
                        <span className="text-secondary-2">
                          Web Application Development
                        </span>
                      </li>

                      <h4 className="gradient-heading experience-heading"
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 900,
                        }}
                      >ServerPoint
                      </h4>
                      <h6 >
                        Project Manager (May 2021 - Dec 2023)
                      </h6>
                      <li className="text-dark mb-3">
                        Managed multiple web development projects using hybrid
                        Agile and Waterfall methodologies.
                      </li>
                      <li className="text-dark mb-3">
                        Utilized Asana and Jira for project tracking, ensuring
                        timely delivery within budget.
                      </li>
                      <li className="text-dark mb-3">
                        Skills:{" "}
                        <span className="text-secondary-2">
                          Product Development
                        </span>
                        ,{" "}
                        <span className="text-secondary-2">
                          Project Management
                        </span>
                        , <span className="text-secondary-2">Asana</span>,{" "}
                        <span className="text-secondary-2">Jira</span>,{" "}
                        <span className="text-secondary-2">
                          Software Development
                        </span>
                      </li>

                      <h4 className="gradient-heading"
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 900,
                        }}>Innovation Insight</h4>
                      <h6 >MERN Stack Lead</h6>
                      <li className="text-dark mb-3">
                        Led a team of developers to design and build web
                        applications using React, Node.js, MongoDB and
                        Express.js.
                      </li>
                      <li className="text-dark mb-3">
                        Documented code, APIs, and technical specifications to
                        ensure seamless knowledge transfer.
                      </li>
                      <li className="text-dark mb-3">
                        Delivered high-quality, scalable applications leveraging
                        the MERN stack.
                      </li>
                      <li className="text-dark mb-3">
                        Skills:{" "}
                        <span className="text-secondary-2">Express.js</span>,{" "}
                        <span className="text-secondary-2">
                          Object-Oriented Programming (OOP)
                        </span>
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"

                      >
                        React.js
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        Angular.js
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        Node.js
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        Express.js
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        TailwindCSS
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        MySQL
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        PostgreSQL
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        MongoDB
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        Pinecone{" "}
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        Claude AI
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        Chat GPT
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        Twillo
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        VAPI
                      </span>
                      <span

                        className="text-300 border border-1 px-3 py-1 cursor-pointer"
                      >
                        Retell AI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="zelio"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
