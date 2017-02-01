import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import {StudentList} from './StudentList';
import {Login} from './Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StudentList} />
    <Route path="login" component={Login} />
  </Route>
)