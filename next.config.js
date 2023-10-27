/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Exclude test files or directories using a regular expression pattern
    if (!isServer) {
      config.module.rules.push({
        test: /\.(test|spec)\.tsx$/,
        use: "ignore-loader",
      });
    }

    return config;
  },
  images: {
    domains: ["b.zmtcdn.com"],
  },
};

module.exports = nextConfig;
