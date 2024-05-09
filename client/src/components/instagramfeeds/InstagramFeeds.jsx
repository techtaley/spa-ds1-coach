import React from "react";
import { useState, useEffect } from "react";
import InstagramFeedCard from "./instagramFeedCard";

const temporaryData = [
  {
    id: 0,
    media_url: "https://images.pexels.com/photos/8191522/pexels-photo-8191522.jpeg?auto=compress&cs=tinysrgb&w=1600",
    permalink: ""
  },
  {
    id: 1,
    media_url: "https://images.pexels.com/photos/2657668/pexels-photo-2657668.jpeg?auto=compress&cs=tinysrgb&w=1600",
    permalink: ""
  },
  {
    id: 2,
    media_url: "https://images.pexels.com/photos/8436580/pexels-photo-8436580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    permalink: ""
  },
  {
    id: 3,
    media_url: "https://images.pexels.com/photos/3435348/pexels-photo-3435348.jpeg?auto=compress&cs=tinysrgb&w=1600",
    permalink: ""
  },
  {
    id: 4,
    media_url: "https://images.pexels.com/photos/10850674/pexels-photo-10850674.jpeg?auto=compress&cs=tinysrgb&w=1600",
    permalink: ""
  },
  {
    id: 5,
    media_url: "https://images.pexels.com/photos/1567730/pexels-photo-1567730.jpeg?auto=compress&cs=tinysrgb&w=1600",
    permalink: ""
  }  
]

export default function InstagramFeeds() {
  const [posts, setPosts] = useState(temporaryData);

  //const url=`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=ACCESS TOKEN HERE`;

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const data = await fetch(url);
  //       const feed = await data.json();
  //       setPosts(feed.data);
  //       //console.log(feed.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <>
        <div className="instagram-title">
          <h2 className="instagram-center">#CoachMe</h2>
          <span>follow us on Instagram</span>
        </div>
        <div className="instafeed-div">
        {posts?.map(
            (post) => (            
              <InstagramFeedCard data={post} />
            )
        )}
        </div>
    </>
  );
}