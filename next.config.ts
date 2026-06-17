import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/tadak-docs',
  assetPrefix: '/tadak-docs',
};

export default nextConfig;
