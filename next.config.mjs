// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['tesseract.js'],
    outputFileTracingIncludes: {
      '/api/**/*': ['./node_modules/**/*.wasm', './node_modules/**/*.proto']
    }
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  devIndicators: {
    autoPrerender: false,
  },
};

export default nextConfig;
