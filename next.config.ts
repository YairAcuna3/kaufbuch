import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permite todos los dominios HTTPS (ajusta según tus necesidades)
      },
    ],
  },
  turbopack: {},
};

export default nextConfig;
