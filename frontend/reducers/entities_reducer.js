import { combineReducers } from 'redux';

import photoReducer from './photo_reducer';
import profileReducer from './profile_reducer';

const entitiesReducer = combineReducers({
  photo: photoReducer,
  profile: profileReducer
});

export default entitiesReducer;
