/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'AshStrahle ARM64 Kasm Registry',
    description: 'ARM64 Kasm Workspaces maintained by AshStrahle',
    icon: '/ash.png',
    listUrl: 'https://ashstrahle.github.io/kasm-registry/',
    contactUrl: 'https://github.com/ashstrahle/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
