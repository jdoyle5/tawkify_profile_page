import { combineReducers } from 'redux';

import photoReducer from './photo_reducer';
import idealPartner from './ideal_partner_reducer';

const entitiesReducer = combineReducers({
  ideal_partner: idealPartner,
  photos: photoReducer
});

export default entitiesReducer;
