import axios from 'utils/API'

import {
 DETAIL_MOVIE_FAILURE,
 DETAIL_MOVIE_REQUEST,
 DETAIL_MOVIE_SUCCESS,
} from 'store/types'

export const detailMovieRequest = () => ({
  type:DETAIL_MOVIE_REQUEST,
})

export const detailMovieSuccess = (data) => ({
  type:DETAIL_MOVIE_SUCCESS,
  data,
})

export const detailMovieFailure = error => ({
  type:DETAIL_MOVIE_FAILURE,
  error,
})

export const fetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(detailMovieRequest())
    return axios.get(`/?apikey=faf7e5bb&i=${id}`).then(res => {
      if (res.data) {
        dispatch(detailMovieSuccess(res.data))
      }
    }).catch(err => {
      dispatch(detailMovieFailure(err))
    })
  }
}

