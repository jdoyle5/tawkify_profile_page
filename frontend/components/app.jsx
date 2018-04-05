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
import PhotoUploadContainer from "./photo_upload/photo_upload";

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/upload" component={ PhotoUploadContainer }/>
      <Route path="/" component={ AboutYourself }/>
    </Switch>
  </div>
);

export default App;
