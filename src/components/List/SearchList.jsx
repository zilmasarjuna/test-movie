import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'

import { searchListMovie } from 'store/actions/Movie/List'

const { Search } = Input

const SearchList = ({ searchListMovie }) => {
  return (
    <Search
      placeholder="input search text"
      onSearch={value => searchListMovie({ s: value, page: 1 })}
      size="large"
    />
  )
}

export default connect(
  null,
  { searchListMovie }
)(SearchList)