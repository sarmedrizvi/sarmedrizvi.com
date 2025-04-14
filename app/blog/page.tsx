import React from "react";
import BlogList from "../../components/sections/Blogs";
import { getAllPosts } from "@/util/getAllBlogs";

const Blogspage = async () => {
  const posts = getAllPosts();

  return (
    <>
      <BlogList posts={posts} />
    </>
  );
};

export default Blogspage;
