module.exports = {
  siteMetadata: {
    title: `Oh Crop`,
    description: `Crop and Compress Images`,
    author: `@good3n`,
    siteUrl: `https://ohcrop.gatsbyjs.io/`,
    pathPrefix: "/ohcrop",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
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
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "render-blocking",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Montserrat",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
