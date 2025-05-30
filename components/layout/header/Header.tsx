import ThemeSwitch from "@/components/elements/ThemeSwitch";
import Link from "next/link";
import OffCanvas from "../OffCanvas";
import MobileMenu from "../MobileMenu";
import { navLinks, socialLinks } from "@/data/header-data";

export default function Header({
    scroll,
    isMobileMenu,
    handleMobileMenu,
    isOffCanvas,
    handleOffCanvas,
    isNavLinks,
}: any) {
    return (
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
                                <Link href="/" passHref legacyBehavior>
                                    <a className="d-flex align-items-center text-decoration-none">
                                        <img
                                            src="https://s3.us-east-1.amazonaws.com/sarmedrizvi.com/SR+Logo.svg"
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
                                    style={{ fontFamily: "var(--dmMono)" }}
                                >
                                    {isNavLinks ? (
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            {navLinks.map(({ href, label }) => (
                                                <li key={href} className="nav-item">
                                                    <Link className="nav-link" href={href}>
                                                        {label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                            </div>
                            <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
                                <div className="d-md-flex d-none gap-3">
                                    {socialLinks.map(({ href, iconClass }) => (
                                        <Link key={href} href={href}>
                                            <i className={`${iconClass} navbar-social fs-18`} />
                                        </Link>
                                    ))}
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

                <OffCanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            </div>
        </header>
    );
}
