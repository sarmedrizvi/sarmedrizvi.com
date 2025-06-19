'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { caseStudies } from '@/data/case-studies-data'
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'

export default function CaseStudySlider() {
    return (

<section id="case-study">
        <div className="case-study-section py-5">

            <div className="text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
                        <circle cx="2.5" cy={3} r="2.5" fill="#fa5b5b" />
                    </svg>
                    <span className="text-linear-4 d-flex align-items-center">Case Studies / Success Stories </span>
                </div>
                <h3
                    style={{
                        fontSize: '2rem',
                        fontWeight: 500,
                    }}
                    className='mt-4 mb-8'
                >Real Results with <span className="text-linear-4">{'{'}AI-Powered{'}'}</span> Messaging
                </h3>
            </div>
            <div className="container">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    navigation={{
                        nextEl: '.custom-swiper-next',
                        prevEl: '.custom-swiper-prev',
                    }}
                    className="position-relative"
                >
                    {caseStudies.map((study, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-dark text-white case-study-border-radius overflow-hidden d-flex flex-column flex-md-row">

                                {/* LEFT: Content - 60% */}
                                <div className="p-4 p-md-5 flex-grow-1 d-flex flex-column justify-between" style={{ flexBasis: '60%' }}>
                                    <div>
                                        <p className="text-danger my-2 fs-3">Case Studies</p>
                                        <div className="d-flex gap-3 mt-2 mb-4">
                                            <span className="text-white text-dark fs-3">
                                                Sales Qualification {" "} | {" "} Demo Scheduling
                                            </span>
                                        </div>
                                        <hr className="border-secondary" />
                                        <p className='fw-light text-white text-dark my-8 fs-5'>{study.description}</p>
                                        <hr className="border-secondary" />
                                    </div>

                                    {/* Logo and Info */}
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-3 w-100">
                                        <span>
                                            <img src="/assets/imgs/case-study/telehealth-logo.svg" alt="Telehealth Logo" />
                                        </span>
                                        <div className="d-flex gap-4 flex-wrap align-items-center">
                                            <span className="text-dark d-flex align-items-center gap-2">
                                                <img src="/assets/imgs/case-study/pin-location.svg" alt="Location Icon" />
                                                {study.location}
                                            </span>
                                            <span className="text-dark d-flex align-items-center gap-2">
                                                <img src="/assets/imgs/case-study/field-icon.svg" alt="Field Icon" />
                                                {study.field}
                                            </span>
                                            <span className="text-dark d-flex align-items-center gap-2">
                                                <img src="/assets/imgs/case-study/people-icon.svg" alt="People Icon" />
                                                150+
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                {/* CENTER: Stats - 10% */}
                                <div
                                    className="bg-danger text-white d-flex flex-column justify-content-center  gap-6 text-center"
                                    style={{ flexBasis: '10%', minWidth: '100px' }}
                                >
                                    {study.stats.map((stat, j) => (
                                        <div key={j}>
                                            <p className="m-2 fw-bold text-dark fs-1">{stat.value}</p> {/* Increased font size */}
                                            <p className="m-1 text-dark small">{stat.label}</p>
                                        </div>

                                    ))}
                                </div>

                                {/* RIGHT: Image - 30% (Remaining 40% after left 60% and middle 10%) */}
                                <div className="d-none d-md-block" style={{ flexBasis: '30%' }}>
                                    <img
                                        src={study.cardimage}
                                        alt={study.title}
                                        className="h-100 object-fit-cover"
                                        style={{
                                            maxWidth: '100%',
                                            height: '100%',
                                            borderTopRightRadius: '1rem',
                                            borderBottomRightRadius: '1rem',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <button className="custom-swiper-prev btn btn-danger rounded-circle">
                            <i className="bi bi-arrow-left"></i>
                        </button>
                        <button className="custom-swiper-next btn btn-danger rounded-circle">
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </Swiper>
                <div className="col-lg-auto mx-auto">
                    <Link
                        href="/case-study"
                        className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto"
                    >
                        View more
                        <i className="ri-arrow-right-up-line" />
                    </Link>
                </div>
            </div>


        </div>
        </section>
    )
}
