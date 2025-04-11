// next-sitemap.config.js
const { fetchAllBlogPosts } = "@/services/blog";

module.exports = {
  siteUrl: "https://sarmedrizvi.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/admin/**", "/404", "/500"],

  // Provide paths manually since App Router doesn't expose them automatically
  additionalPaths: async (config) => {
    const posts = await fetchAllBlogPosts();
    const blogs = posts.map((item) => item.id);
    const paths = ["/", "/blog", ...blogs];

    return Promise.all(paths.map((path) => config.transform(config, path)));
  },
};
