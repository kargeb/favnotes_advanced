import React from 'react';
// import DetailsTemplate from 'templates/DetailsTemplate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import UserPageTemplate from '../templates/UserPageTemplate';

const DetailsPage = ({ match }) => (
  <UserPageTemplate>
    <>
      {/* {console.log(match)} */}
      <h1>Jestem w details page</h1>
      <p>jestem w twitters: {match.path === routes.twitter ? 'tak' : 'nie'}</p>
      <Link to="/">Powrót</Link>
    </>
  </UserPageTemplate>
);

DetailsPage.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailsPage;
