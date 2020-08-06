module.exports = {
  siteMetadata: {
    title: 'Science Frosh 2020 | Froshters, Inc.',
    titleTemplate: '%s · Froshters, Inc.',
    description: 'McGill Science Frosh 2020, Froshters, Inc.!',
    url: 'https://susfrosh.com',
    image: '/cover.png',
    siteLanguage: 'en',
    siteImage: '/cover.png',
    author: `@krubenok`,
    github: `https://github.com/krubenok/mcgill-science-frosh`
  }
};

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-codebushi',
      options: {
        tailwindConfig: 'tailwind.config.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Science Frosh 2020: Froshters, Inc.',
        short_name: 'Froshters, Inc.',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#F5CB5C',
        display: 'standalone',
        icon: 'src/images/logo.png'
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/about', '/schedule', '/resources']
      }
    }
  ]
};
