import BlogDetails from "@/components/sections/blog-details";
import { getPostById } from "@/util/getAllBlogs";

interface PageProps {
  params: {
    id: string;
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
