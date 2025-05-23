"use client";

import { useState, useRef, useEffect } from "react";
import { testimonialVideos, testimonialImages } from "@/data/testimonials-data";
import Masonry from "react-masonry-css";

export default function Testimonial() {
  const videoBreakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  const imageBreakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const firstVideoRef = useRef<HTMLVideoElement | null>(null);
  const [firstVideoPlayed, setFirstVideoPlayed] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !firstVideoPlayed && firstVideoRef.current) {
            firstVideoRef.current.muted = true;
            firstVideoRef.current.play();
            setFirstVideoPlayed(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (firstVideoRef.current) {
      observer.observe(firstVideoRef.current);
    }

    return () => {
      if (firstVideoRef.current) {
        observer.unobserve(firstVideoRef.current);
      }
    };
  }, [firstVideoPlayed]);

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
                    <circle cx="2.5" cy={3} r="2.5" fill="#fa5b5b" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">
                    {" "}
                    Testimonial{" "}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 500,
                  padding: '0 0 0.5rem 0'
                }}
                >What people are saying</h3>

                <Masonry
                  breakpointCols={videoBreakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {testimonialVideos.map((testimonial, index) => {
                    const [isPlaying, setIsPlaying] = useState(false);
                    const videoRef = useRef<HTMLVideoElement | null>(null);

                    return (
                      <div
                        key={testimonial.id}
                        className="masonry-item testimonial-card"
                      >
                        <div className="media-container position-relative">
                          <video
                            ref={index === 0 ? firstVideoRef : videoRef}
                            poster={testimonial.thumbnailUrl}
                            controls={index === 0 ? showControls : isPlaying}
                            muted={index === 0 && showControls}
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                            onClick={() => {
                              if (index === 0) {
                                setShowControls(true);
                                if (firstVideoRef.current) {
                                  firstVideoRef.current.muted = false;
                                }
                              }
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

                          {!isPlaying && index !== 0 && (
                            <div
                              className="poster-overlay poster-overlay-class"
                              onClick={() => {
                                if (videoRef.current) {
                                  setIsPlaying(true);
                                  videoRef.current.play();
                                }
                              }}
                            >
                              <div className="autoplay-video-controls" >
                                <h5>{testimonial.name}</h5>
                              </div>

                              <div className="play-button-container">
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