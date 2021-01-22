module.exports = {
  siteMetadata: {
    title: `eLaps`,
    description: `Sistema para gerenciamento de oficinas`,
    author: `@lucis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ],
}
