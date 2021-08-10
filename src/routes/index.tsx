import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from '../Pages/main'


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Main} />
    </Switch>
  )
}

export default Routes;