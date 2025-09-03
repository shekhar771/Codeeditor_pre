/**
 * @type {import('next').NextConfig}
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    viewTransition: true,
    // appDir: true,
  },
};

export default nextConfig;
