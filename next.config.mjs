/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-genshin-gallery',
  assetPrefix: '/my-genshin-gallery',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
