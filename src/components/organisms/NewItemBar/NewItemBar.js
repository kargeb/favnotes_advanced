import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik } from 'formik';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  /* justify-content: space-between; */
  z-index: 10000;
  right: 0;
  top: 0;
  height: 100vh;
  width: 40vw;
  padding: 100px 50px;
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

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
    <Heading>Create new {pageContext}:</Heading>
    {/* <StyledInput placeholder="Title" />
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
    </Button> */}

    <Formik
      initialValues={{ title: '', created: '', content: '', articleUrl: '', twitterName: '' }}
      // initialValues={{ email: '', password: '' }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}

      onSubmit={(values, { resetForm }) => {
        // setTimeout(() => {
        addItem(pageContext, values);
        resetForm();
        handleClose();
        //   console.log(values);
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <StyledInput
            placeholder="Title"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === 'twitters' && (
            <StyledInput
              placeholder="Account name eg. Reactjs"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageContext === 'articles' && (
            <StyledInput
              placeholder="link"
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            as="textarea"
            placeholder="text"
            type="text"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            activeColor={pageContext}
            // onClick={() =>
            //   addItem(pageContext, {
            //     title: 'Dupa',
            //     content: 'Piessss coś coś coś coś',
            //   })
            // }
          >
            ADD
          </Button>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button> */}
        </form>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
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
