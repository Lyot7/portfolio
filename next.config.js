/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress the params enumeration warning in development
  experimental: {
    // This helps with the params Promise serialization issue
    serverComponentsExternalPackages: [],
  },
  // Add logging configuration to reduce console noise
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

module.exports = nextConfig;
