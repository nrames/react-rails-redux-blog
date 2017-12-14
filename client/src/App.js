import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FetchBlogs from './components/FetchBlogs';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/blogs" component={FetchBlogs} />
    <Route component={NoMatch} />
  </Switch>  
)

export default App;