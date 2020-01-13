import React, { Component } from 'react';
import Card from 'components/molecules/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'actions';

class Twitters extends Component {
  componentDidMount() {
    const { fetchTwitters } = this.props;

    fetchTwitters();
  }

  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate>
        {twitters.map(twitter => (
          <Card
            id={twitter._id}
            title={twitter.title}
            content={twitter.content}
            twitterName={twitter.twitterName}
            // created={twitter.created}
            key={twitter._id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      // created: PropTypes.string.isRequired,
    }),
  ),
  fetchTwitters: PropTypes.func.isRequired,
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = dispatch => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);
