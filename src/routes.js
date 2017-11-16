import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    Chat,
    Home,
    Widgets,
    About,
    Login,
    LoginSuccess,
    Survey,
    NotFound,
    Pagination,
    Listings,
    Detail
  } from 'containers';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */}
      <IndexRoute component={Home} />

      { /* Routes */}
      <Route path="leaderboard" component={Login} />
      <Route path="event/:id" component={Detail} />
      <Route path="races" component={Pagination} />
      <Route path="about" component={About} />
      <Route path="listings" component={Listings}/>
      
      { /* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
