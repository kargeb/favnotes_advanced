import React from 'react';
import Card from 'components/molecules/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';

const Twitters = ({ twitters }) => (
  <GridTemplate>
    {twitters.map(twitter => (
      <Card
        id={twitter.id}
        title={twitter.title}
        content={twitter.content}
        twitterName={twitter.twitterName}
        created={twitter.created}
        key={twitter.id}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = state => {
  const { twitters } = state;

  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
