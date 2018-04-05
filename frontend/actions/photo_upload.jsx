import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTOS,
  photo
});


export const createPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo).then(photoObj => dispatch(receivePhoto(photoObj)))
);
