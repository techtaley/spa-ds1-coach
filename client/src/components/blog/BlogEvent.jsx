import React from 'react'
import TopBlog from '../hero/TopBlog';
import LeftEvent from '../hero/LeftEvent';
import './../../styles/main/main.css'
import CenterTitle from '../titles/CenterTitle';

const eventData = [
    {
      id: "1",
      month: "Dec",
      day: "10",
      time: "10:30pm - 2:30px",
      title: "Event 1 title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      btn: "Details"
    },
    {
      id: "2",
      month: "Mar",
      day: "21",
      time: "2:30pm - 5:30px",
      title: "Event 2 title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      btn: "Details"      
    },   
    {
      id: "3",
      month: "Jun",
      day: "12",
      time: "1:30pm - 5:30px",
      title: "Event 3 title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      btn: "Details"      
    }, 
    {
      id: "4",
      month: "Aug",
      day: "19",
      time: "10:30pm - 2:30px",
      title: "Event 4 title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      btn: "Details"      
    },     
  ]

  const blogData = [
    {
      image: "https://place-hold.it/200x150/666/fff/000",
      title: "Blog 1 title",
      excerpt: "What each viewer can do to effect change. ",
      cat: "category1",
      author: "Tech Tailey",
      btn: "Full story"
    },
    {
      image: "https://place-hold.it/200x150/666/fff/000",
      title: "Blog 2 title",
      excerpt: "How each viewer can effect change. ",    
      cat: "category2",
      author: "Tech Tailey",
      btn: "Full story"
    },
    {
      image: "https://place-hold.it/200x150/666/fff/000",
      title: "Blog 3 title",
      excerpt: "When each viewer can effect change. ",    
      cat: "category3",
      author: "Tech Tailey",
      btn: "Full story"
    },
    {
      image: "https://place-hold.it/200x150/666/fff/000",
      title: "Blog 4 title",
      excerpt: "Where each viewer can effect change. ",    
      cat: "category4",
      author: "Tech Tailey",
      btn: "Full story"
    }
  ]  

  const blogTitle = {
    title: "Blogs/Events",
    desc: "Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus."
  }

export default function BlogEvent() {
  return (
    <>
        <CenterTitle data={blogTitle}/>
        
        <div className="hero left-hero">
            <div>
              <h3 className="center marginbtm30">Recent blogs</h3>

              <div className="wrap">
                  {blogData.map(blog =>
                    <TopBlog data={blog} />                   
                  )}
              </div>
            </div>

            <div>
            <h3 className="center marginbtm30">Upcoming event</h3>
              {eventData.map(event => 
                <LeftEvent data={event} />          
              )}
            </div>
        </div>
    </>
)
}
