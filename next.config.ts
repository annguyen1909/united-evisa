import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/destination/:slug*',
        destination: '/destinations/:slug*',
        permanent: true,
      },
      // Cleanup for legacy programmatic spam URLs (sending them to Hub if possible, or 410 if unknown)
      // Since we can't easily 410 in next.config redirects without a page, 
      // we'll redirect specific know patterns to the hub to be safe, or just let them 404/410 naturally via the missing file.
      // But for the singular vs plural 'destination', we definitely want a redirect.
    ]
  },
};

export default nextConfig;
