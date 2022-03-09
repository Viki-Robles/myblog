const withImages = require('next-images');

module.exports = {
  images: withImages({
    domains: ['raw.githubusercontent.com'],
  }),
  reactStrictMode: true, // was there by default
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.mp3$/i,
      loader: 'file-loader',
    });

    // Important: return the modified config
    return config;
  },
};
