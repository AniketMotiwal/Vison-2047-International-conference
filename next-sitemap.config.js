/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://vision2047.iitr.ac.in',

  generateRobotsTxt: true, // robots.txt bhi banega

  sitemapSize: 7000,

  changefreq: 'daily',
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

export default config;