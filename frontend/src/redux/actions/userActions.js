import SET_CURRENT_USER from '../constants/userConstants';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
