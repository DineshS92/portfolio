import { graphql } from "gatsby";
import Img from 'gatsby-image';
import React from "react";
import styled from 'styled-components';
import Typical from 'react-typical';

export default function Home({data}) {

  const IndexStyles = styled.div`
    width: 100%;
    height: 70%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8rem 0;
    .heading {
      width: 60%;
      h1 {
        font-weight: bold;
      }
    }
    .imageHold {
      width: 200px;
      height: 250px;
    }
    @media (max-width: 560px) {
      height: 80vh;
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      align-items: center;
      margin: unset;
      margin-top: 2rem;
      .heading {
        font-size: 1.5rem;
        margin-top: 1.5rem;
        width: unset;
        width: 100%;
      }
    }
    @media(max-width: 330px) {
      .heading {
        font-size: unset;
        font-size: 1.2rem;
      }
    }
  `;

  return (
    <IndexStyles>
      <div className='heading'>
        <h1>
          {data.allDataJson.nodes[1].headline}<span>👋</span><br/><br/>
          {data.allDataJson.nodes[1].headline1}{' '}
          <Typical
            steps={[data.allDataJson.nodes[1].typical[0], 3500, data.allDataJson.nodes[1].typical[1], 3500, data.allDataJson.nodes[1].typical[2], 3500, data.allDataJson.nodes[1].typical[3], 3500]}
            loop={Infinity}
            wrapper='span'
            />
        </h1>
      </div>
      <div className='imageHold'>
        <Img
          imgStyle={{borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%'}}
          fadeIn
          fluid={data.allImageSharp.nodes[0].fluid}
        />
      </div>
    </IndexStyles>
  );
}

export const IndexQuery = graphql`
  {
    allImageSharp {
      nodes {
        fluid (maxHeight: 250, maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allDataJson {
      nodes {
        headline
        headline1
        typical
      }
    }
  }
`;
