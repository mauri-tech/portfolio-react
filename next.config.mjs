const nextMDX = require('@next/mdx');
const remarkGfm = require('remark-gfm');
const rehypePrism = require('@mapbox/rehype-prism');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX(nextConfig);
