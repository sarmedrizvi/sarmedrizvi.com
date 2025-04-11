// next-sitemap.config.js

module.exports = {
  siteUrl: "https://sarmedrizvi.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/admin/**", "/404", "/500"],

  // Provide paths manually since App Router doesn't expose them automatically
  additionalPaths: async (config) => {
    const response = await fetch(`https://sarmedrizvi.com/api/blog-post`, {
      next: { tags: ["blog-posts"] }, // Optional: for Next.js caching
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (!result.success || !result.data) {
      throw new Error(result.message || "Failed to fetch blog posts");
    }

    const posts = result.data;
    const blogs = posts.map((item) => item.id);
    let paths = ["/", "/blog", ...blogs];
    paths = [...new Set(paths)];
    return Promise.all(paths.map((path) => config.transform(config, path)));
  },
};
