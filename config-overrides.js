const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@routes': path.resolve(__dirname, 'src/routes')
    },
  };

  return config;
};