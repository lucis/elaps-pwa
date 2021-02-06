module.exports = {
  siteMetadata: {
    title: `eLaps`,
    description: `Sistema para gerenciamento de oficinas`,
    author: `@lucis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          modifyVars: {
            'component-background': '#F4F4F4',
            'input-border-color': '#F4F4F4',
            'primary-color': '#00417E',
            'layout-body-background': '#FFFFFF',
          },
          javascriptEnabled: true,
        },
      },
    },
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-no-index`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eLaps`,
        short_name: `eLaps`,
        start_url: `/`,
        background_color: `#F4F4F4`,
        theme_color: `#00417E`,
        display: `standalone`,
        icon: `src/images/laps-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        // uri: 'https://linode.lucianoautopecas.com',
        uri: 'http://localhost:3000',
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
