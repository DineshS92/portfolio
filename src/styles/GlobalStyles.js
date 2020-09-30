import {createGlobalStyle} from 'styled-components';
import bg from '../assets/images/starry_night.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --textcolor: #DDE1E4;
    --grayish: #181818;
  }
  html {
    font-size: 10px;
    background-image: url(${bg});
    background-size: 450px;
    background-attachment: fixed;
    box-sizing: border-box;
  }
  body {
    font-size: 2rem;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
