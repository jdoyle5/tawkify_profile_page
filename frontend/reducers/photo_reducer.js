import merge from 'lodash/merge';

import { RECEIVE_PHOTO } from '../actions/photo_upload';

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      const photo = action.photo;
      return merge({}, state, { [photo.id]: photo });
    default:
      return state;
  }
};

export default PhotoReducer;
