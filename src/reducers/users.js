import { GET_USERS, GET_SUGGESTED_USERS } from "../actions/users";


const initialState = {
  users: [],
  suggestedUsers: []
}

export function usersData(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users
      });

    case GET_SUGGESTED_USERS:
      return Object.assign({}, state, {
        suggestedUsers: action.suggestedUsers
      });

    default:
      return state;
  }
}
