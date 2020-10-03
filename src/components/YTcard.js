import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const YTCardStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export default function YTCard({vidId}) {
  return(
    <YTCardStyle>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${vidId}`} width='100%' height='280px'/>
    </YTCardStyle>
  );
}