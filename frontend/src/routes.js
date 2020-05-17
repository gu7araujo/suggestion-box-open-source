import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterSuggestion from './pages/RegisterSuggestion';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Cadastro" component={RegisterSuggestion} />
      </Switch>
    </BrowserRouter>
  );
}