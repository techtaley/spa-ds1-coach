import React from 'react'
import { Link } from "react-router-dom";
import "./../../styles/main/main.css";

import { HiUserGroup } from "react-icons/Hi";
import { FaHandsHelping } from "react-icons/Fa";
import { GiGears } from "react-icons/Gi";

//social media
import { FaFacebookF } from "react-icons/Fa";
import { FaInstagram } from "react-icons/Fa";
import { FaLinkedinIn } from "react-icons/Fa";
import { FaTwitter } from "react-icons/Fa";

import CenterTitle from "../../components/titles/CenterTitle";
import TeamBox from "../../components/hero/TeamBox";
import TopBlog from "../../components/hero/TopBlog";
import LeftTitle from "../../components/titles/LeftTitle";
import Banner from "../../components/hero/Banner";
import RightHero from "../../components/hero/RightHero";
//import BlogEvent from "../../components/blog/BlogEvent";
import MultiColumnHero from "../../components/hero/MultiColumnHero";

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

const aboutBanner = {
  image: "https://place-hold.it/800x250/666/fff/000"
}

const aboutTitle = {
  title: "About us",
  desc: "This is a brief description of the about page and what this organization is about."
}

const aboutHero = {
  title: "THE SOLUTION THIS INITIATIVE OFFERS",
  desc: "About Solution tristique nulla aliquet enim tortor at auctor urna.",
  image: "https://place-hold.it/400x300/666/fff/000?text=Graphic laying out solution",
  btn: "Read more"
}

const nfpGoals = {
  title: "Goals of NFP",
  desc: "Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus." 
}

const benefitsMultiBox = [
  {
      title: "Benefit 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btn: "Read more",
      bkg: "",
      icon: <HiUserGroup className="icons" />
  },
  {
      title: "Benefit 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btn: "Read more",
      bkg: "nobkg",
      icon: <GiGears className="icons" />
  },
  {
      title: "Benefit 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btn: "Read more",
      bkg: "",
      icon: <FaHandsHelping className="icons" />
  },
]

const teamTitle = {
  title: "Our Team",
  desc: "Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus."
}

const teamData = [
  {
    image: "https://place-hold.it/200x150/666/fff/000",
    firstname: "Tech Taley",
    title: "Software Engineer",    
    social: [
      <FaFacebookF />,
      <FaInstagram />,
      <FaLinkedinIn />,
      <FaTwitter />
    ],
  },
  {  
    image: "https://place-hold.it/200x150/666/fff/000",
    firstname: "Rihanna Jordan",
    title: "Software Engineer",    
    social: [
      <FaFacebookF />,
      <FaInstagram />,
      <FaLinkedinIn />,
      <FaTwitter />
    ],
  },
  {   
    image: "https://place-hold.it/200x150/666/fff/000",
    firstname: "Aaliyah Kevens",
    title: "Social Media Strategist",    
    social: [
      <FaFacebookF />,
      <FaInstagram />,
      <FaLinkedinIn />,
      <FaTwitter />
    ],
  },
  {  
    image: "https://place-hold.it/200x150/666/fff/000",
    firstname: "Trisha Covert",
    title: "Graphic Designer",    
    social: [
      <FaFacebookF />,
      <FaInstagram />,
      <FaLinkedinIn />,
      <FaTwitter />
    ]
  }
]

// const blogTitle = {
//   title: "Blog Title",
//   desc: "This is an optional blog page layout that includes general blog posts."
// }

const storyTitle = {
  title: "Personal Story",
  desc: "Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus."
}

export default function About() {
  return (
    <div className="margin70">

      <LeftTitle data={aboutTitle}/>

      <Banner data={aboutBanner} />

      <RightHero data={aboutHero} />

      <CenterTitle data={nfpGoals} />

      <section>
        <div className="hero multi-box-row margin80">
          {benefitsMultiBox.map(benefit =>       
            <MultiColumnHero data={benefit}/>
          )}
        </div>
      </section>
       
      <section>
        <CenterTitle data={teamTitle} />  

        <div className="margin80">
          {teamData.map(team => 
            <TeamBox data={team}/>
          )}
        </div>
      </section> 

      {/* <section>
        <LeftTitle data={blogTitle} />

        <div className="hero multi-box-row margin80">
          <TopBlog />  

          {blogData.map(blog =>           
            <TopBlog data={blog}/>       
          )}
        </div>
      </section> */}
    </div>
  );
}
