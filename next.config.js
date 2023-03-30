
const removeImports = require("next-remove-imports")();
const debug = process.env.NODE_ENV !== "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: debug ? "" : ".",
  // images: {
  //   // default, imgix, cloudinary, akamai
  //   loader: 'cloudinary',
  //   path: '',
  // },
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: true
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

}

module.exports = removeImports(nextConfig)
