const withImages = require('next-images');

module.exports = {
  images: withImages({
    domains: ['raw.githubusercontent.com'],
  }),
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true, // was there by default
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};
