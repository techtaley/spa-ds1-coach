import React, { useState, useRef } from 'react';
//import emailjs from '@emailjs/browser';

import { useNavigate } from "react-router-dom";

import "./../../styles/main/main.css";
import "./css/contact.scss";
import Box from "../hero/Box";

import { MdPhone, MdOutlineEmail, MdOutlineBusiness } from "react-icons/md";

const contactData = [ 
    {
      id: 1,
      icon: <MdPhone className="icon"/>,
      title: "Phone",
      desc: "737-984-2743",
    },
    {
      id: 2,
      icon: <MdOutlineEmail className="icon"/>,
      title: "Email",
      desc: "yourhealth@email.com",
    },
    {
      id: 3,
      icon: <MdOutlineBusiness className="icon"/>,
      title: "Address",
      desc: "23 27th Street, New York City 21208",
    }    
]

export default function Contact({box}){
  const navigate = useNavigate();

    const [ name, getName ] = useState('');   
    const [ email, getEmail ] = useState('');    
    const [ message, getMessage ] = useState('');
    const [ sendMessage, setSendMessage ] = useState('');
	  const [ website, getWebsite] = useState('');
	  const [ confirm, setConfirm ] = useState(false);
    const [ redirect, setRedirect ] = useState(false); 
	  const [ error, setError ] = useState(false); 
    const [ focused, setFocused ] = useState(false);

    const handleFocus = e => {
      setFocused(true)
    }

	  //const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
        getName('');    
        getEmail('');    
        getMessage('');

		//error handling
    if (website) {
			setSendMessage('Something is wrong...');
			setError(true);
			setConfirm(false);

			getName('');    
			getEmail('');    
			getMessage('');
		}	

    //otherwise, if all is good send data to emailjs/browser
    try {
      setError(false);
      setConfirm(true);

      setSendMessage(`${name}, your request was successfully submitted.`);

		// const serviceId = '';
		// const templateId = '';
		// const publicKey = '';

		// const templateParams = {
		// 	recipient_name: name,
		// 	recipient_email: email,
		// 	sender_name: 'CoachMe',
		// 	message: message,
		// }

		// emailjs.send(serviceId, templateId, templateParams, publicKey)
		// .then(response => {
		// 	console.log('SUCCESS!', response.status, response.text);
		// 	getName('');    
		// 	getEmail('');    
		// 	getMessage('');
		// 	//resetState() 
		// })
		// .catch(error => {
		// 	setError(true);
		// 	console.log('FAILED...', error.text);
		// })			
		
  		//e.target.reset();
      setTimeout(() => {
        navigate("/");
        setSendMessage('');
      }, 2000);
      
    } catch (error) {
      getMessage("Please try again.");

      setTimeout(() => {
        navigate("/");
        setSendMessage('');
      }, 2000);

      return error.message;
    }
  };
	
	return (
    <section>
      <h2 className="center darkfont">Contact Form</h2>

      <div className="hero left-hero">
        
        {/* <Helmet>
        <meta name="description" content="" />
        <meta name="author" content="CoachMe" />
        <meta
          name="keywords"
          content="Submit a request to start working with CoachMe"
        />
        <link rel="canonical" href="https://spa-ds1-coachme.com" />

        <title>Contact | Contact form - CoachMe</title>
        </Helmet>  */}
       

        <div className="googlemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.944068093808!2d-73.85479771610443!3d40.719247763424846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e23c2af73c5%3A0xa674d16f0ab9faec!2sForest%20Hills%20Stadium!5e0!3m2!1sen!2sus!4v1699669843438!5m2!1sen!2sus"
            width="400"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form center nobkg">
          {/* <section className="request-section" > */}
          <div className="request-above-div">
            <h1 className="request-above-div-title">
              Contact Information
            </h1>

				<form className="request-above-div-form"
          //ref={form}
          name="request"
          id="registration"
          method="post"          
          onSubmit={sendEmail}
				>
        <div className="left-form">

					<input className="form-input no-show"
						type="text"
						name="website"
						maxlength="30"
            placeholder="enter text"
						onChange={e => {
							getWebsite(e.target.value)
						}} 
            //pattern="[^s]*"                      
						value={website}
					/>

          <input className="form-input"
						type="text"
						name="name"
						placeholder="Full name"
						maxlength="30"
            //pattern="^[A-Za-z]{5,30}$"
            required="true"
            // errorMsg="full name should be 5-30 characters that do not include special characters!"
						onChange={e => {
							getName(e.target.value)
						}}                        
						value={name}
					/>
											
          <input className="form-input"
						type="text"
						name="email"
						placeholder="youremail@email.com"
						maxlength="40"
            required="true"
            maxLength="90"
            //pattern="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$"
            // errorMsg="Please use the correct email@email.com format."
						onChange={e => {
							getEmail(e.target.value)
						}}                        
						value={email}
					/>	

          <input className="form-input"
						type="text"
						name="message"
						placeholder="Message"
						maxlength="40"
            //pattern="^[A-Za-z]{0,200}$"
            required="false"
						onChange={e => {
							getMessage(e.target.value)
						}}                        
						value={message}
					/>

					<input
						className='formBtn'
						type="submit"
						value="Send"
					/>		

					{confirm && <span> {sendMessage}</span>}					
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
	)
}	