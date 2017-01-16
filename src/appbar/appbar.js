import {connect} from 'react-redux';

import AppbarView from './appbar.view';

const ownPropTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    showBackBtn: ownProps.curLocation.pathname !== '/',
  };
};

const mapDispatchToProps = () => {
  return {};
};

const Appbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppbarView);

Appbar.propTypes = ownPropTypes;

export default Appbar;
