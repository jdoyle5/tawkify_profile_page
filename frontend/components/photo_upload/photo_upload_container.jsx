import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_upload';
import PhotoUpload from './photo_upload';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);
