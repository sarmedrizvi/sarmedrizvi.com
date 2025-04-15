import React from "react";
import { getAllPosts } from "@/util/getAllBlogs";
import BlogList from "@/components/sections/blog";

const BlogsPage = async () => {
  const posts = getAllPosts();

  return (
    <>
      <BlogList posts={posts} />
    </>
  );
};

export default BlogsPage;
