import React from 'react';
import { Switch, Route } from 'react-router';
import { ROUTES } from './constants/constants';
import RiverRanchPullScreen from './containers/RiverRanchPullScreen/RiverRanchPullScreen';
import RiverRanchMainScreen from './containers/RiverRanchMainScreen/RiverRanchMainScreen';

const App = () => {
  return (
    <div>
      <RiverRanchPullScreen />
      <Switch>
        <Route path={ROUTES.MAINSCREEN} component={RiverRanchMainScreen} />
      </Switch>
    </div>
  );
};

export default App;
