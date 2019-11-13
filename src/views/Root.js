import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import DetailsPage from './DetailsPage';

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <>
          <Route exact path="/" render={() => <Redirect to="/notes" />} />
          <Route exact path="/notes" component={Notes} />
          <Route path="/notes/:id" component={DetailsPage} />
          <Route exact path="/twitters" component={Twitters} />
          <Route path="/twitters/:id" component={DetailsPage} />
          <Route exact path="/articles" component={Articles} />
          <Route path="/articles/:id" component={DetailsPage} />
        </>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
