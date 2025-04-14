// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    image: string;
    link: string;
    read_time?: string;
    content: string;
    rawContent: string;
    // Add any additional frontmatter fields you might have
    [key: string]: any;
}

export function getAllPosts(): BlogPost[] {
    // Get the path to the 'blogs' directory
    const postsDirectory = path.join(process.cwd(), 'blogs');

    // Read all files in the directory
    const filenames = fs.readdirSync(postsDirectory);

    // Process each markdown file
    const posts: any = filenames.map((filename) => {
        // Remove .md extension to get the post ID/slug
        const id = filename.replace(/\.md$/, '');

        // Full path to the file
        const fullPath = path.join(postsDirectory, filename);

        // Read the file content
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the frontmatter and content
        const { data, content } = matter(fileContents);

        // Convert markdown to HTML
        const htmlContent = marked(content);

        // Combine the data with the post ID and formatted content
        return {
            id,
            title: data.title || '',
            date: data.date || new Date().toISOString(),
            category: data.category || 'uncategorized',
            description: data.description || '',
            image: data.image || '/default-blog-image.jpg',
            link: data.link || `/blog/${id}`,
            read_time: data.read_time || '5 min',
            content: htmlContent,
            rawContent: content,
            ...data
        };
    });

    // Sort posts by date (newest first)
    posts.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return posts;
}

// Optional: Function to get a single post by ID
export function getPostById(id: string): BlogPost | undefined {
    const posts = getAllPosts();
    return posts.find(post => post.id === id);
}

// Optional: Function to get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
    const posts = getAllPosts();
    return posts.filter(post => post.category === category);
}