// components/TestimonialCard.jsx
"use client";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      {testimonial.type === "video" ? (
        <div className="video-container">
          <iframe
            src={testimonial.videoUrl}
            title={testimonial.name}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img
          src={testimonial.clientImage}
          alt={testimonial.name}
          className="client-image"
        />
      )}
      <div className="testimonial-content">
        <h5>{testimonial.name}</h5>
        <p>{testimonial.message}</p>
      </div>
    </div>
  );
}