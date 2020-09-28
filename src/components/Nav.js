import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {layers} from 'react-icons-kit/ikons/layers';
import {home3} from 'react-icons-kit/icomoon/home3';
import {user} from 'react-icons-kit/fa/user';
import {code} from 'react-icons-kit/fa/code';
import {playCircle} from 'react-icons-kit/fa/playCircle';
import {sendO} from 'react-icons-kit/fa/sendO';

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

  const data = useStaticQuery(graphql`
    {
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
        tech {
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

  console.log(Object.values(data.dataJson)[1].url);

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