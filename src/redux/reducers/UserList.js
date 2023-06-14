import {DELETE_USER, SET_EDITED_USER, SET_USERS} from "../constants/UserList";

const initState = {
  users: [],
  editedUser: null
}

const usersList = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.payload
      }
    }
    case SET_EDITED_USER: {
      return {
        ...state,
        editedUser: action.payload
      }
    }
    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.userId)
      }
    }
    default:
      return state;
  }
}

export default usersList
