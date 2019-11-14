/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import UserPageTemplate from '../templates/UserPageTemplate';

class DetailsPage extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
    }
  }

  render() {
    const { match } = this.props;

    return (
      <UserPageTemplate pageType={this.state.pageType}>
        <>
          {/* {console.log(match)} */}
          <h1>Jestem w details page</h1>
          <p>jestem w twitters: {match.path === routes.twitter ? 'tak' : 'nie'}</p>
          <Link to="/">Powrót</Link>
        </>
      </UserPageTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default DetailsPage;
