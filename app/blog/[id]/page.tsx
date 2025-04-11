import BlogDetails from "@/components/sections/blog-details";
import { fetchBlogPostById } from "@/services/blog";

interface PageProps {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchBlogPostById(params.id);

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
  };
}
export default async function BlogDetailPage({ params }: PageProps) {
  const post = await fetchBlogPostById(params.id);

  return (
    <>
      <BlogDetails post={post} />
    </>
  );
}
