import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data',
        watchMode: true
      }
    },
    'gatsby-transformer-json'
  ]
}