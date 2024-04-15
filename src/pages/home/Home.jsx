import "./../../styles/main/main.css";
import { Link } from "react-router-dom";
import SmallMediumBox from "../../components/hero/SmallMediumRow";
import LeftTitle from "../../components/titles/LeftTitle";
import BlogExcerpt from "../../components/hero/LeftExcerpt";
import Box from "../../components/hero/Box";

// import { GiBookshelf } from 'react-icons/Gi';
// import { PiHandHeartBold } from 'react-icons/Pi';
// import { HiOutlineUserGroup } from 'react-icons/Hi';
import LeftEvent from "../../components/hero/LeftEvent";
import TopBlog from "../../components/hero/TopBlog";
import Countup from "../../components/countup/Countup";
import RightHero from '../../components/hero/RightHero';
import LeftHero from "../../components/hero/LeftHero";
import QuoteHero from "../../components/hero/QuoteHero";
import SmallMediumRow from "../../components/hero/SmallMediumRow";
import CenterTitle from "../../components/titles/CenterTitle";
import MultiBoxHero from "../../components/hero/MultiBoxHero";
import Banner from './../../components/hero/Banner'
//import { bannerImg } from './../../assets/pexels-rfstudio-3810788.jpg'
//import Instafeed from './../../components/instafeed/InstaFeed';
import Contact from '../../components/contact/Contact';
import InstagramFeeds from "../../components/instagramfeeds/InstagramFeeds";
import YouTubeFeeds from "../../components/youtubefeed/YouTubeFeeds";

const homeTitle = {
  title: "Home",
  desc: "Ready to take the first step towards a happier, more fulfilling life?  Your journey to success starts here!"
}

const homeBanner = {
  //image: "pexels-rfstudio-3820295.jpg",
  image: "pexels-savanna-goldring-5184327.jpg"
}

const changeData = {
  image: "https://place-hold.it/400x300/666/fff/000",
  title: "World change needed",
  desc: "What each viewer can do/contribute to effect change.",
  btn: "Read more"
}

const quoteData = {
  quote: "Life isn't about waiting for the storm to pass...  It's about learning to dance in the rain.",
  author: "~ Vivian Greene"
}

const aboutData = {
  title: "About",
  desc: "Discover a holistic approach to well-being with expert guidance, transformative practices, and valuable resources."
}

const servicesData = {
  title: "Services",
  desc: "Our team of coaches are highly trained professionals with years of experience helping individuals like you achieve success."
}

const causesBox = {
  smimage: "https://place-hold.it/250x400/666/fff/000",
  medimage: "https://place-hold.it/350x400/666/fff/000",
  title: "Lorem ipsum dolor sit",
  desc: "Lorem ipsum dolor sit amet, consect adipiscing elit",
  btn: "Read more"
}

const impactTitle = {
  title: "Personal impact",
  desc: "Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus."
} 

const impactData = [
  {
    // icon: <GiBookshelf className="icons" />,
    title: "Personal Coaching",
    desc: "Our certified personal coaches specialize in helping you identify your strengths and develop a personalized roadmap for success.",
    bkg: "nobkg",
    btn: "START BUILDING"
  },
  {
    // icon: <HiOutlineUserGroup className="icons" />,
    title: "Career Coaching",
    desc: "Whether you're navigating a career transition, seeking to advance in your current job, or exploring new opportunities, our career coaches are here to help.",
    bkg: "nobkg",
    btn: "START EXPLORING"
  },
  {
    // icon: <PiHandHeartBold className="icons" />,
    title: "Wellness Coaching",
    desc: "Our health and wellness coaches work with you to create sustainable habits, set achievable health goals, and overcome obstacles to living your best life. ",
    bkg: "nobkg",
    btn: "START LIVING"
  },  
]

const whoData = {
  image: "pexels-katrin-bolovtsova-7113503.jpg",
  title: "Who we are",
  desc: "At CoachMe, we believe that everyone has the potential to achieve their goals and fulfill their dreams.",
  btn: ""
}

const whatData = {
  image: "pexels-cottonbro-studio-5602461.jpg",
  title: "What we do",
  desc: "Our mission is to empower individuals like you to unlock your full potential, overcome obstacles, and thrive in all aspects of life.",
  btn: ""
}

const unicornData = {
  image: "pexels-pixabay-355863.jpg",
  title: "Our unicorn",
  desc: "Our coaches took up a similar journey and are here to support you every step of the way.",
  btn: ""
}

export default function Home() {
  return (
    <div>
      <div id="home"></div>
      <Banner data={homeBanner} />       

      <QuoteHero data={quoteData} />

      <LeftTitle data={servicesData}/>

      <div id="services"></div>
      <div className="hero multi-box-row">
        {impactData.map(impact =>         
          <MultiBoxHero data={impact} />
        )}
      </div>

      <div id="about"></div>
      <LeftTitle data={aboutData}/>

      <LeftHero data={whoData} />  

      <RightHero data={whatData} />  

      <LeftHero data={unicornData} />    

      {/* <SmallMediumRow data={causesBox} /> */}

      {/* <CenterTitle data={impactTitle}/> */}
      
      {/* <RightTestimonial />   */}

      {/* <Instafeed /> */}

      <InstagramFeeds />

      <YouTubeFeeds />

      <div id="contact"></div>
      <Contact />
    </div>
  );
}
