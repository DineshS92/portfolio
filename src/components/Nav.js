import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NavIcon from './NavIcon';

const NavStyles = styled.nav`
  ul {
    background-color: var(--grayish);
    font-size: 1.5rem;
    min-height: 100vh;
    list-style: none;
    margin: 0;
    padding: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    li {
      padding: 1rem 0.5rem;
    }
  }
  @media (max-width: 560px) {
    height: 10vh;
    ul {
      position: unset;
      min-height: unset;
      font-size: unset;
      font-size: 1.2rem;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      li {
      padding: unset;
      padding: 0.5rem 1.4rem;
      }
    }
  }
`;

export default function Nav() {

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        home {
          url
          icon
          name
        }
        intro {
          url
          icon
          name
        }
        projects {
          url
          icon
          name
        }
        play {
          url
          icon
          name
        }
        contact {
          url
          icon
          name
        }
      }
    }
  `);

  const navIconData = Object.values(data.dataJson);

  return(
    <NavStyles>
      {/* <ul>
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
      </ul> */}
      <ul>
        {
          navIconData.map(navIcon => {
            return(
              <li>
                <NavIcon
                  icon={navIcon.icon}
                  name={navIcon.name}
                  url={navIcon.url}
                  />
              </li>
            );
          })
        }
      </ul>
    </NavStyles>
  );
}