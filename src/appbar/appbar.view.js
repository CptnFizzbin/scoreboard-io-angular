import * as React from 'react';
import MuiAppBar from 'material-ui/AppBar';

import AppbarBackBtn from './appbar-back-btn';
import AppbarMenu from './appbar-menu';

const AppbarView = ({
  prevRoute,
  showBackBtn,
}) => (
  <MuiAppBar
    title="Scoreboard.io"
    iconElementLeft={showBackBtn ? <AppbarBackBtn prevRoute={prevRoute} /> : <AppbarMenu />}
  />
);

export default AppbarView;
