/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'api.tsx', 'api.ts'],
  compiler: {
    emotion: {
      sourceMap: false,
      autoLabel: 'dev-only',
      labelFormat: '[dirname]_[local]'
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = nextConfig
