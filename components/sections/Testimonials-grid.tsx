"use client";

import { useState, useRef } from "react";
import { testimonialVideos, testimonialImages } from "@/data/data";
import Masonry from "react-masonry-css";

export default function MasonryPage() {
  // Breakpoints for testimonialVideos (default: 2 columns)
  const videoBreakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  // Breakpoints for testimonialImages (default: 3 columns)
  const imageBreakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <div className="section-projects-2 pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 position-relative z-1 custom-padding">
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
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  padding: '0 0 1rem 0'
                }}
                >What people are saying</h3>

                <Masonry
                  breakpointCols={videoBreakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {testimonialVideos.map((testimonial) => {
                    const [isPlaying, setIsPlaying] = useState(false); 
                    const videoRef = useRef<HTMLVideoElement | null>(null); 

                    return (
                      <div
                        key={testimonial.id}
                        className="masonry-item testimonial-card"
                      >
                        <div className="media-container position-relative">
                          <video
                            ref={videoRef}
                            poster={testimonial.thumbnailUrl} 
                            controls={isPlaying} 
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                            onClick={() => {
                              if (!isPlaying && videoRef.current) { 
                                setIsPlaying(true);
                                videoRef.current.play(); 
                              }
                            }}
                            onEnded={() => setIsPlaying(false)}
                          >
                            <source src={testimonial.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                          {!isPlaying && (
                            <div
                              className="poster-overlay"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                if (videoRef.current) { 
                                  setIsPlaying(true);
                                  videoRef.current.play(); 
                                }
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: '6px',
                                  right: "0px",
                                  fontSize: "1.2rem",
                                  width: '100%',
                                  background: 'rgba(0, 0, 0, 0.25)',
                                  color: 'white',
                                  padding: '6px 8px',
                                  textAlign: 'right',
                                }}
                              >
                                {testimonial.name}
                              </div>

                              <div
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48"
                                  height="48"
                                  viewBox="0 0 24 24"
                                  fill="#fff"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="testimonial-content">
                          <p className="text-300">{testimonial.message}</p>
                        </div>
                      </div>
                    );
                  })}
                </Masonry>

                {/* Masonry Grid for Images */}
                <Masonry
                  breakpointCols={imageBreakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {testimonialImages.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="masonry-item testimonial-card"
                    >
                      <div className="media-container">
                        <img
                          src={testimonial.clientImage}
                          alt={testimonial.name}
                          style={{ width: "100%", height: "300px", objectFit: "cover" }}
                        />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}