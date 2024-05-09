import React from 'react'
//import { Link } from 'react-router-dom';

export default function InstagramFeedCard({data}) {
  return (
    <div className='instafeed-card' key={data.id}>
      {/* <Link className="instafeed-link" to={data.permalink}> */}
          <img className="instafeed-img" src={data.media_url} />
      {/* </Link> */}
    </div>
  )
}