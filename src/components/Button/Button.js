import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => color || '#ffd426'};
  border: none;
  width: 220px;
  height: 50px;
  border-radius: 40px;
  font-size: 16px;
  font-family: 'Montserrat';
  text-transform: uppercase;
  font-weight: 600;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e2e2e2;
      font-weight: 300;
      width: 105px;
      height: 30px;
      font-size: 10px;
      letter-spacing: 2px;
      border-radius: 30px;
    `}
`;

export default Button;
