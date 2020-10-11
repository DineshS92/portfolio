import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {AiOutlineHome, AiOutlinePlayCircle} from 'react-icons/ai';
import {FiUser, FiLayers} from 'react-icons/fi';
import {BsCodeSlash} from 'react-icons/bs';
import {FaRegPaperPlane} from 'react-icons/fa';

const NavIconStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .icon {
    font-size: 2.3rem;
    margin-bottom: 5px;
  }
  @media (max-width: 560px) {
    max-width: 2.7rem;
  }
`;

export default function NavIcon({icon, name, url}) {
  let iconToRender;
  switch(icon) {
    case "home":
      iconToRender = <AiOutlineHome className='icon' />;
      break;
    case "about":
      iconToRender = <FiUser className='icon' />;
      break;
    case "tech":
      iconToRender = <FiLayers className='icon' />;
      break;
    case "project":
      iconToRender = <BsCodeSlash className='icon' />;
      break;
    case "play":
      iconToRender = <AiOutlinePlayCircle className='icon' />;
      break;
    case "contact":
      iconToRender = <FaRegPaperPlane className='icon' />;
      break;
  }

  return (
    <Link to={url}>
      <NavIconStyles>
        {iconToRender}
        {name}
      </NavIconStyles>
    </Link>
  );
}