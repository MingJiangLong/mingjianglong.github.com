
const path = require('path')
const debug = process.env.NODE_ENV !== "production";


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    // remarkPlugins: [],
    // rehypePlugins: [],
    // providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias.images = path.join(__dirname, "images");
    return config
  },
  // exportPathMap(defaultPathMap) {
  //   return {
  //     ...defaultPathMap,
  //     '/': { page: '/blog' }
  //   }
  // },

  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
}

module.exports = withMDX(nextConfig)
