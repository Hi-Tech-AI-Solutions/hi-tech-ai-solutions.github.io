/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // When deploying to an apex organization page (https://<org>.github.io),
  // basePath remains empty ('')
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
