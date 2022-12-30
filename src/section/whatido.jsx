import React from "react";
import AOS from "aos";
AOS.init();

const whatido = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 text-center"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <h2>What I Do</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="spacer-single"></div>
      <div className="row">
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_genius id-color-2"></i>
              <div className="text">
                <h3>UI UX</h3>
                My primary goal as a UI/UX designer is to create intuitive and
                engaging user experiences for websites and apps. I create
                digital interfaces that fulfil the needs and goals of users by
                combining user research, wireframing, prototyping, and design
                principles. Whether I'm developing a new product or refining an
                existing one, my goal is to provide the user with a seamless and
                delightful experience.
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_tools id-color-2"></i>
              <div className="text">
                <h3>Development Engineer</h3>
                As a software development engineer, I am skilled in designing,
                building, and maintaining high-quality software systems. I have
                a strong foundation in computer science principles and a proven
                track record of delivering complex software projects on time and
                to specification. Whether I am working on a new application or
                improving an existing one, I am dedicated to delivering robust,
                scalable, and maintainable solutions for my clients.
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_camera_alt id-color-2"></i>
              <div className="text">
                <h3>DevOps Engineer</h3>
                As a DevOps engineer, I am skilled in streamlining the
                development and deployment process for software applications. I
                use a combination of automation tools and best practices to
                ensure that code is delivered quickly and safely to production
                environments. I am also experienced in maintaining and
                optimizing infrastructure, monitoring systems, and
                troubleshooting issues. My goal is to enable my clients to
                deliver high-quality software at scale and with minimal
                downtime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whatido;
