import React from 'react';
import styled from 'styled-components';
import {VscGithubInverted} from 'react-icons/vsc';
import {FaLinkedin, FaHeart} from 'react-icons/fa';
import {GrGatsbyjs} from 'react-icons/gr';

export default function Footer() {

  const FooterStyles = styled.footer`
    padding: 5px;
    width: 100%;
    text-align: center;
    display: flex;
    font-size: 1.5rem;
    justify-content: flex-start;
    #footer-text {
      margin: 0 auto;
      display: flex;
      align-items: center;
    }
    a.social-link {
      padding: 0 0.7rem;
    }
    @media(max-width: 330px) {
      font-size: 1.2rem;
    }
  `;

  return(
    <FooterStyles>
      <a className='social-link' href="https://github.com/DineshS92" target="_blank">
        <VscGithubInverted/>
      </a>
      <a className='social-link' href="https://www.linkedin.com/in/dineshdsadhwani/" target="_blank">
        <FaLinkedin />
      </a>
      <div id='footer-text'>Created with<FaHeart style={{margin: '0 4px'}}/>using<a href="https://www.gatsbyjs.com/" style={{marginLeft: '4px'}} target="_blank"><GrGatsbyjs /></a></div>
    </FooterStyles>
  );
}