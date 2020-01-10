import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  z-index: 10000;
  right: 0;
  top: 0;
  height: 100vh;
  width: 40vw;
  padding: 100px 50px;
  flex-direction: column;
  background-color: white;
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const NewItemBar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <Heading>Write new content:</Heading>
    <Input placeholder="title" />
    <StyledTextArea placeholer="text" />
    <Button activeColor={pageContext}> ADD </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);
