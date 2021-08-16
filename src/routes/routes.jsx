import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Characters } from '../pages/characters/Characters';
import { Episodes } from '../pages/episodes/Episodes';
import { Locations } from '../pages/locations/Locations';
import { MyWatchList } from '../pages/my-watch-list/MyWatchList';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Characters} />
      <Route path="/episodes/" component={Episodes} />
      <Route path="/locations/" component={Locations} />
      <Route path="/watchList/" component={MyWatchList} />
    </Switch>
  );
};
