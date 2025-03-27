"use client"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Contact2 from "@/components/sections/Contact2";
import Static2 from "@/components/sections/Static2";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";
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

export default function BlogDetails() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [post, setPost] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return;

//     const fetchPost = async () => {
//       try {
//         const response = await fetch(`/api/blog/${id}`);
//         const data = await response.json();

//         if (data.success) {
//           setPost(data.data);
//         } else {
//           setError(data.message || 'Failed to load post');
//         }
//       } catch (err) {
//         setError('An error occurred while fetching the post');
//         console.error('Error fetching post:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (loading) {
//     return (
//       <Layout headerStyle={2} footerStyle={2}>
//         <div className="section-details pt-130 pb-100">
//           <div className="container text-center">
//             <p>Loading...</p>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   if (error) {
//     return (
//       <Layout headerStyle={2} footerStyle={2}>
//         <div className="section-details pt-130 pb-100">
//           <div className="container text-center">
//             <p className="text-danger">{error}</p>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   if (!post) {
//     return (
//       <Layout headerStyle={2} footerStyle={2}>
//         <div className="section-details pt-130 pb-100">
//           <div className="container text-center">
//             <p>Post not found</p>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   // Format date for display
//   const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//   });

  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        {/* <Head>
          <title>{post.title} | Your Site Name</title>
          <meta name="description" content={post.description} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description} />
          <meta property="og:image" content={post.image} />
        </Head> */}
        {/* <div>
          <section className="section-details pt-130 pb-100">
            <div className="container">
              <div className="row">
                <img
                  src={post.image || "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*gybnYSOmHuv5pGkg40i8VA.jpeg"}
                  alt={post.title}
                  className="w-100"
                />
                <div className="col-lg-8 mx-lg-auto mb-8">
                  <div className="text-center">
                    <Link href={`/blog/category/${post.category}`} className="btn btn-gradient d-inline-block text-uppercase">
                      {post.category}
                    </Link>
                    <h3 className="mt-8">{post.title}</h3>
                  </div>
                </div>
                <div className="col-lg-10 mx-lg-auto mt-8">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-8">
                      <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-lg-0 mt-4">
                        <div className="d-flex align-items-center mb-3">
                          <i className="ri-time-line fs-6" />
                          <span className="ms-2 fs-6">{post.read_time || '3 mins'} read</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <i className="ri-calendar-schedule-line fs-6" />
                          <span className="ms-2 fs-6">{formattedDate}</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <i className="ri-user-line fs-6" />
                          <span className="ms-2 fs-6">
                            By{" "}
                            <Link className="fw-bold text-linear-4" href="/#">
                              {post.author || 'Sarmed'}
                            </Link>
                          </span>
                        </div>
                      </div>
                      <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-4">
                        <span className="text-uppercase fs-7">Share</span>{" "}
                        <br />
                        <div className="d-flex gap-3 pt-3">
                          <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} className="text-decoration-none">
                            <i className="ri-facebook-circle-fill fs-18 text-linear-4" />
                          </Link>
                          <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} className="text-decoration-none">
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
                    </div>
                    <div className="col-lg-9">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Static2 />
          <Contact2 />
        </div> */}
      </Layout>
    </>
  );
}