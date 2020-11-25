import React from "react";
import Link from 'next/link'
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";

const HeadLink = styled.div`
  font-size: 23px;
  padding: 30px;
  cursor: pointer;
  color: white;
  padding: 10px;
  border-radius: 18px;
  margin-top: 15px;

  :hover {
    background: aliceblue;
    color: #1f388c;
  }
`;

const MenuItems = styled.div`
  margin-top: 60px;
  padding: 30px;
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #539d4d;
  display: ${({ open }) => (open ? "" : "none")};
  height: 480px;
  padding: 1.2rem;
  position: absolute;
  top: 0px;
  right: 0px;
  border-bottom-left-radius: 23px;
  overflow: hidden;
  text-align: center;
  z-index: 15;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuItems>
        <ScrollIntoView selector="#service" smooth={true}>
          <HeadLink>Service</HeadLink>
        </ScrollIntoView>

        <ScrollIntoView selector="#adresse" smooth={true}>
          <HeadLink>Adresse</HeadLink>
        </ScrollIntoView>

        <ScrollIntoView selector="#open-hours" smooth={true}>
          <HeadLink>Öffnungszeiten</HeadLink>
        </ScrollIntoView>

        <Link to="/impressum">
          <HeadLink>Impressum</HeadLink>
        </Link>

        <ScrollIntoView selector="#contact" smooth={true}>
          <HeadLink>Kontakt</HeadLink>
        </ScrollIntoView>
      </MenuItems>
    </StyledMenu>
  );
};

export default Menu;
