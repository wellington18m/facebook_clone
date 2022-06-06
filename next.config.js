/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "cloudflare-ipfs.com",
      "loremflickr.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
