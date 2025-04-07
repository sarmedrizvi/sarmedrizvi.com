import BlogDetails from '@/components/sections/blog-details';
import { fetchBlogPostById } from '@/services/blog';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await fetchBlogPostById(params.id);
  console.log("Blog details", post);


  return (
    <>
      <BlogDetails post={post} />
    </>
  );
}
