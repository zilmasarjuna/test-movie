import { combineReducers } from 'redux'

import listMovie from './Movie/List'
import detailMovie from './Movie/Detail'

export default combineReducers({
  listMovie,
  detailMovie
})