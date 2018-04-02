import merge from 'lodash/merge';
import { RECIEVE_TOP_QUALITIES } from '../actions/ideal_partner/actions';

const topQualities = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_TOP_QUALITIES:
      return {};
    default:
      return state;
  }
};

export default topQualities;
