import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.div`
  ul {
    min-height: 100vh;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li:hover {
      background-color: aquamarine;
      a {
        color: red;
      }
    }
  }
  @media screen and (max-width: 570px) {
    height: 17vh;
    ul {
      min-height: unset;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: space-between;
    }
    li {
      padding: 0.5rem 1rem;
    }
  }
`;

export default function Nav() {
  return(
    <NavStyles>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/intro'>Intro</Link>
        </li>
        <li>
          <Link to='/tech'>The Tech</Link>
        </li>
        <li>
          <Link to='/project'>Projects</Link>
        </li>
        <li>
          <Link to='/play'>Playlist</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}