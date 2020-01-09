import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import DetailsPage from './DetailsPage';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <>
            <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.twitters} component={Twitters} />
            <Route path={routes.twitter} component={DetailsPage} />
            <Route exact path={routes.articles} component={Articles} />
            <Route path={routes.article} component={DetailsPage} />
          </>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
