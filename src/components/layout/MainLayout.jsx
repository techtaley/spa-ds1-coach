import React from 'react'
//import Header from '../header/Header'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
//import Countup from '../countup/Countup'
//import BlogEvent from '../blog/BlogEvent'
//import RightTestimonial from '../hero/RightTestimonial'
//import LeftDonateHero from '../hero/LeftDonateHero'
import LeftHero from '../hero/LeftHero'

//import { HiUserGroup } from 'react-icons/Hi';
//import { MdEmojiPeople } from 'react-icons/md';
//import { GiPayMoney } from 'react-icons/Gi';
//import { RegisterModal } from '../registermodal/RegisterModal'

// const countBanner = [
//   {
//       id: "1",
//       icon: <HiUserGroup className="icons" />,
//       title: "Members",
//       start: "0",
//       end: "6577400"
//   },
//   {
//       id: "2",
//       icon: <GiPayMoney className="icons" />,
//       title: "Donations",
//       start: "0",
//       end: "2042300"
//   },
//   {
//       id: "3",
//       icon: <MdEmojiPeople className="icons" />,
//       title: "Volunteers",
//       start: "0",
//       end: "1384073"
//   }        
// ]


// const blogTitle = {
//   title: "Blogs/Events",
//   desc: "Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus."
// }

// const donateData = {
//   image: "https://place-hold.it/400x300/666/fff/000",
//   title: "Donations",
//   desc: "Your donations make it possible create programs, clubs, and build communicites that allow us to start and grow initiaives.",  
//   link: "/donate"
// }

// const testimonialData = {
//   title: "Personal Stories",
//   desc: "Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus.",
//   image: "https://place-hold.it/400x300/666/fff/000?text=Benefactor",
//   quote: "This was the greatest opportuity of a lifetime, and have made an impact in my life and in the community for years to come.",
//   fullname:  "Meet Grace Parchworth",
//   cityyear: "New York City, 2022",
// }

export default function MainLayout({data}) {
  return ( //outlet for all components in App.js
    <div className="layout">

        <Nav />

        {/* <Header /> */}
        <Outlet />
        {/* <RightTestimonial data={testimonialData}/>
        
        <LeftHero data={donateData} /> */}
        {/* <LeftDonateHero /> */}

        {/* <section className="hero multi-box-row countup darkbkg">
          {countBanner.map(stats =>         
            <Countup data={stats}/>
          )}
        </section> */}

        {/* <BlogEvent /> */}
        <Footer />
    </div>
  )
}
