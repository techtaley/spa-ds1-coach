import React, { useEffect } from 'react';
import NewsExcerpt from './NewsExcerpt'
// import { useSelector, useDispatch } from 'react-redux';
// import { getPostsAsync } from './../../store/post.actions';
//import { changed } from './../../store/postSlice';

//import './css/news.css'
import './../../styles/main/main.css'

export default function NewsList({data}) {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getPostsAsync()) 
  // }, [dispatch])

  // const postItems = useSelector(state => state.post.items)
  // // const {items, loading, error} = useSelector(state => state.posts)
  // // console.log(items)
  // // if (error) return error 
  

  return (
    <section className="list-section">
      <div className="list-div">
        {data.map(post =>         
          <NewsExcerpt post={post} />
        )}
      </div>
    </section>
  )
}
