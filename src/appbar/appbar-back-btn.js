import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import AppbarBackView from './appbar-back-btn.view';

const ownPropTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBack: function () {
      dispatch(push('/'));
    }
  };
};

const AppbarBack = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppbarBackView);

AppbarBack.propTypes = ownPropTypes;

export default AppbarBack;
