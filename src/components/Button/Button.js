import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ tertiary }) => (tertiary ? 'blue' : 'orange')};
  border: none;
  width: 220px;
  height: ${({ height }) => height || '50px'};
  border-radius: 40px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: grey;
      width: 105px;
      height: 30px;
      font-size: 10px;
      letter-spacing: 2px;
      border-radius: 30px;
    `}
`;

export default Button;
