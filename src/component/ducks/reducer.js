import axios from "axios";

const GET_USER = "GET_USER";

export function getUser(id, username, profile_pic) {
  return {
    type: GET_USER,
    payload: axios.get(`api/login`)
  };
}

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
}
