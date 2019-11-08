import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
  border: none;
  background-color: transparent;

  ${({ active }) =>
    active &&
    css`
      background-color: white;
    `}
`;

export default ButtonIcon;