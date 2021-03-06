/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: `/api/movies`,
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: `/api/movies/:id`,
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },

  assetPrefix:
    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
      ? ''
      : 'https://jaeseong90.github.io/nextjsintro',
};

module.exports = nextConfig;
