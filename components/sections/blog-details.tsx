"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Contact2 from "@/components/sections/Contact2";
import Static2 from "@/components/sections/Static2";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";
import { fetchBlogPostById } from "@/services/blog";

export default function BlogDetails({post}:any) {
  const params = useParams();
  const id = params?.id as string;

  const formattedDate = post
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <Layout headerStyle={2} footerStyle={2}>
      <Head>
        <title>{post?.title || "Blog Post"} | Your Site Name</title>
        <meta name="description" content={post?.description || ""} />
        <meta property="og:title" content={post?.title || ""} />
        <meta property="og:description" content={post?.description || ""} />
        <meta property="og:image" content={post?.image || ""} />
      </Head>

      <section className="section-details pt-130 pb-100">
        <div className="container">
          { post ? (
            <div className="row blog-details-images">
              <img src={post.image} alt={post.title} className="d-flex w-100" />

              {/* Meta Info: Category, Read Time, Date */}
              <div className="d-flex justify-content-end">
                <div className="col-lg-2"></div>
                <div className="col-lg-10 mx-lg-auto my-6">
                  <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                    <Link
                      href={`/blog/category/${post.category}`}
                      className="btn btn-gradient text-uppercase align-self-lg-start mb-2 mb-lg-0"
                    >
                      {post.category}
                    </Link>
                    <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-4">
                      <div className="d-flex align-items-center">
                        <i className="ri-time-line fs-6" />
                        <span className="ms-2 fs-6">
                          {post.read_time || "3 mins"} read
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-calendar-schedule-line fs-6" />
                        <span className="ms-2 fs-6">{formattedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="col-lg-12 mx-lg-auto mt-4">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-2">
                    <div className="d-none d-lg-flex flex-column gap-3 pt-3">
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-facebook-circle-fill fs-18 text-linear-4" />
                      </Link>
                      <Link
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}&text=${encodeURIComponent(post.title)}`}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-twitter-x-fill fs-18 text-linear-4" />
                      </Link>
                      <Link href="/#" className="text-decoration-none">
                        <i className="ri-instagram-fill fs-5 text-linear-4" />
                      </Link>
                      <Link href="/#" className="text-decoration-none">
                        <i className="ri-pinterest-fill fs-5 text-linear-4" />
                      </Link>
                      <Link href="/#" className="text-decoration-none">
                        <i className="ri-google-fill fs-5 text-linear-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <h2>{post.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <Static2 />
      <Contact2 />
    </Layout>
  );
}

// Define the BlogPost interface at the end (or move it to a shared types file)
interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  link: string;
  content: string;
  rawContent?: string;
  author?: string;
  read_time?: string;
  images?: string;
}
