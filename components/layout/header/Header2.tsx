import ThemeSwitch from "@/components/elements/ThemeSwitch";
import Link from "next/link";
import OffCanvas from "../OffCanvas";
import MobileMenu from "../MobileMenu";

export default function Header2({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isOffCanvas,
  handleOffCanvas,
}: any) {
  return (
    <>
      <header>
        <div className="container position-relative">
          <div className="position-relative">
            <nav className="navbar navbar-expand-lg navbar-home-2 flex-nowrap z-999 p-0 border border-1 rounded-3">
              <a
                className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex"
                data-bs-target=".offCanvas__info"
                aria-controls="offCanvas__info"
                onClick={handleOffCanvas}
              >
                <i className="ri-menu-2-line" />
              </a>
              <div className="container py-3 px-4">
                <div className="navbar-brand d-flex main-logo align-items-center">
                  <Link href="https://sarmedrizvi.com" passHref legacyBehavior>
                    <a className="d-flex align-items-center text-decoration-none">
                      <img
                        src="https://s3.us-east-1.amazonaws.com/sarmedrizvi.com/dark-theme-logo.svg"
                        alt="SR logo"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <span className="fs-4 ms-2">Sarmed.dev</span>
                    </a>
                  </Link>
                </div>
                <div className="d-none d-lg-flex">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    style={{
                      fontFamily: "var(--dmMono)",
                    }}
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" href="https://sarmedrizvi.com#about">
                          About me
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="https://sarmedrizvi.com#resume">
                          Resume
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="https://sarmedrizvi.com#services">
                          Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="https://sarmedrizvi.com#portfolio">
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="https://sarmedrizvi.com#blogs">
                          Blogs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="https://sarmedrizvi.com#contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
                  <div className="d-md-flex d-none gap-3">
                    <Link href="https://www.linkedin.com/in/sarmedrizvi/">
                      <i className="ri-linkedin-fill navbar-social fs-18 " />
                    </Link>
                    <Link href="https://github.com/sarmedrizvi">
                      <i className="ri-github-fill fs-18 " />
                    </Link>
                  </div>
                  <div
                    className="burger-icon burger-icon-white border rounded-3"
                    onClick={handleMobileMenu}
                  >
                    <span className="burger-icon-top" />
                    <span className="burger-icon-mid" />
                    <span className="burger-icon-bottom" />
                  </div>
                </div>
              </div>
              <ThemeSwitch />
            </nav>
          </div>
          {/* offCanvas-menu */}
          <OffCanvas
            isOffCanvas={isOffCanvas}
            handleOffCanvas={handleOffCanvas}
          />
          <MobileMenu
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
          />
        </div>
      </header>
    </>
  );
}
