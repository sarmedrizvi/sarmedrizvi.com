import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface BlogPost {
  blog: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  link: string;
  content: any;
  rawContent?: string;
  author?: string;
  read_time?: string;
  images?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

const postsDirectory = path.join(process.cwd(), '/blogs');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<BlogPost>>
) {
  try {
    // Only allow GET requests
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).json({ 
        success: false,
        message: `Method ${req.method} not allowed` 
      });
    }

    // Get the ID from the query parameters
    const { blog } = req.query;
    console.log('id', blog)

    if (!blog || typeof blog !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Post blog is required'
      });
    }

    // Construct the file path
    const fullPath = path.join(postsDirectory, `${blog}.md`);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Read markdown file
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse front matter and content
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const htmlContent = marked(content);

    // Create the response object
    const post: BlogPost = {
      blog,
      title: data.title || '',
      date: data.date || '',
      category: data.category || '',
      description: data.description || '',
      image: data.image || '',
      link: data.link || `/blog/${blog}`,
      content: htmlContent,
      rawContent: content,
      author: data.author || '',
      read_time: data.read_time || '',
      images: data.images || ''
    };

    // Return successful response
    res.status(200).json({ 
      success: true,
      data: post 
    });

  } catch (error) {
    console.error('Error reading blog post:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to load blog post',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}