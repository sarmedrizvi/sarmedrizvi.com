"use client";

import testimonials from "@/data/data";
import Masonry from "react-masonry-css";

export default function MasonryPage() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <div className="section-projects-2 pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
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
                  <span className="gradient-heading d-flex align-items-center">
                    {" "}
                    Testimonial{" "}
                  </span>
                </div>
                <h3>What people are saying</h3>

                {/* Masonry Grid Container */}
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="masonry-item testimonial-card"
                    >
                      <div className="media-container">
                        {testimonial.type === "video" ? (
                          <iframe
                            src={testimonial.videoUrl}
                            title={testimonial.name}
                            allowFullScreen
                            style={{ height: "300px", width: "100%" }}
                          ></iframe>
                        ) : (
                          <img
                            src={testimonial.clientImage}
                            alt={testimonial.name}
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                          />
                        )}
                        <div className="name-overlay">
                          <h5>{testimonial.name}</h5>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>{testimonial.message}</p>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/projects/bg.png"
                alt="zelio"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}