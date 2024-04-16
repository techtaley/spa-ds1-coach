import React from "react";
import { useState, useEffect } from "react";
import YouTubeFeedCard from './YouTubeFeedCard';
import Slider from 'react-slick';


const temporaryData = [
  {
    id: 0,
    title: "9 Exercises to Transform your Violin Technique",
    video: "https://www.youtube.com/embed/6yi08rFZYc4?si=YPqjsXam54UlMRYk",
    permalink: ""
  },
  {
    id: 1,
    title: "What are the Benefits of Yoga?",
    video: "https://www.youtube.com/embed/CU3HuPNsyG4?si=h1w4fzvMTqbNbUjJ",
    permalink: ""
  },
  {
    id: 2,
    title: "Beginner's Guide to Learning the Cello | Cello 101 | Thomann",
    video: "https://www.youtube.com/embed/MDYGUZTu2x0?si=nwKpOF6JGYEhos6C",
    permalink: ""
  },
  {
    id: 3,
    title: "The 5 Life-Changing Stages Of Spiritual Awakening | Which One Are You In?",
    video: "https://www.youtube.com/embed/MOcIUTEB6h0?si=mm8OuyvwSV6-nNl5",
    permalink: ""
  },
  {
    id: 4,
    title: "How To Run Properly | Running Technique Explained",
    video: "https://www.youtube.com/embed/_kGESn8ArrU?si=-KmRnFOWcX1A0Yh7",
    permalink: ""
  },
  {
    id: 5,
    title: "Sass with CSS (@include, @mixin, nesting) - React Redux Tutorial to build CRUD App 2023 - Part 2",
    video: "https://www.youtube.com/embed/zEfGkdNul_w?si=Wx1okO5-KOhQqLVk",
    permalink: ""
  }  
]

export default function YouTubeFeeds() {
  const [posts, setPosts] = useState(temporaryData);

  const settings = {
    dots: true,
    lazyLoad: true,
    //speed: 3000,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 926,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCyC8Z-I5gAW1jkccXCLXgqQ&maxResults=6&order=date&key=ACCESS_TOKEN_KEY`

  //   useEffect(() => {
  //     const fetchData = async() => {
  //       try {
  //         const data = await fetch(url);
  //         const feed = await data.json();

  //         //console.log(feed.items) - KEEP THIS HIDDEN TO PRVENT HITTING THE API QUOTA LIMIT
  //         setPosts(feed.items)
  //         console.log(posts)  //post.ChannelTitle, post.title, post.thumbnails.medium

  //       } catch(error) {
  //         console.log(error.message);
  //       }
  //     }

  //     fetchData();
  //   }, [])

  return (
    <div className="youtubefeed-div">
        <div className="youtubefeed-title">
          <h2 className="youtubefeed-center">@CoachMe</h2>
          <span>watch us on YouTube</span>
        </div>

          <Slider {...settings} className="youtubefeed-slider">
          {/* <div className="youtubefeed-slider"> */}
            {posts?.map((post) => (
              <YouTubeFeedCard data={post} />
            ))}
            {/* </div> */}
          </Slider>
      {/* <h2 className="center">{posts.snippet.channelTitle}</h2> */}
      {/* <div className="youtubefeed-div">
        {posts?.map(
            (post) => (
              <YouTubeFeedCard data={post} />
            )
        )}
        </div> 
        */}
    </div>
  );
}