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
    NEXT_PUBLIC_CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
  },
  
};

export default nextConfig;
