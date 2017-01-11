import * as React from 'react';
import MuiAppBar from 'material-ui/AppBar';

import AppbarMenu from './appbar-menu';

const AppbarView = () => (
  <MuiAppBar
    title="Scoreboard.io"
    iconElementLeft={<AppbarMenu />}
  />
);

export default AppbarView;
