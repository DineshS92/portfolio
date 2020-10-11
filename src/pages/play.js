import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
import styled from 'styled-components';
import YouTube from '@u-wave/react-youtube';

const PlayStyled = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: 100;
  }
`;

const HeaderStyles = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
`;

const StyledSpan = styled.span`
  background-image: linear-gradient(to right, transparent 50%, #7851a9 50%);
  background-origin: 0;
  background-size: 200% 40%;
  background-repeat: repeat-x;
  background-position: -100% 100%;
`;

const StyledGrid = styled.div`
  margin: 1.5rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  @media(max-width: 560px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const playQuery = graphql`
  {
    allDataJson {
      nodes {
        playcontent
        playheadline
        playhighlight
      }
    }
  }
`;

export default function Play({data}) {

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`/.netlify/functions/fetchVideos`)
    .then(res => res.json())
    .then(json => setItems(json));
  }, []);

  return(
    <PlayStyled>
      <HeaderStyles>
        {data.allDataJson.nodes[2].playheadline} <StyledSpan>{data.allDataJson.nodes[2].playhighlight}</StyledSpan>
      </HeaderStyles>
      <p>{data.allDataJson.nodes[2].playcontent}</p>
      <StyledGrid>
        {
          items.length !== 0
          ? (items.items.map(item => {
            return <YouTube video={item.id.videoId} width='100%' height='280px' />
          }))
          : <HeaderStyles><StyledSpan>Loading...</StyledSpan></HeaderStyles>
        }
      </StyledGrid>
    </PlayStyled>
  );
}