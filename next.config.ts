import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Disabled for now
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Copiar binarios nativos de Prisma al bundle
    if (isServer) {
      config.plugins = config.plugins || [];

      // Plugin personalizado para copiar archivos de Prisma
      config.plugins.push({
        apply: (compiler: {
          hooks: {
            afterEmit: { tap: (name: string, callback: () => void) => void };
          };
        }) => {
          compiler.hooks.afterEmit.tap("PrismaPlugin", () => {
            const prismaClientPath = path.join(
              process.cwd(),
              "app/generated/prisma"
            );
            const outputPath = path.join(
              process.cwd(),
              ".next/server/app/generated/prisma"
            );

            if (fs.existsSync(prismaClientPath)) {
              fs.mkdirSync(outputPath, { recursive: true });

              // Copiar todos los archivos necesarios del cliente Prisma
              fs.readdirSync(prismaClientPath).forEach((file: string) => {
                if (
                  file.endsWith(".node") ||
                  file === "schema.prisma" ||
                  file.endsWith(".js") ||
                  file.endsWith(".d.ts")
                ) {
                  fs.copyFileSync(
                    path.join(prismaClientPath, file),
                    path.join(outputPath, file)
                  );
                }
              });
            }
          });
        },
      });
    }

    return config;
  },
  turbopack: {},
};

export default nextConfig;
