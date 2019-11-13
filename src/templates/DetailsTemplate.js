import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = ({ children }) => <UserPageTemplate>{children}</UserPageTemplate>;

DetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DetailsTemplate;
