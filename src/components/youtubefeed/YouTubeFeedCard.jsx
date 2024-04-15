import React from 'react'
import { Link } from 'react-router-dom';

//post.snippet.ChannelTitle, post.snippet.title, post.snippet.thumbnails.default/medium/high
export default function YouTubeFeedCard({data}) {
  return (
    <div className='youtubefeed-card'>
      <iframe 
        width="360" 
        height="200" 
        src={data.video} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>        
      </iframe>
    
      {/* // <div className='youtubefeed-card' key={data.id.videoId}>
           {/* <Link className="youtubefeed-link" to={}> */}
               {/* <img className="youtubefeed-img" src={data.snippet.thumbnails.medium.url} /> */}
           {/* </Link>
         <h3>{data.snippet.title}</h3>
     </div>  
     */}
     
    </div>
  )
}