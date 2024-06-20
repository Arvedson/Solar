/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
    },
    experimental: {
      serverComponentsExternalPackages: ['tesseract.js'],
      outputFileTracingIncludes: {
        '/api/**/*': ['./node_modules/**/*.wasm', './node_modules/**/*.proto']
      }
    }
  };
  
  export default nextConfig;
  