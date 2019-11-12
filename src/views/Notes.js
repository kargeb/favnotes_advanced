import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card';

const Notes = () => (
  <>
    <UserPageTemplate pageType="note">
      {/* <h1>Notes</h1> */}
      <Card type="note" />
      <Card type="note" />
      <Card type="note" />
      <Card type="note" />
      <Card type="note" />
      <Card type="note" />
    </UserPageTemplate>
  </>
);

export default Notes;
