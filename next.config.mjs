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
      },
      {
        source: '/kapakli-taksi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hizmetler/kapakli-7-24-taksi',
        destination: '/hizmetler',
        permanent: true,
      },
      {
        source: '/fiyatlar/cerkezkoy-kapakli-taksi-ucreti',
        destination: '/fiyatlar',
        permanent: true,
      },
      {
        source: '/noktalar/kapakli-devlet-hastanesi',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
