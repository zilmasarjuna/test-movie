import {
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE
} from 'store/types'

const initialState = {
  isFetching: false,
  message: null
}


export default function request(state = initialState, action) {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case POST_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: null,
      }
    case POST_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.message,
      }
    default:
      return state
  }
}
