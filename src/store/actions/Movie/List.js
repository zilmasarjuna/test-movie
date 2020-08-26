import axios from 'utils/API'

import {
  LIST_MOVIE_FAILURE,
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  SEARCH_MOVIE_REQUEST,
} from 'store/types'

export const listMovieRequest = () => ({
  type: LIST_MOVIE_REQUEST,
})

export const searchMovieRequest = () => ({
  type: SEARCH_MOVIE_REQUEST,
})


export const listMovieSuccess = (data, page) => ({
  type: LIST_MOVIE_SUCCESS,
  data,
  page
})

export const listMovieFailure = error => ({
  type: LIST_MOVIE_FAILURE,
  error,
})

export const fetchListMovie = ({ s = 'Batman', page = 1 } = {}) => {
  return (dispatch) => {
    dispatch(listMovieRequest())

    return axios.get(`/?apikey=faf7e5bb&s=${s}&page=${page}`).then(res => {
      if (res.data.Response === 'True') {
        dispatch(listMovieSuccess(res.data.Search, page))
      } else {
        dispatch(listMovieFailure(res.data.Error))  
      }
    }).catch(err => {
      dispatch(listMovieFailure(err))
    })
  }
}

export const searchListMovie = ({ s = 'Batman' }) => {
  return (dispatch) => {
    dispatch(searchMovieRequest())

    return axios.get(`/?apikey=faf7e5bb&s=${s}&page=1`).then(res => {
      if (res.data.Response === 'True') {
        dispatch(listMovieSuccess(res.data.Search, 1))
      } else {
        dispatch(listMovieFailure(res.data.Error))  
      }
    }).catch(err => {
      dispatch(listMovieFailure(err))
    })
  }
}

// export const fetchMore = (s = 'Batman', page) => {
//   return (dispatch) => {

//     dispatch(listMovieRequest())

//     return axios.get(`/?apikey=faf7e5bb&s=${s}&page=${page}`).then(res => {
//       if (res.data.Response === 'True') {
//         dispatch(listMovieSuccess(res.data.Search, page))
//       }
//     }).catch(err => {
//       dispatch(listMovieFailure(err))
//     })
//   }
// }


