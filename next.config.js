/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_EXPORT === 'true';

const nextConfig = {
  ...(isStaticExport ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
