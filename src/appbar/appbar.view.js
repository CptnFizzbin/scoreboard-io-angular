import * as React from 'react';
import AppBar from 'material-ui/AppBar';

import SbioAppbarMenu from './appbar-menu';

class SbioAppBarView extends React.Component {
  render() {
    return (
      <AppBar
        title="Scoreboard.io"
        iconElementLeft={<SbioAppbarMenu />}
      />
    );
  }
}

export default SbioAppBarView;
