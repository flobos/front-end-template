import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const routes = [];

export const Router = () => (
    <Route>
      <Switch>
          {routes.map((route, index) =>(
              <Route key={index} path={route.path} exact={route.exact}>
                <route.Component/>
              </Route>
          ))}
      </Switch>
   </Route>
)

