import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile_upload';
import AboutYourself from './about_yourself';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  createProfile: (profile) => dispatch(createProfile(profile))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutYourself);
