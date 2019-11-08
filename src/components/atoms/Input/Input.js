import styled, { css } from 'styled-components';
import icon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  border-radius: 10px;
  border: none;
  width: 200px;
  height: 40px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.grey200};

  ::placeholder {
    color: ${({ theme }) => theme.grey300};
    text-transform: uppercase;
  }

  ${({ search }) =>
    search &&
    css`
      padding-left: 45px;
      height: 30px;
      background-color: ${({ theme }) => theme.grey200};
      background-image: url(${icon});
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 10px 50%;
      backro
    `}
`;

export default Input;
