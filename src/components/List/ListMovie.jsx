/* eslint-disable */

import React, { useState ,useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchListMovie } from 'store/actions/Movie/List'

import { List, Image } from 'antd'
import { Link } from "react-router-dom"

const ListMovie = ({ listMovie, fetchListMovie }) => {
  const [ item, changeItem] = useState([])
  const [ itemSecond, changeSecondItem ] = useState([])

  useEffect(() => {
    changeItem([])
    changeSecondItem([])
  }, [])

  useEffect(() => {
    async function getData() {
      if (listMovie.type === 'SEARCH_MOVIE_REQUEST') {
        changeItem([])
        changeSecondItem([])
      } 

      if (listMovie.type === 'LIST_MOVIE_SUCCESS') {
        if (listMovie.page === 1) {
          changeItem(item.concat(listMovie.data))
        } else {
          const data = {
            item: listMovie.data
          }
          const dataFirst = data.item.splice(0, 5) 
          const dataSecond = data.item
          changeItem(item.concat(dataFirst))
          changeSecondItem(dataSecond)
        }
      }
    }
    getData()
  }, [listMovie])

  useEffect(() => {
    window.onscroll = function() {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.scrollHeight
      ) {
        if (listMovie.length === 10) {
          if (itemSecond.length === 0) {
            fetchListMovie({page: listMovie.page + 1 })
          } else {
            changeItem(item.concat(itemSecond))
            changeSecondItem([])
          }
        }
      }
    }
  }, [listMovie.length, itemSecond, item, fetchListMovie])
  return (
    <div 
      className="wrap-item"
    >
      <List 
        itemLayout="vertical"
        size="large"
        loading={listMovie.page === 1 && listMovie.isFetching}
        dataSource={item}
        rowKey="imdbID"
        renderItem={item => (
          <List.Item key={item.imdbID}>
            <List.Item.Meta
              avatar={
                <Image src={item.Poster} className="img-list"/>
              }
              title={<Link to={`/movie/${item.imdbID}`}>{item.Title}</Link>}
              description={item.Year}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default connect(
  ({ movie_store: { listMovie } }) => ({ 
    listMovie
  }),
  { fetchListMovie }
)(ListMovie)