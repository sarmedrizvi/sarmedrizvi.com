// next-sitemap.config.js

module.exports = {
    siteUrl: 'https://sarmedrizvi.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: 'monthly',
    priority: 0.7,
    exclude: ['/admin/**', '/404', '/500'],

    // Provide paths manually since App Router doesn't expose them automatically
    additionalPaths: async (config) => {
        const paths = [
            '/',
            '/blog',
            '/blog/my-first-post', 
        ];

        return Promise.all(
            paths.map((path) => config.transform(config, path))
        );
    },
};
