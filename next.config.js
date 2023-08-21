/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'api.tsx', 'api.ts'],
  compiler: {
    emotion: {
      sourceMap: false,
      autoLabel: 'dev-only',
      labelFormat: '[dirname]_[local]'
    }
  }
}

module.exports = nextConfig
