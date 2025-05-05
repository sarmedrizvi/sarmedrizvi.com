import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Hero() {
    return (
        <>
            <section id="about" className="section-hero-2 position-relative pt-130 pb-3">
                <div className="container hero-2">
                    <div className="border border-1 rounded-3">
                        <div className="box-linear-animation position-relative z-1">
                            <div className="row align-items-end py-60">
                                <div className="col-lg-5 ps-lg-5 text-lg-start text-center">
                                    <div className="position-relative mb-lg-0 mb-5 mx-3">
                                        <img
                                            src="assets/imgs/whatsapp/hero-image.png"
                                            alt="profile picture"
                                            className="rounded"
                                        />
                                        <div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
                                            <img
                                                src="https://s3.us-east-1.amazonaws.com/sarmedrizvi.com/SR+Logo.svg"
                                                alt="SR logo"
                                                style={{ width: "80px", height: "80px" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mx-lg-auto col-md-12">
                                    <div className="p-lg-0 p-md-8 p-3">
                                        <div className="text-secondary-2 d-flex align-items-center">
                                            &lt;span&gt;
                                            <div className="text-dark">
                                                <div className="typewriter">
                                                    <h1 className="fs-6 fw-medium">
                                                        Automate Customer Chats with WhatsApp AI
                                                        Agents
                                                    </h1>
                                                </div>
                                            </div>
                                            &lt;/span&gt;
                                        </div>
                                        <h1 className="fs-50 my-3">
                                            Tired of missed leads or replying too late?
                                        </h1>
                                        <p className="mb-6 text-secondary-2">
                                            &lt;p&gt;
                                            <span className="text-dark">
                                                With expertise in building smart WhatsApp automation
                                                flows using
                                            </span>{" "}
                                            <span className="text-secondary-2">Twilio</span>,{" "}
                                            <span className="text-secondary-2">OpenAI GPT</span>,{" "}
                                            <span className="text-secondary-2">LangChain</span>, and{" "}
                                            <span className="text-secondary-2">Retell AI</span>
                                            <span className="text-dark">
                                                ... I help businesses automate replies, qualify
                                                leads, book appointments, and send updates — all
                                                through WhatsApp, 24/7.
                                            </span>
                                            &lt;/p&gt;
                                        </p>
                                        <div className="row">
                                            <div className="col-7">
                                                {/* Carausel Scroll */}
                                                <Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
                                                    <ul className="carouselTicker__list ">
                                                        {/* <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/whatsapp/whatsapp.png"
                                                                    alt="brand"
                                                                    className="rounded"
                                                                />
                                                            </Link>
                                                        </li> */}

                                                        {/* <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/index-2/django-logo.png"
                                                                    alt="brand"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/index-2/javascript-logo.png"
                                                                    alt="brand"
                                                                />
                                                            </Link>
                                                        </li> */}
                                                        <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3 skills-icon"
                                                            >
                                                                <img
                                                                    src="assets/imgs/whatsapp/image-1.png"
                                                                    alt="brand"
                                                                    className="skills-icon rounded"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/whatsapp/image-3.png"
                                                                    alt="brand"
                                                                    className="rounded"
                                                                />
                                                            </Link>
                                                        </li>
                                                        {/* <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/index-2/retell-ai-logo.png"
                                                                    alt="brand"
                                                                />
                                                            </Link>
                                                        </li> */}
                                                        <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/whatsapp/image-4.png"
                                                                    alt="brand"
                                                                    className="rounded"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/whatsapp/image-5.png"
                                                                    alt="brand"
                                                                    className="rounded"
                                                                />
                                                            </Link>
                                                        </li>
                                                        {/* <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/index-2/vapi-logo.webp"
                                                                    alt="brand"
                                                                />
                                                            </Link>
                                                        </li> */}
                                                        <li className="carouselTicker__item">
                                                            <Link
                                                                href="#"
                                                                className="brand-logo icon_60 icon-shape rounded-3"
                                                            >
                                                                <img
                                                                    src="assets/imgs/whatsapp/image-6.png"
                                                                    alt="brand"
                                                                    className="rounded"
                                                                />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Marquee>
                                            </div>
                                            <div className="col-5 d-flex align-items-end">
                                                <span className="fs-6 text-300 mb-2">
                                                    ...and more
                                                </span>
                                            </div>
                                        </div>
                                        <a href="#whatsapp-contact">
                                            <button
                                                type="submit"
                                                className="btn btn-primary-2 rounded-2 mt-5"
                                            >
                                                Try Now
                                                <i className="ri-arrow-right-up-line" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background position-absolute top-0 start-0 w-100 h-100">
                    <img
                        className="bg-w"
                        src="assets/imgs/home-page-2/hero-1/bg.png"
                        alt="background-image"
                    />
                    <img
                        className="bg-d"
                        src="assets/imgs/home-page-2/hero-1/bg-dark.png"
                        alt="bg-image"
                    />
                </div>
            </section>
        </>
    );
}
