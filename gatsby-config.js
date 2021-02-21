const config = require('./src/data/config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Andrew Hill',
    description: 'I’m John and I’m a Backend & Devops engineer!',
    url: 'https://portfolio.smakosh.com',
    author: 'Shahriyar Ahmed (shahriyar.31dec@gmail.com)',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon/favicon-512.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: 'starter',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: './static/favicon/favicon-512.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
