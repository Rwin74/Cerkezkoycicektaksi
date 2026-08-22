/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/transfer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/noktalar',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
