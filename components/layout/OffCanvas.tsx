import Link from "next/link";

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
  return (
    <>
      <div className={`offCanvas__info ${isOffCanvas ? "active" : ""}`}>
        <div
          className="offCanvas__close-icon menu-close"
          onClick={handleOffCanvas}
        >
          <button>
            <i className="ri-close-line" />
          </button>
        </div>
        <div className="offCanvas__logo mb-5">
          <h3 className="mb-0">Get in touch</h3>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <p className="fs-6 fw-medium text-200 mb-5">
              I'm always excited to take on new projects and collaborate with
              innovative minds.
            </p>
            <div className="mb-3">
              <span className="text-400 fs-5">Phone Number</span>
              <p className="mb-0">
                <a
                  href="tel:+19042436176"
                  className="text-decoration-none text-dark"
                >
                  +1-904-243-6176
                </a>
              </p>
            </div>

            <div className="mb-3">
              <span className="text-400 fs-5">Email</span>
              <p className="mb-0">
                <a
                  href="mailto:sarmed@impleko.com"
                  className="text-decoration-none text-dark"
                >
                  sarmed@impleko.com
                </a>
              </p>
            </div>

            <div className="mb-3">
              <span className="text-400 fs-5">Skype</span>
              <p className="mb-0">
                <a
                  href="skype:saiyidsarmed_1?chat"
                  className="text-decoration-none text-dark"
                >
                  saiyidsarmed_1
                </a>
              </p>
            </div>
            <div className="mb-3">
              <span className="text-400 fs-5">Address</span>
              <p className="mb-0">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7901+4th+St+N+%2319639,+St.+Petersburg,+FL+33702,+United+States"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  7901 4th St N #19639, St. Petersburg, FL 33702, United States
                </a>
              </p>
            </div>
          </div>
          <div className="contact-list">
            <p className="text-400 fs-5 mb-2">Social</p>
            <div className="d-md-flex d-none gap-3">
              <Link href="https://www.linkedin.com/in/sarmedrizvi/">
                <i className="ri-linkedin-fill fs-18 text-dark reach-out social-media-icons" />
              </Link>
              <Link href="https://github.com/sarmedrizvi">
                <i className="ri-github-fill fs-18 text-dark reach-out social-media-icons" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offCanvas__overly ${isOffCanvas ? "active" : ""}`}
        onClick={handleOffCanvas}
      />
    </>
  );
}
