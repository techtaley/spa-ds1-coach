import React, { useState } from "react";
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

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [selected, setSelected] = useState("");
  const [apiData, setApiData] = useState(data);

  const handleClick = (e) => {
    e.preventDefault();

    setSelected(e.target.id);
    console.log(selected);

    setOpenForm(!openForm);
  };

  return (
    <div>
      <div id="home"></div>
      <Banner data={apiData.results.bannerData} />

      <QuoteHero data={apiData.results.quoteData} />

      <LeftTitle data={apiData.results.servicesTitle} />

      <div id="services"></div>
      <div className="hero multi-box-row">
        {apiData.results.servicesData.map((service) => (
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
      <LeftTitle data={apiData.results.aboutData} />

      <LeftHero data={apiData.results.whoData} />

      <RightHero data={apiData.results.whatData} />

      <LeftHero data={apiData.results.unicornData} />

      <InstagramFeeds />

      <YouTubeFeeds />

      <div id="contact"></div>
      <Contact />
    </div>
  );
}
