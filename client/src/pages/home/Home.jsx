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
//import data from "../../data/data.json";
import { Helmet } from "react-helmet";
import LeftImageHero from "../../components/hero/LeftImageHero";
import RightImageHero from "../../components/hero/RightImageHero";
import Parallel from "../../components/hero/Parallel";
import { FaUserGroup, FaRegClock, FaPeopleGroup } from "react-icons/fa6";
import Statistics from "../../components/hero/Statistics";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [selected, setSelected] = useState("");
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();

    setSelected(e.target.id);
    console.log(selected);

    setOpenForm(!openForm);
  };

  useEffect(() => {
    const url = import.meta.env.VITE_STRAPI_URL;  //using Strapi

    const fetchData = async () => {
      try {
        const res = await fetch(url || `/api/results`);  //using Strapi

        //Testing: Serving Rest API on Proxy Server - same BE port 4000 (via 5173)
        //const res = await fetch(`/api/results`); //Working! you need to go to /api and npm start
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

  const statistics = [
    {
      id: "1",
      icon: <FaUserGroup className="icons" />,
      title: "Clients",
      start: "0",
      end: "485",
    },
    {
      id: "2",
      icon: <FaRegClock className="icons" />,
      title: "Client Hours",
      start: "0",
      end: "2873",
    },
    {
      id: "3",
      icon: <FaPeopleGroup className="icons" />,
      title: "Followers",
      start: "0",
      end: "43948",
    },
  ];  

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
            <Banner data={apiData.banner} />

            <QuoteHero data={apiData.quote} />

            <LeftTitle data={apiData.services.title} />

            <div id="services"></div>

            <LeftImageHero
              data={apiData.services.card[0]}
              quote={apiData.services.quote[0]}
              setOpenForm={setOpenForm}
              openForm={openForm}
              setSelected={setSelected}
            />

            <RightImageHero
              data={apiData.services.card[1]}
              quote={apiData.services.quote[1]}
              setOpenForm={setOpenForm}
              openForm={openForm}
              setSelected={setSelected}
            />

            <LeftImageHero
              data={apiData.services.card[2]}
              quote={apiData.services.quote[2]}
              setOpenForm={setOpenForm}
              openForm={openForm}
              setSelected={setSelected}
            />

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

            <Parallel data={apiData.about.card[0]} />

            <Parallel data={apiData.about.card[1]} />

            <Parallel data={apiData.about.card[2]} />

            {/* <LeftHero data={apiData.about.card[0]} />

            <RightHero data={apiData.about.card[1]} />

            <LeftHero data={apiData.about.card[2]} /> */}

            <section className="hero multi-box-row countup darkbkg">
              {statistics.map((stats) => (
                <Statistics data={stats} />
              ))}
            </section>            

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
