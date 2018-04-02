export const RECEIVE_TOP_QUALITIES = 'RECEIVE_TOP_QUALITIES';

export const receiveTopQualities = qualities => ({
  type: RECEIVE_TOP_QUALITIES,
  qualities
});

export const fetchTopQualities = qualities => dispatch => {
  dispatch(receiveTopQualities(qualities));
};
