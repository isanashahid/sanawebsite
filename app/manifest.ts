import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sana Shahid - AI GTM Strategist & Product Marketing Manager',
    short_name: 'Sana Shahid',
    description: 'Product Marketing Manager specializing in AI-driven product growth and automation. Building AI workflows for B2B SaaS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#00d4ff',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

