interface BlogPost {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    image: string;
    link: string;
    content: string;
  }
  
interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
  }


const API_BASE_URL = '/api';

export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog-post`);
    const result: ApiResponse<BlogPost[]> = await response.json();
    
    if (!result.success || !result.data) {
      throw new Error(result.message || 'Failed to fetch blog posts');
    }
    
    return result.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function fetchBlogPostById(id: string): Promise<BlogPost> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog-post-by-id?blog=${id}`);
    const result: ApiResponse<BlogPost> = await response.json();
    
    if (!result.success || !result.data) {
      throw new Error(result.message || 'Blog post not found');
    }
    
    return result.data;
  } catch (error) {
    console.error(`Error fetching blog post ${id}:`, error);
    throw error;
  }
}