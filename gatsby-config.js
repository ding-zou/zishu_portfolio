module.exports = {
  pathPrefix: "/zishu_portfolio",
  siteMetadata: {
    title: "Zoufubo | ZiShu",
    description: "UI Designer - App, Web Design and more",
    author: "ZiShu",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Noto Sans SC", "Noto Serif SC"],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ZiShu Portfolio",
        short_name: "ZiShu",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#5216CE",
        display: "minimal-ui",
        icon: "static/favicon.png",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-149740367-2",
      },
    },
  ],
};
