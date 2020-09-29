import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Nav from './Nav';
import styled from 'styled-components';

const LayoutContainerStyles = styled.div`
  display: flex;
  /* height: 2000px; */
  .children {
    margin-left: 12.8rem;
  }
  @media (max-width: 570px) {
    flex-direction: column;
    .children {
      margin-left: unset;
      margin-top: 1.8rem;
    }
  }
`;

export default function Layout({children}) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <LayoutContainerStyles>
        <div className='navigation'>
          <Nav />
        </div>
        <div className='children'>
          {children}
          <Footer />
        </div>
      </LayoutContainerStyles>
    </div>
  );
}