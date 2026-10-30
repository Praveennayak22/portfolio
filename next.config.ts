import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add domains here if you serve images from external URLs
    domains: [],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
