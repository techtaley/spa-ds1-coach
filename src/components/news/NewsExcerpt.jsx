import React from 'react'
import { Link } from 'react-router-dom';
import './../../styles/main/main.css'

export default function NewsExcerpt({post}) {
  const { id, title, body } = post

  return (    
    <div className="list-card" key={id}>
      <img className="hero-img" src="https://place-hold.it/300x200/666/fff/000" />
      <p className="small-font list-title bold">{title}</p>
      <p className="small-font list-body">{body}</p>     
      <Link className="small-font bold excerptbtn" to={`/posts/detailed-post/${id}`}>Full story</Link>
    </div>
  )
}
