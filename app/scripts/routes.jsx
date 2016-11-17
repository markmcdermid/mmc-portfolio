import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Main from 'containers/Main';
import Home from 'containers/Home';
import NotFound from 'containers/NotFound';

export default (
  <Route path="/" component={App}>
    <Route component={Main}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
