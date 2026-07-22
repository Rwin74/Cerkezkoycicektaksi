/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
