import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile_upload';
import PhotoForm from './photo_form';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
  createProfile: (profile) => dispatch(createProfile(profile))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
