import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});


export const createProfile = profile => dispatch => (
  APIUtil.postProfile(profile).then(profileObj => dispatch(receiveProfile(profileObj)))
);
