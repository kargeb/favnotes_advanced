import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card';

const Twitters = () => (
  <>
    <UserPageTemplate pageType="twitter">
      <Card cardType="twitter" />
    </UserPageTemplate>
  </>
);

export default Twitters;
