import { useState, useEffect } from "react";
import ContactInput from "./ContactInput";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./../../../config";
import { Helmet } from "react-helmet";
import inputData from "./inputData.json";

import "./../../styles/main/main.css";
import "./css/contact.scss";
import Box from "../../components/hero/Box";

import { BsTelephoneInbound } from 'react-icons/Bs';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineBusiness } from "react-icons/md";
import LeftTitle from "../titles/LeftTitle";

const contactData = [
  // {
  //   title: "Constact form",
  //   desc: "Contact us today to schedule your complimentary consultation and discover how CoachMe can help you unlock your full potential and live your best life."
  // },
  //"card" [   
    {
      id: 1,
      icon: <BsTelephoneInbound className="icon"/>,
      title: "Phone",
      para: "737-984-2743",
    },
    {
      id: 2,
      icon: <MdOutlineEmail className="icon"/>,
      title: "Email",
      para: "yourhealth@email.com",
    },
    {
      id: 3,
      icon: <MdOutlineBusiness className="icon"/>,
      title: "Address",
      para: "23 27th Street, New York City 21208",
    }    
  //]
]

export default function Contact() {
  const navigate = useNavigate();
  const [inputApi, setInputApi] = useState(inputData);
  const [message, setMessage] = useState("");
  const [formResponses, setFormResponses] = useState({
    website: "",
    fullname: "",
    // fname: "",
    // lname: "",
    cname: "",
    // cellnumber: "",
    email: "",
    services: "",
    features: [],
  });

  const {
    website,
    fullname,
    // fname,
    // lname,
    cname,
    // cellnumber,
    email,
    services,
    features,
  } = formResponses;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormResponses({
      ...formResponses,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (website) {
      setMessage("Something is wrong...");
      navigate("/");
      return false;

      setFormResponses({
        website: "",
        fullname: "",
        // fname: "",
        // lname: "",
        cname: "",
        // cellnumber: "",
        email: "",
      });
    }

    try {
      const res = await axiosInstance.post("/contact", {
        //2. BE connects to api & sends form responses
        fullname,
        // fname,
        // lname,
        cname,
        //cellnumber,
        email,
      });

      setMessage(`${fullname}, your request was successfully submitted.`);

      setTimeout(() => {
        navigate("/");
      }, 2000);

      return await res.data;
      //console.log({ Requests: res.json() });
    } catch (error) {
      setMessage("Please try again.");
      return error.message;

      setFormResponses({
        website: "",
        fullname: "",
        // fname: "",
        // lname: "",
        cname: "",
        //cellnumber: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section>
      {/* <LeftTitle data={contactData} /> */}
      <h2 className="center darkfont">Contact Form</h2>

      <div className="hero left-hero">
        {/* <Helmet>
        <meta name="description" content="" />
        <meta name="author" content="Expansive Designs" />
        <meta
          name="keywords"
          content="Submit a request for to start working with Expansive Designs"
        />
        <link rel="canonical" href="https://expansivedesigns.com/request" />

        <title>Request | Website request form - Expansive Designs</title>
      </Helmet> */}

        {/* <img
          className="hero-img"
          src="https://place-hold.it/500x500/666/fff/000?text=Google Map"
        /> */}

        <div className="googlemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.944068093808!2d-73.85479771610443!3d40.719247763424846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e23c2af73c5%3A0xa674d16f0ab9faec!2sForest%20Hills%20Stadium!5e0!3m2!1sen!2sus!4v1699669843438!5m2!1sen!2sus"
            width="400"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* 
        <div className="column-div-left">
        <p>Right hero</p>
        <h2>Ultricies tristique nulla aliquet enim tortor at auctor urna. </h2>
        <Link className="bold">Read more</Link>
        </div> 
      */}

        <div className="contact-form center nobkg">
          {/* <section className="request-section" > */}
          <div className="request-above-div">
            <h1 className="request-above-div-title">
              Contact Information
            </h1>
            

            <form
              className="request-above-div-form"
              name="request"
              id="registration"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="left-form">
                <fieldset>
                  {/* 
                  <legend>
                    <h2>Contact Information</h2>
                  </legend> 
                */}

                  {inputApi.data.map((e, index) => (
                    <ContactInput
                      e={e}
                      index={index}
                      value={formResponses[e.fullname]} //gets the value that was saved to name on form submit
                      handleChange={handleChange}
                    />
                  ))}
                </fieldset>

                <button
                  type="submit"
                  name="formsubmit"
                  id="formsubmit"
                  value="submit"
                  accessKey="n"
                  tabIndex="19"
                  className="formBtn contactbtn" 
                >
                  Submit
                </button>

                {/* <p className="message">{message}</p>  */}
                <span className="form-error-msg message">{message}</span>
              </div>
            </form>
          </div>
        </div>        
      </div>

      <div className="hero multi-box-row">
        {contactData.map(item =>
          <Box data={item} />
        )}
      </div>
    </section>
  );
}
