
const removeImports = require("next-remove-imports")();
const debug = process.env.NODE_ENV !== "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias.images = path.join(__dirname, "images");
    return config
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  basePath: !debug ? '/mingjianglong.github.io' : '',
  assetPrefix: !debug ? '/mingjianglong.github.io' : '',
}

module.exports = removeImports(nextConfig)
