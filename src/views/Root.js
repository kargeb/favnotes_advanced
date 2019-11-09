import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <>
          <Route exact path="/" component={Notes} />
          <Route path="/twitters" component={Twitters} />
          <Route path="/articles" component={Articles} />
        </>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
