const { nextI18NextRewrites } = require('next-i18next/rewrites');
//const { redirect } = require('next/dist/next-server/server/api-utils');

const localeSubpaths = {};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/maindashboard',
        permanent: true,
      },
    ];
  },
};
