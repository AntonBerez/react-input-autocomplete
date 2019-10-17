export const GET_USERS = 'GET_USERS';
export const GET_SUGGESTED_USERS = 'GET_SUGGESTED_USERS';

export function getUsers() {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((suggestions) => dispatch({
        type: GET_USERS,
        users: suggestions.map((suggestion) => {
          return suggestion.username;
        })
      }))
  };
}

export function getSuggestedUsers(suggestedUsers) {
  return {
    type: GET_SUGGESTED_USERS,
    suggestedUsers: suggestedUsers
  }
}
