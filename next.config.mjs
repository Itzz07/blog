/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
import withVideos from "next-videos";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

export default withVideos(nextConfig);
