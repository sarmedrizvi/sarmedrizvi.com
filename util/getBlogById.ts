// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
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

// ... (keep the existing getAllPosts function from previous example)

/**
 * Get a single blog post by ID
 * @param id The blog post ID (filename without .md extension)
 * @returns The blog post or null if not found
 */
export function getPostById(id: string): BlogPost | null {
    try {
        const fullPath = path.join(process.cwd(), 'blogs', `${id}.md`);

        // Check if file exists
        if (!fs.existsSync(fullPath)) {
            return null;
        }

        // Read markdown file
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse front matter and content
        const { data, content } = matter(fileContents);

        // Convert markdown to HTML
        const htmlContent = marked(content);

        return {
            blog: id,
            title: data.title || '',
            date: data.date || '',
            category: data.category || '',
            description: data.description || '',
            image: data.image || '',
            link: data.link || `/blog/${id}`,
            content: htmlContent,
            rawContent: content,
            author: data.author || '',
            read_time: data.read_time || '',
            images: data.images || ''
        };
    } catch (error) {
        console.error(`Error reading blog post ${id}:`, error);
        return null;
    }
}