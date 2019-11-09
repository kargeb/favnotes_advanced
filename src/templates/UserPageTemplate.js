import React from 'react';
import PropTypes from 'prop-types';
import SideBar from 'components/organisms/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <SideBar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default UserPageTemplate;
