import SolidOutlineCircle400300 from "./../../components/shapes/SolidOutlineCircle400300";
import OutlineSolidCircle600500 from "./../../components/shapes/OutlineSolidCircle600500";

import bootcampImg from "./../../assets/student-849825_640.jpg";
import communityImg from "./../../assets/circle-312343_640.png";
import clubImg from "./../../assets/pexels-rfstudio-3810788.jpg";
import roundImg from "./../../assets/pexels-monstera-production-7412094.jpg";

import "./../../styles/main/main.css";
//import RoundPhoto from '../../components/hero/RoundPhoto';
import Outline from "../../components/shapes/Outline";
import { Link } from "react-router-dom";
import MultiCircleHero from "../../components/hero/MultiCircleHero";
import VideoHero from "../../components/hero/VideoHero";
import LeftHero from "../../components/hero/LeftHero";
//import BlogEvent from "../../components/blog/BlogEvent";
import RightHero from "../../components/hero/RightHero";

const programFrame = {
  title: "Programs",
  desc: "Changing the world through codings"
}

const programBox = [
  {
    title: "Bootcamps",
    desc: "Online YouTube and Summer Bootcamp.",
    image: bootcampImg,
  },
  {
    title: "Community",
    desc: "Supportive communities on Discord and Twitch.",
    image: communityImg,   
  },
  {
    title: "Clubs",
    desc: "High School Clubs and Community Clubs.",
    image: clubImg,    
  },    
]

const outlineData = {
  title: "Bootcamp",
  desc: "Free online bootcamps teaching HTML, CSS, JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS, and Rest APIs."
}

const videoData = {
  title: "Free Online Coding Bootcamp",
  desc: "Beginner Frontend Web Development videos are released in January.",
  link: "https://www.youtube.com/embed/iuIcrHV5sfQ?si=a-Z43wae_GYcQakE?autoplay=1?rel=0"
}

const impactData = {
  title: "impact",
  desc: "Making a difference in lives",
}

const storiesData = {
  image: "https://place-hold.it/400x300/666/fff/000",
  title: "Real Stories",
  desc: "Video that express the personal impact our program has had on the lives of real people.",
  btn: "Read full stories"
}

const initiatvesData = {
  image: "https://place-hold.it/400x300/666/fff/000",
  title: "Current Initiatives",
  desc: "Initiatives that have impacted the lives of people in the community.",
  btn: "Find out more"
}

const growthData = {
  image: "https://place-hold.it/400x300/666/fff/000",
  title: "Steady growth",
  desc: "Chart or globe visualizing the growth as a result of the program.",
  btn: "Learn more"
}


export default function Programs() {
  return (
    <div className="margin70">
      <section>
          <div className="left-center">
              <SolidOutlineCircle400300 data={programFrame} />
          </div>

          {/* map through an array of images */}
          <div className="hero multi-box-row"> 
            {programBox.map(program =>         
              <MultiCircleHero data={program} />
            )}         
          </div>

          <div className="left-hero">
            <div>
              <Outline data={outlineData}/>
            </div>
          </div>
      </section>

      <section>

        <VideoHero data={videoData} />

        <OutlineSolidCircle600500 />

        <LeftHero data={storiesData} />  

        <RightHero data={initiatvesData} />  

        <LeftHero data={growthData} />                
                
      </section>

      {/* <section>
        <BlogEvent />
      </section> */}

      
    </div>
  );
}
