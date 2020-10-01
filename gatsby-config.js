import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      },
    },
    // {
    //   resolve: `gatsby-source-youtube-v2`,
    //   options: {
    //     channelId: ['UC8butISFwT-Wl7EV0hUK0BQ'],
    //     apiKey: process.env.API_KEY,
    //     maxVideos: 200
    //   }
    // }
  ]
}