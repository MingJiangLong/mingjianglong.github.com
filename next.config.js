
const removeImports = require("next-remove-imports")();
const debug = process.env.NODE_ENV !== "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    config.resolve.alias.images = path.join(__dirname, "images");
    return config
  },
  pageExtensions: ['ts', 'tsx',],
  target: 'serverless',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  basePath: !debug ? '/mingjianglong.github.io/' : '',
  assetPrefix: !debug ? '/mingjianglong.github.io/' : '',
}
// const nextConfig = {
//   basePath: !debug ? '/mingjianglong.github.io' : '',
//   assetPrefix: !debug ? '/mingjianglong.github.io/' : '',
//   images: {
//     // default, imgix, cloudinary, akamai
//     loader: 'imgix',
//     path: '/',
//   },
//   // distDir: "docs",
//   cleanDistDir: true,
//   // output: "export",
//   reactStrictMode: true,
//   eslint: {
//     ignoreDuringBuilds: true
//   },
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },

// }

module.exports = removeImports(nextConfig)
