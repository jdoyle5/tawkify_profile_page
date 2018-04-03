import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBar from "./navbar/navbar";
import AboutYourself from "./about_yourself/about_yourself";

const App = () => (
  <div>
    <Route path="/" component={ NavBar }/>
    <Route path="/" component={ AboutYourself }/>
  </div>
);

export default App;
