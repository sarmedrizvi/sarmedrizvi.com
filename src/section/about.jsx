import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "../layout/AnimatedProgressProvider";

import AOS from "aos";
AOS.init();

const hero = () => {
  return (
    <div className="v-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              About Me
            </h2>
            <div
              className="space-border"
              data-aos="fade-up"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            ></div>
          </div>
          <div
            className="col-md-8 text-center m-auto"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <p>
              About Software engineer with strong skills in development,
              operations, and lifecycle management. Over three years of
              experience with Full-stack Development i.e React Vue Node, It also
              includes Mobile Development i.e React native.
              <br />
              <br />
              Sarmed goal with his experience is to provide my best service to
              society while working with clients from all around the world, and
              in the future, to develop my skill set by integrating blockchain
              technology.
              <br />
              <br />
              Top-rated seller on Upwork and Level 2 seller on Fiverr.
              <br />
              <br />
              Sarmed worked with some of the biggest clients from the USA, UK,
              Germany, Romania, Norway, Canada and etc.
              <br />
              <br />
              EXPERTISE: - Mobile Apps - Web Apps - Blockchain - AWS
              <br />
              <br />
              INTERESTED IN: - Coding - Interviews - Startups - Products
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={90}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">Javascript</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={85}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">ReactJS</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={70}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">AWS</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={70}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">Blockchain</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
