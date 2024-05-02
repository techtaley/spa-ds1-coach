import React, { useEffect, useState } from "react";
import "./../../styles/main/main.css";
import { Link } from "react-router-dom";
import SmallMediumBox from "../../components/hero/SmallMediumRow";
import LeftTitle from "../../components/titles/LeftTitle";
import BlogExcerpt from "../../components/hero/LeftExcerpt";
import Box from "../../components/hero/Box";
import GoogleForm from "../../components/form/GoogleForm";
import LeftEvent from "../../components/hero/LeftEvent";
import TopBlog from "../../components/hero/TopBlog";
import Countup from "../../components/countup/Countup";
import RightHero from "../../components/hero/RightHero";
import LeftHero from "../../components/hero/LeftHero";
import QuoteHero from "../../components/hero/QuoteHero";
import SmallMediumRow from "../../components/hero/SmallMediumRow";
import CenterTitle from "../../components/titles/CenterTitle";
import MultiBoxHero from "../../components/hero/MultiBoxHero";
import Banner from "./../../components/hero/Banner";
import Contact from "../../components/contact/Contact";
import InstagramFeeds from "../../components/instagramfeeds/InstagramFeeds";
import YouTubeFeeds from "../../components/youtubefeed/YouTubeFeeds";
import data from "../../data/data.json";
import { Helmet } from "react-helmet";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [selected, setSelected] = useState("");
  const [apiData, setApiData] = useState();
  //const [bannerData, setBannerData] = useState();
  
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setSelected(e.target.id);
    console.log(selected);

    setOpenForm(!openForm);
  };


  useEffect(() => {
    const url=import.meta.env.VITE_STRAPI_URL;

    const fetchData = async() => {
      try {
        setLoading(true);

        const res = await fetch(url);      
        const results = await res.json() 
        setLoading(false);

        setApiData(results.data.attributes);

        console.log(apiData)

      } catch(err) {
        console.log(err.response)
        //setLoading(false);
      }
    }

    fetchData()
  }, []);



  return (
    <>
    {loading ? "loading" : 
      <div>           
          <Helmet>    
            <meta name="description" content={apiData.meta.desc}  />
            <meta name="author" content="" />
            <meta name="keywords" content={apiData.meta.keywords}  />              
            <link rel="canonical" href="https://expansivedesigns.com" />

            <title>{apiData.meta.title}</title>
          </Helmet>   
     

    <main>
      <div id="home"></div>
       <Banner data={apiData.banner} />

      <QuoteHero data={apiData.quote} />

      <LeftTitle data={apiData.services.title.title} />

      <div id="services"></div>
      <div className="hero multi-box-row">
        {apiData.services.card.map((service) => (
          <MultiBoxHero
            data={service}
            openForm={openForm}
            setOpenForm={setOpenForm}
            setSelected={setSelected}
          />
        ))}
      </div> 
            
      <div className={`modal-content ${openForm ? "show" : "hide"}`}>
        <GoogleForm setOpenForm={setOpenForm} selected={selected} />
      </div>

      <div id="about"></div>
      <LeftTitle data={apiData.about.title.title} />

      <LeftHero data={apiData.about.card[0]} />

      <RightHero data={apiData.about.card[1]} />

      <LeftHero data={apiData.about.card[2]} />

      <InstagramFeeds />

      <YouTubeFeeds />

      <div id="contact"></div>
      <Contact />       
      
    </main>
      </div>  
  
    }
    </>    
  );
}
