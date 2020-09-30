import { graphql } from "gatsby";
import Img from 'gatsby-image';
import React from "react";
import styled from 'styled-components';

export default function Home({data}) {
  console.log(data.allDataJson);

  const IndexStyles = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8rem 0;
    .imageHold {
      width: 200px;
      height: 250px;
    }
    @media (max-width: 570px) {
      height: 80vh;
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      align-items: center;
      margin: unset;
      margin-top: 4rem;
    }
  `;

  return (
    <IndexStyles>
      <div className='heading'>
        <h1>{data.allDataJson.nodes[1].headline}<span>👋</span></h1>
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
        typical
      }
    }
  }
`;
