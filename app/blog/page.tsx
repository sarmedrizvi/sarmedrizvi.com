import React from "react";
import { getAllPosts } from "@/util/getAllBlogs";
import BlogList from "@/components/sections/blog";

const Blogspage = async () => {
  const posts = getAllPosts();

  return (
    <>
      <BlogList posts={posts} />
    </>
  );
};

export default Blogspage;
