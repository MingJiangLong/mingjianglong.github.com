
const removeImports = require("next-remove-imports")();
const path = require('path')
const debug = process.env.NODE_ENV !== "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias.images = path.join(__dirname, "images");
    // config.module.rules.push({
    //   test: /\.(js|mjs)$/,
    //   exclude: /@babel(?:\/|\\{1,2})runtime/,
    //   use: defaultLoaders.babel,
    // });
    return config
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  basePath: !debug ? '/mingjianglong.github.io' : '',
  assetPrefix: !debug ? '/mingjianglong.github.io' : '',
}

module.exports = removeImports(nextConfig)
