import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  /* justify-content: space-between; */
  z-index: 10000;
  right: 0;
  top: 0;
  height: 100vh;
  width: 40vw;
  padding: 100px 50px;
  flex-direction: column;
  background-color: white;
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: 20px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
    <Heading>Create new {pageContext}:</Heading>
    <StyledInput placeholder="Title" />
    {pageContext === 'twitters' && <StyledInput placeholder="Account name eg. Reactjs" />}
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="text" />
    <Button
      activeColor={pageContext}
      onClick={() =>
        addItem(pageContext, {
          title: 'Dupa',
          content: 'Piessss coś coś coś coś',
        })
      }
    >
      ADD
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
