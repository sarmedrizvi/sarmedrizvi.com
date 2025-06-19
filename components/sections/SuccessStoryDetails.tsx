// components/sections/SuccessStoryDetails.tsx

import Image from "next/image";


export default function SuccessStoryDetails({ story }: { story: any }) {
    return (

        <section className="section-details pt-130 pb-100 ">
            <div className="container">
                <div className="row gx-5">
                    {/* LEFT */}
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="p-4 rounded-4">
                            <h5 className="text-uppercase mb-4 text-warning">Results</h5>
                            <ul className="list-unstyled fs-6">
                                {story.results.map((item: string, i: number) => (
                                    <li className="mb-2" key={i}>✅ {item}</li>
                                ))}
                            </ul>

                            <div className="bg-danger  p-3 rounded mt-4 text-left">
                                <h3>Get Human-Like AI Shopping</h3>
                                <h6 className="small">Learn how our AI can assist and personalize your buyer journey.</h6>
                                <button className="btn btn-light text-danger mt-2">Free Trial</button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-8">
                        <div className="  mb-2">
                            <h4 className="text-linear-4 text-uppercase">Success Story</h4>
                            <h1 className="font-bold text-bold mb-3">{story.title}</h1>
                        </div>
                        <div className=" mb-3">
                            <h4 className="text-linear-4 text-uppercase">Key Use Cases:</h4>

                            {story.useCases.map((useCase: string, idx: number) => (
                                <div key={idx} className="text-dark small me-2">
                                    {useCase}
                                </div>
                            ))}
                        </div>

                        <div className="box-linear-animation mb-4">
                            <div className="flex gap-4 p-6 mt-8">
                                <span className="white-btn">AI Agent</span>
                                <span className="white-btn">E commerce</span>
                                <span className="white-btn">Shopping</span>


                                <h6 className="">Euro Paper is a leading manufacturer of cash register paper trusted by 50,000 clients for exceptional quality, reliability, and sustainable solutions.</h6>
                            </div>

                            <Image
                                src={story.detailsimage}
                                alt="Case Study Visual"
                                width={900}
                                height={500}
                                className="img-fluid rounded"
                            />
                        </div>

                        <h4 className="text-linear-4 text-uppercase ">Overview</h4>
                        <p className="text-300">{story.overview}</p>

                        <h4 className="text-linear-4 text-uppercase  mt-4">Problem</h4>
                        <p className="text-300">{story.problem}</p>

                        <h4 className="text-linear-4 text-uppercase  mt-4">Solution</h4>
                        <p className="text-300">{story.solution}</p>

                        <div className="bg-light text-dark p-4 rounded-4 mt-5">
                            <blockquote className="blockquote mb-0">
                                <p>“{story.testimonial.quote}”</p>
                                <footer className="blockquote-footer mt-2">
                                    {story.testimonial.author}
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
