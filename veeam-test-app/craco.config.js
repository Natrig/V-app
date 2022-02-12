module.exports = {
  style: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
  babel: {
    plugins: ['lodash'],
  },
  webpack: {
    configure: {
      mode: 'development',
      devtool: 'inline-source-map',
      optimization: {
        minimize: false,
      },
    },
  },
};
