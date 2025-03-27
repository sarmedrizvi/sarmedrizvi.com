import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';


interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  link: string;
  content: string;
  rawContent?: string;
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
  res: NextApiResponse<ApiResponse<BlogPost[]>>
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

    // Get all markdown files
    const filenames = fs.readdirSync(postsDirectory);
    console.log('filenames', filenames)

    // Process each file
    const posts: any= filenames.map(filename => {
      // Remove .md extension to get ID
      const id = filename.replace(/\.md$/, '');

      // Read markdown file
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Parse front matter and content
      const { data, content } = matter(fileContents);

      // Convert markdown to HTML
      const htmlContent = marked(content);

      return {
        id,
        title: data.title || '',
        date: data.date || '',
        category: data.category || '',
        description: data.description || '',
        image: data.image || '',
        link: data.link || `/blog/${id}`,
        read_time: data.read_time,
        content: htmlContent,
        rawContent: content
      };
    });

    // Sort posts by date (newest first)
    posts.sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Return successful response
    res.status(200).json({ 
      success: true,
      data: posts 
    });

  } catch (error) {
    console.error('Error reading blog posts:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to load blog posts',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}