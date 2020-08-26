import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchDetailMovie } from 'store/actions/Movie/Detail'

import { DetailMovie } from 'components'

const Detail = ({ fetchDetailMovie, match }) => {
  useEffect(() => {
    fetchDetailMovie(match.params.id)
  })
  return (
    <div className="container">
      <div className="container-detail">
        <div className="title-page">
          <h2>Detail Movies</h2>
        </div>
        <div className="body-page">
          <DetailMovie />
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { fetchDetailMovie }
)(Detail)