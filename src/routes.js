import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  Home,
  About,
  Login,
  NotFound,
  Pagination,
  Detail
} from 'containers';

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
      { /* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
