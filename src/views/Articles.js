import React from 'react';
import Card from 'components/molecules/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';

const Articles = ({ articles }) => {
  return (
    <GridTemplate pageType="articles">
      {articles.map(article => (
        <Card
          title={article.title}
          content={article.content}
          articleUrl={article.articleUrl}
          created={article.created}
          id={article.id}
          key={article.id}
        />
      ))}
    </GridTemplate>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      // twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = state => {
  const { articles } = state;

  return { articles };
};

export default connect(mapStateToProps)(Articles);
