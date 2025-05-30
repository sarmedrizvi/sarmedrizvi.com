"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Contact2 from "@/components/sections/Contact";
import Static2 from "@/components/sections/Static";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, Suspense, useEffect, useState } from "react";

function BlogListContent({ posts }: { posts: any }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams?.get('page')) || 1;
    const [blogsPerPage, setBlogsPerPage] = useState(9);

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 991.98px)").matches) {
                setBlogsPerPage(10);
            } else {
                setBlogsPerPage(9);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalBlogs = posts?.length || 0;
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);

    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const currentBlogs = posts?.slice(startIndex, endIndex) || [];

    const handleNavigation = (blogId: string) => {
        router.push(`/blog/${blogId}`);
    };

    const createPageURL = useCallback(
        (pageNumber: number | string) => {
            const params = new URLSearchParams(searchParams?.toString());
            params.set('page', pageNumber.toString());
            return `/blog?${params.toString()}`;
        },
        [searchParams]
    );

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const leftBound = Math.max(1, currentPage - 1);
            const rightBound = Math.min(totalPages, currentPage + 1);

            if (leftBound > 1) {
                pageNumbers.push(1);
                if (leftBound > 2) {
                    pageNumbers.push('...');
                }
            }

            for (let i = leftBound; i <= rightBound; i++) {
                pageNumbers.push(i);
            }

            if (rightBound < totalPages) {
                if (rightBound < totalPages - 1) {
                    pageNumbers.push('...');
                }
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
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
                                {currentBlogs?.map((post: any) => (
                                    <div
                                        key={post?.id}
                                        className="col-12 col-lg-4 col-md-6"
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
                                                <p className="blog-card__description text-300 fs-7">
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
                                                className={`icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold ${currentPage === 1 ? 'bg-600' : 'bg-dark'}`}
                                                href={createPageURL(currentPage - 1)}
                                                aria-label="Previous"
                                                scroll={false}
                                                prefetch={false}
                                                onClick={(e) => currentPage === 1 && e.preventDefault()}
                                            >
                                                <i className="ri-arrow-left-line" />
                                            </Link>
                                        </li>

                                        {getPageNumbers().map((pageNumber, index) => (
                                            <li className="page-item" key={index}>
                                                {pageNumber === '...' ? (
                                                    <span className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600 py-2">
                                                        ...
                                                    </span>
                                                ) : (
                                                    <Link
                                                        className={`icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold py-2 ${currentPage === pageNumber ? 'bg-dark' : 'bg-600'}`}
                                                        href={createPageURL(pageNumber)}
                                                        scroll={false}
                                                        prefetch={false}
                                                    >
                                                        {pageNumber}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}

                                        <li className="page-item">
                                            <Link
                                                className={`icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold ${currentPage === totalPages ? 'bg-600' : 'bg-dark'}`}
                                                href={createPageURL(currentPage + 1)}
                                                aria-label="Next"
                                                scroll={false}
                                                prefetch={false}
                                                onClick={(e) => currentPage === totalPages && e.preventDefault()}
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

export default function BlogList({ posts }: { posts: any }) {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogListContent posts={posts} />
            </Suspense>
        </>
    );
}