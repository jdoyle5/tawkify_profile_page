import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_upload';
import PhotoForm from './photo_form';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
