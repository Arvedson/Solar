import path from 'path';
import { fileURLToPath } from 'url';

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
  webpack: (config) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  env: {
    CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_API_KEY: process.env.CLERK_SECRET_KEY,
  },
  async redirects() {
    return [
      {
        source: '/sign-in',
        destination: '/sign-in',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
