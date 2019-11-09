import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import plusIcon from 'assets/icons/plus.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Icons/ButtonIcon',
  decorators: [storyFn => <Background>{storyFn()}</Background>],
};

const Background = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.note};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const bulb = () => <ButtonIcon icon={bulbIcon} />;
export const bulbActive = () => <ButtonIcon active icon={bulbIcon} />;
export const plus = () => <ButtonIcon icon={plusIcon} />;
export const pen = () => <ButtonIcon icon={penIcon} />;
export const logout = () => <ButtonIcon icon={logoutIcon} />;
export const twitter = () => <ButtonIcon icon={twitterIcon} />;
