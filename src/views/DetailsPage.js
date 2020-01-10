import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = () => {
  const dummyArticle = {
    id: 1,
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'reactjs',
    articleUrl: 'https://youtube.com',
    created: '1 day',
  };

  return (
    <DetailsTemplate
      title={dummyArticle.title}
      created={dummyArticle.created}
      content={dummyArticle.content}
      articleUrl={dummyArticle.articleUrl}
      twitterName={dummyArticle.twitterName}
    />
  );
};

export default DetailsPage;
