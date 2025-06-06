/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Needed for static export
  },
  basePath: "/portfolio", // repo name
  assetPrefix: "/portfolio/",
};

export default nextConfig;
