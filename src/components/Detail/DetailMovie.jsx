import React from 'react'
import { connect } from 'react-redux'

import { Row, Col, Descriptions, Skeleton } from 'antd'

const DetailMovie = ({ detailMovie }) => {
  if (detailMovie.isFetching) {
    return <Skeleton />
  }
  return (
    <Row gutter={20}>
      <Col span={6}>
        <img src={detailMovie.data.Poster} class="img-detail" alt="detail-img" />
      </Col>
      <Col span={18}>
        <h2>{detailMovie.data.Title}</h2>
        <Descriptions>
          <Descriptions.Item label="Year" span={24}>{detailMovie.data.Year}</Descriptions.Item>
          <Descriptions.Item label="Country" span={24}>{detailMovie.data.Country}</Descriptions.Item>
          <Descriptions.Item label="Language" span={24}>{detailMovie.data.Language}</Descriptions.Item>
          <Descriptions.Item label="Released" span={24}>{detailMovie.data.Released}</Descriptions.Item>
          <Descriptions.Item label="Writer" span={2}>{detailMovie.data.Writer}</Descriptions.Item>
        </Descriptions>
        <p>
          {detailMovie.data.Plot}
        </p>
      </Col>
    </Row>  
  )
}

export default connect(
  ({ movie_store: { detailMovie } }) => ({
    detailMovie
  }),
  null
)(DetailMovie)