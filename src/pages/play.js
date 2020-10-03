
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
// import YTcard from '../components/YTcard';

const PlayStyled = styled.div`
  display: flex;
  flex-direction: column;
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

export default function Play() {

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.GATSBY_API_KEY}&type=video&q=lofi&hip&hop&eventType=live&maxResults=10`)
    .then(res => res.json())
    .then(json => setItems(json));
  }, []);

  return(
    <PlayStyled>
      <HeaderStyles>
        Treat Yourself to some Live <StyledSpan>LoFi hip-hop music</StyledSpan>
      </HeaderStyles>
      <p>LoFi hip-hop refers to a genre of music that combines hip hop and jazz to create relaxing and atmospheric instrumentals</p>
      <StyledGrid>
        {
          items.length !== 0
          ? (items.items.map(item => {
            // return <YTcard vidId={item.id.videoId}/>
            return <ReactPlayer url={`https://www.youtube.com/watch?v=${item.id.videoId}`} width='100%' height='280px'/>
          }))
          : <p>Loading</p>
        }
      </StyledGrid>
    </PlayStyled>
  );
}