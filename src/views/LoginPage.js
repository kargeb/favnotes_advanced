import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import logoIcon from 'assets/icons/logo.svg';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
`;

const StyledContainer = styled.div`
  /* background-color: blue; */
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0 0 10px 0;
`;

const StyledLogo = styled.div`
  /* background-color: pink; */
  display: block;
  margin: 0 auto;
  width: 167px;
  height: 167px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
  /* margin-bottom: 10vh; */
`;

const StyledForm = styled(Form)`
  padding: 15px 20px;
  height: 40vh;
  text-align: center;
  background-color: white;
  width: 80%;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.notes};
  margin: 0 auto;
  width: 70%;
`;

// const StyledInput = styled(Field)`

// `;

const LoginPage = () => (
  <StyledWrapper>
    <StyledContainer>
      <StyledLogo />
      <StyledHeading>Your new favorite online notes experience</StyledHeading>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          axios
            .post('http://localhost:9000/api/user/login', {
              username,
              password,
            })
            .then(() => console.log('login successul'))
            .catch(err => console.log(err));
        }}
      >
        {() => (
          <StyledForm>
            <Heading>User</Heading>
            <Input as={Field} name="username" type="text" placeholder="User" />
            <Input as={Field} name="password" type="password" placeholder="Password" />
            <StyledButton type="submit">Sign In</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  </StyledWrapper>
);

export default LoginPage;
