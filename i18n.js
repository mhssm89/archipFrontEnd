const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en-US',
  otherLanguages: ['ar-EG'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});
NextI18NextInstance.i18n.languages = ['en-US', 'ar-EG'];

module.exports = NextI18NextInstance;
