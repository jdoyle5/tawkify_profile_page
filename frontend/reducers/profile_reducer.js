import merge from 'lodash/merge';

import { RECEIVE_PROFILE } from '../actions/profile_upload';

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      const profile = action.profile;
      return merge({}, state, { [profile.id]: profile });
    default:
      return state;
  }
};

export default ProfileReducer;
