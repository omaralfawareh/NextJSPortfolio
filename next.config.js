/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});

const nextConfig = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  
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

module.exports = withBundleAnalyzer(nextConfig);
