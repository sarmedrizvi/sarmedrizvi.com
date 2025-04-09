import BlogList from '@/components/sections/blogs'
import { fetchAllBlogPosts } from '@/services/blog';
import React from 'react'

const Blogspage = async () => {
  const posts = await fetchAllBlogPosts();

  return (
    <div><BlogList posts={posts} /></div>
  )
}

export default Blogspage