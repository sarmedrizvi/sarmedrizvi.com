import React from "react";
import { getAllPosts } from "@/util/getAllBlogs";
import BlogList from "@/components/sections/BlogPage";

const BlogsPage = async () => {
  const posts = getAllPosts();

  return (
    <>
      <BlogList posts={posts} />
    </>
  );
};

export default BlogsPage;
