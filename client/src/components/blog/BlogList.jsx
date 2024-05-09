import React, { useEffect } from 'react';
import BlogExcerpt from './BlogExcerpt'
// import { useSelector, useDispatch } from 'react-redux';
// import { getPostsAsync } from '../../store/post.actions';
//import { changed } from './../../store/postSlice';

import './../../styles/main/main.css'

export default function BlogList({data}) {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getPostsAsync()) 
  // }, [dispatch])

  // //const postItems = useSelector(state => state.post.items)
  // const {items, loading, error} = useSelector(state => state.posts)
  // //console.log(items)
  // if (error) return error 
  // if (loading) return 'Loading...'

  return (
      <section className="list-section">
        <div className="list-div">
          {data.map(post => 
            <BlogExcerpt post={post} />
          )}        
        </div>
      </section>
  )
}