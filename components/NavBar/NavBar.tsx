import React, { useState } from 'react';
import Image from 'next/image';
import useSound from 'use-sound';
import styled from 'styled-components';
import { StaggerWrap } from 'components/StaggerWrap/StaggerWrap';
import { FadeInUpBox } from 'components/FadeInBox/FadeInBox';
import pop from '../../public/assets/pop.mp3';

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  width: 100%;
  font-size: 22px;
  fontweight: 300;
  color: white;
  padding: 10px 20px;
  backgroundcolor: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(31 47 71 / 15%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 5px,
      rgb(255 255 255 / 10%) 0px 0px 0px 0.5px inset;
    border: 1px solid;
    border-radius: 10px;
    box-shadow: 0 0 0.2em 0 var(--clr-neon);
    border-color: #e35085;
    background-color: #161e26;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  border: 0 solid #e2e8f0;
  :hover {
    text-decoration: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? '40%' : '70%')};
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 8;
  height: ${(props) => (props.open ? '100vh' : 0)};
  width: 100vw;
  background: #0e161e;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

export const NavBar = () => {
  const [play, { stop }] = useSound(pop);

  const [toggle, toggleNav] = useState(false);

  return (
    <StaggerWrap childrenDelay={1} ease="backInOut" delayOrder={1}>
      <Nav>
        <FadeInUpBox yOffset={34} duration={1} delayOrder={1}>
          <Logo>V.V</Logo>
        </FadeInUpBox>
        <Menu>
          <FadeInUpBox yOffset={34} duration={1} delayOrder={1}>
            <Item>
              <Link href="/">home</Link>
            </Item>
          </FadeInUpBox>
          <FadeInUpBox yOffset={34} duration={1} delayOrder={1}>
            <Item>
              <Link href="/#projects">work</Link>
            </Item>
          </FadeInUpBox>
          <FadeInUpBox yOffset={34} duration={1} delayOrder={1}>
            <Item>
              <Link href="/writing">posts</Link>
            </Item>
          </FadeInUpBox>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link href="/">home</Link>
          </Item>
          <Item>
            <Link href="/#projects">work</Link>
          </Item>
          <Item>
            <Link href="/writing">posts</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </StaggerWrap>
  );
};
