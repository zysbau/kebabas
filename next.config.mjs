/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/kebabas',       // 👈 your repo name
  assetPrefix: '/kebabas',    // 👈 your repo name
}

export default nextConfig;