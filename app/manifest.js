export default function manifest() {
  return {
    name: 'Çerkezköy Çiçek Taksi',
    short_name: 'Çiçek Taksi',
    description: 'Çerkezköy 7/24 Hızlı, Konforlu ve Güvenilir Taksi Hizmeti. Kredi kartı geçerlidir.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#FFCC00',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
