import BlogDetails from "../../../components/sections/BlogDetails";
import { getAllPosts, getPostById } from "@/util/getAllBlogs";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post: any = await getPostById(params.id);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    robots: "index, follow",
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getPostById(params.id);

  return (
    <>
      <BlogDetails post={post} />
    </>
  );
}
