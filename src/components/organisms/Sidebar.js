import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import logoIcon from 'assets/icons/logo.svg';

const Wrapper = styled.aside`
  background-color: ${({ theme }) => theme.note};
  height: 100vh;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  :last-child {
    /* margin-top: auto; */
    padding-bottom: 20px;
  }
`;

const NavigationWrapper = styled.nav`
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBar = () => (
  <Wrapper>
    <ButtonIcon icon={logoIcon} />
    <NavigationWrapper>
      <ButtonIcon as={NavLink} exact to="/" icon={penIcon} />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} />
    </NavigationWrapper>
    <ButtonIcon as={NavLink} exact to="/" icon={logoutIcon} />
  </Wrapper>
);

export default SideBar;
