/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  reactCompiler: true,
  experimental: {
    optimizeCss: true,
  },
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
  ],
};

module.exports = nextConfig;
