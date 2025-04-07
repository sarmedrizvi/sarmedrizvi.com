"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Contact2 from "@/components/sections/Contact2";
import Static2 from "@/components/sections/Static2";
import { useRouter } from "next/navigation";

export default function BlogList({ posts }: any) {
    const router = useRouter();
    const blogPosts = posts
    console.log("blogPosts", blogPosts);
    const totalPages = 3;

    const handleNavigation = (blogId: string) => {
        router.push(`/blog/${blogId}`);
    };

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <div>
                    <section className="section-blog-2 pt-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <h3 className="ds-3 mt-3 mb-4 text-300">
                                            Explore the{" "}
                                            <span className="text-dark">
                                                insights and trends shaping
                                            </span>{" "}
                                            our industry
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            Discover key insights and emerging trends shaping the
                                            future of design: a detailed <br />
                                            examination of how these innovations are reshaping our
                                            industry
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-8">
                                {blogPosts?.map((post: any) => (
                                    <div
                                        key={post?.id}
                                        className="col-lg-4"
                                        onClick={() => handleNavigation(post?.id)}
                                    >
                                        <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
                                            <div className="blog-card__image position-relative">
                                                <div className="zoom-img rounded-2 overflow-hidden">
                                                    <img
                                                        className="object-fit-cover"
                                                        src={post?.image}
                                                        alt="blog-image "
                                                    />
                                                    <Link
                                                        className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2"
                                                        href={post?.link}
                                                    >
                                                        {post?.category}
                                                    </Link>

                                                    <Link
                                                        href={post?.link}
                                                        className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle"
                                                    >
                                                        <i className="ri-arrow-right-up-line" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="blog-card__content position-relative text-center mt-4">
                                                <span className="blog-card__date fs-7">
                                                    {post?.date} • {post?.read_time}
                                                </span>
                                                <h6 className="blog-card__title mt-2 line-clamp-2">
                                                    {post?.title}
                                                </h6>
                                                <p className="blog-card__description fs-7">
                                                    {post?.description}
                                                </p>
                                                <Link
                                                    href={post?.link}
                                                    className="link-overlay position-absolute top-0 start-0 w-100 h-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className="container">
                        <div className="row py-120">
                            <div className="d-flex justify-content-center align-items-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination gap-2">
                                        <li className="page-item">
                                            <Link
                                                className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600"
                                                href="/blog"
                                                aria-label="Previous"
                                            >
                                                <i className="ri-arrow-left-line" />
                                            </Link>
                                        </li>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                            (pageNumber) => (
                                                <li className="page-item" key={pageNumber}>
                                                    <Link
                                                        className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600 py-2"
                                                        href="/blog"
                                                    >
                                                        {pageNumber}
                                                    </Link>
                                                </li>
                                            )
                                        )}

                                        <li className="page-item">
                                            <Link
                                                className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600"
                                                href="/blog"
                                                aria-label="Next"
                                            >
                                                <i className="ri-arrow-right-line" />
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <Static2 />
                    <Contact2 />
                </div>
            </Layout>
        </>
    );
}
