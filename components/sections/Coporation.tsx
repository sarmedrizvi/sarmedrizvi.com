import Link from 'next/link'

export default function Coporation() {
	return (
		<>
			<section className="section-coporation">
				<div className="container pt-5">
					<div className="row">
						<div className="col-lg-8">
							<div className="rounded-3 border border-1 position-relative overflow-hidden">
								<div className="box-linear-animation">
									<div className=" p-md-6  custom-padding">
										<div className="d-flex align-items-center">
											<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
												<circle cx="2.5" cy={3} r="2.5" fill="#fa5b5b" />
											</svg>
											<span className="text-linear-4 d-flex align-items-center"> Cooperation </span>
										</div>
										<h3 className="fw-medium pb-120"
											style={{
												fontSize: '2rem',
												fontWeight: 500
											}}>
											{" "}
											More than +162 <span className="text-300">companies <br /></span> trusted <span className="text-300">worldwide_</span>
										</h3>

										<div className="d-flex flex-column flex-md-row align-items-start  gap-4">
											<div>
												<div className="circle-1 position-relative z-0">
													<div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
														<div className="position-absolute top-50 start-50 translate-middle z-2">
															<img className="w-100 h-100 rounded-circle" src="assets/imgs/home-page-2/hero-1/profile-pic-removebg.png" alt="profile picture" />
															<svg className="text-primary-2 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 5 6" fill="none">
																<circle cx="2.5" cy={3} r="2.5" fill="#fa5b5b" />
															</svg>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex flex-column gap-2 py-3">
												<Link href="skype:saiyidsarmed_1?chat">
													<i className="ri-team-fill reach-out" />
													<span className="text-300">{" "}<span className="text-secondary-2">saiyidsarmed_1</span></span>
												</Link>
												<Link href="tel:+19042436176">
													<i className="ri-phone-fill reach-out" />
													<span className="text-300">{" "}<span className="text-secondary-2">+1-904-243-6176</span></span>
												</Link>
												<Link href="mailto:sarmed@impleko.com">
													<i className="ri-mail-fill reach-out" />
													<span className="text-300"> {" "}<span className="text-secondary-2">sarmed@impleko.com</span></span>
												</Link>
											</div>
										</div>
									</div>
									<div className="position-absolute d-none d-md-block decorate">
										<div className="rotateme">
											<div className="circle-1-1" />
											<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
												<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#ff7676" />
												</svg>
											</div>
											<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
												<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="#ff7676">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#ff7676" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 pt-lg-0 pt-5">
							<div className="bg-3 rounded-3 border border-1 p-md-6 position-relative h-100 overflow-hidden custom-padding">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#fa5b5b" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Git Journaling </span>
								</div>
								<div className="h-100 position-relative">
									<ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">15 Dec:</p>
												<span className="text-dark">OpenAI-Powered-Voice-Agent-for-Call-Centers</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">05 Nov:</p>
												<span className="text-dark">AI-Agent-for-Real-Estate-Lead-Generation</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">20 Oct:</p>
												<span className="text-dark">Chatbot-with-GPT4o-and-Pinecone-for-Medicine-Suggestions</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">08 Sep:</p>
												<span className="text-dark">Multi-Channel-AI-Agent-for-Customer-Support</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">01 Aug:</p>
												<span className="text-dark">Real-Time-Call-Assistant-using-OpenAI-and-Twilio</span>
											</div>
										</li>
									</ul>
									<div className="line-left position-absolute border-start z-0" />
								</div>
								<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
							</div>
						</div>
					</div>
				</div>
			</section>

		</>

	)
}
