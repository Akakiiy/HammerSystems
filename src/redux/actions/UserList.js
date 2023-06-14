import {DELETE_USER, SET_EDITED_USER, SET_USERS} from "../constants/UserList";

export const setUsers = (payload) => {
  return {
    type: SET_USERS,
    payload
  }
};

export const setEditedUser = (payload) => {
  return {
    type: SET_EDITED_USER,
    payload
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    userId
  };
};
