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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 75vw;
    margin: 0 auto 0 14.5rem;
    padding: 2.5rem 2.5rem 0 2.5rem;
    background-color: var(--grayish);
    border-radius: 5px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  }
  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    .navigation {
      width: 100%;
    }
    .children {
      padding: unset;
      margin: unset;
      padding: 1.5rem 1.5rem 0 1.5rem;
      margin: 3rem auto 0;
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