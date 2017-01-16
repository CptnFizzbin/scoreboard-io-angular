import React, {PropTypes} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';

const propTypes = {
  onBack: PropTypes.func.isRequired,
};

const AppbarBackView = muiThemeable()(
  ({
    muiTheme,
    onBack,
  }) => (
    <IconButton onTouchTap={onBack}>
      <ArrowBackIcon color={muiTheme.palette.alternateTextColor}/>
    </IconButton>
  )
);

AppbarBackView.propTypes = propTypes;

export default AppbarBackView;
