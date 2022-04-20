/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "raw.githubusercontent.com" // for development only
    ],
  },
}
