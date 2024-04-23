/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Optional, defaults to 'https'
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https", // Optional, defaults to 'https'
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https", // Optional, defaults to 'https'
        hostname: "img.icons8.com",
      },
      {
        protocol: "https", // Optional, defaults to 'https'
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
