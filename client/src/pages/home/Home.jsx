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
import LeftImageHero from "../../components/hero/LeftImageHero";
import RightImageHero from "../../components/hero/RightImageHero";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [selected, setSelected] = useState("");
  const [apiData, setApiData] = useState();

  const [loading, setLoading] = useState(true);

  // const serviceData = [
  //   {
  //     "title": "Personal Coaching",
  //     "desc": "Our certified personal coaches specialize in helping you identify your strengths and develop a personalized roadmap for success.",
  //     "url": "pexels-polina-zimmerman-3958412.jpg",
  //     "alt": "photo of a sad women with hands over face and coach hand on her head and shoulder",
  //     "btn": "LEARN MORE",
  //     "link": ""
  //   },
  //   {
  //     "title": "Wellness Coaching",
  //     "desc": "Our wellness coaches work with you to create sustainable habits, set achievable health goals, and overcome obstacles to living your best life.",
  //     "url": "pexels-nappy-936075.jpg",
  //     "alt": "photo of an athletic black woman with black shorts and tank running up stairs",      
  //     "btn": "LEARN MORE",
  //     "link": ""
  //   },
  //   {
  //     "title": "Career Coaching",
  //     "desc": "Whether you're navigating a career transition, seeking to advance in your current job, or exploring new opportunities, our career coaches are here to help.",
  //     "url": "pexels-cottonbro-4065158.jpg",
  //     "alt": "photo of a young white male with tablet providing guidance to a young white woman using a laptop",      
  //     "btn": "LEARN MORE",
  //     "link": ""
  //   }            
  // ]

  const handleClick = (e) => {
    e.preventDefault();

    setSelected(e.target.id);
    console.log(selected);

    setOpenForm(!openForm);
  };


  useEffect(() => {
    //const url = import.meta.env.VITE_STRAPI_URL;  //using Strapi

    const url = "http://localhost:1337/api/result?populate=deep";
    //const url="https://coachme-api.techtaleyportfolio.com/api/result?populate=deep"

    const fetchData = async () => {
      try {

        const res = await fetch(url);  //using Strapi

        //Testing: Serving Rest API on Proxy Server - same BE port 4000 (via 5173)
        //const res = await fetch(`/api/results`);    //Working!
        const results = await res.json();
        setLoading(false);

        setApiData(results.data.attributes);

        console.log(apiData.banner);
      } catch (err) {
        console.log(err.response);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
          <Helmet>
            <meta name="description" content="website templates" />
            <meta name="author" content="expansive designs" />
            <meta name="keywords" content="website template" />
            <meta name="robots" content="noimageindex" />

            <title>coachme template</title>
          </Helmet>
          <main>
            <div id="home"></div>
            <Banner data={apiData.banner[0]} />

            <QuoteHero data={apiData.quote} />

            <LeftTitle data={apiData.services.title} />

            <div id="services"></div>

            <LeftImageHero data={apiData.services.card[0]} />

            <RightImageHero data={apiData.services.card[1]} />

            <LeftImageHero data={apiData.services.card[2]} />

            {/* <div className="hero multi-box-row">
              {apiData.services.card.map((service) => (
                <MultiBoxHero
                  data={service}
                  openForm={openForm}
                  setOpenForm={setOpenForm}
                  setSelected={setSelected}
                />
              ))}
            </div> */}

            <div className={`modal-content ${openForm ? "show" : "hide"}`}>
              <GoogleForm setOpenForm={setOpenForm} selected={selected} />
            </div>

            <div id="about"></div>
            <LeftTitle data={apiData.about.title} />

            <LeftHero data={apiData.about.card[0]} />

            <RightHero data={apiData.about.card[1]} />

            <LeftHero data={apiData.about.card[2]} />

            <InstagramFeeds />

            <YouTubeFeeds />

            <div id="contact"></div>
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}
