/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
import "./src/env.mjs";

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
});
