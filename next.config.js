const withImages = require('next-images');

module.exports = {
  images: withImages({
    domains: ['raw.githubusercontent.com'],
  }),
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
