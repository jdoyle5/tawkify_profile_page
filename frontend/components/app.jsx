import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBar from "./navbar/navbar.jsx";

const App = () => (
  <div>
    <Route path="/" component={ NavBar }/>
  </div>
);

export default App;
