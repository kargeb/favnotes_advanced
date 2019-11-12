import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SideBar from 'components/organisms/Sidebar';
import Heading from '../components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <SideBar pageType={pageType} />
    <Heading big>Nagłówek duży</Heading>
    <Heading>Nagłówek maly</Heading>
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

export default UserPageTemplate;
