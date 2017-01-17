import {connect} from 'react-redux';

import EditScoresPageView from './edit-scores-page.view';

const propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

const EditScoresPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditScoresPageView);

EditScoresPage.propTypes = propTypes;

export default EditScoresPage;
