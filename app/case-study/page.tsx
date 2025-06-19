import React from "react";
import Layout from "@/components/layout/Layout";
import Contact2 from "@/components/sections/Contact";
import AllCaseStudies from "@/components/sections/AllCaseStudy";
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

const CaseStudyPage = async () => {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <div className="pt-150">
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-center">
                            <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
                                <circle cx="2.5" cy={3} r="2.5" fill="#fa5b5b" />
                            </svg>
                            <span className="text-linear-4 d-flex align-items-center">Case Studies / Success Stories </span>
                        </div>
                        <div className="col-lg-8 mx-lg-auto mb-lg-0">
                            <div className="text-center">

                                <h1 className="ds-3 my-3 text-dark">
                                    {" "} Real Results with {" "}
                                    <span className="text-linear-4">
                                        {'{'}AI Powered{'}'}
                                    </span>
                                    {" "} Messaging
                                </h1>

                                <p className="text-300 fs-5 mb-0">
                                    Each case study in this section showcases how I approached real-world challenges, crafted tailored solutions, and delivered meaningful results. From concept to execution, these projects reflect my problem-solving mindset, technical skills, and commitment to creating impactful digital experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <AllCaseStudies />
                </div>

                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 mx-auto overflow-hidden">
                            {/* Carausel Scroll */}
                            <Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
                                <ul className="carouselTicker__list m-0">
                                    <li className="carouselTicker__item mt-6">
                                        <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                                            <img src="assets/imgs/case-study/shopify.svg" alt="shopify" />
                                        </Link>
                                    </li>
                                    <li className="carouselTicker__item mt-6">
                                        <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                                            <img src="assets/imgs/case-study/nestle.svg" alt="nestle" />
                                        </Link>
                                    </li>
                                    <li className="carouselTicker__item mt-6">
                                        <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                                            <img src="assets/imgs/case-study/coursera.svg" alt="coursera" />
                                        </Link>
                                    </li>
                                    <li className="carouselTicker__item mt-6">
                                        <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                                            <img src="assets/imgs/case-study/telehealth.svg" alt="telehealth" />
                                        </Link>
                                    </li>
                                    <li className="carouselTicker__item mt-6">
                                        <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                                            <img src="assets/imgs/case-study/kellerWilliams.svg" alt="kellerWilliams" />
                                        </Link>
                                    </li>
                                    <li className="carouselTicker__item mt-6">
                                        <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                                            <img src="assets/imgs/case-study/booking-com.svg" alt="booking.com" />
                                        </Link>
                                    </li>
                                </ul>
                            </Marquee>
                        </div>
                    </div>
                </div>
                <Contact2 />
            </Layout>
        </>
    );
};

export default CaseStudyPage;
