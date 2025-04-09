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

// Helper function to get the base URL
function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    // Client-side - use relative path
    return '/api';
  }

  // Server-side - use environment variable with fallback
  return 'https://sarmedrizvi.com/api';
}
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/blog-post`, {
      next: { tags: ['blog-posts'] } // Optional: for Next.js caching
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/blog-post-by-id?blog=${id}`, {
      next: { tags: ['blog-post', id] } // Optional: for Next.js caching
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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