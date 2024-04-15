import { useState } from 'react';
import SubscribeInput from './SubscribeInput';
import { useNavigate } from 'react-router-dom';
//import axiosInstance from './../../../config';
import inputData from './api/inputData';
import './../../styles/main/main.css'; 

import './css/subscriber.css';

export default function GoogleSubscribeForm({ onValidated }) {
  const [apiData, setApiData] = useState(inputData);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formResponses, setFormResponses] = useState({
    website: '',
    fname: '',
    email: '', 
  });

  const { website, fname, email } = formResponses;

  const handleChange = (e) => {
    setFormResponses({
      ...formResponses,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (website) {
      setMessage('Something is wrong!') |
        setTimeout(() => {
          navigate('/');
          setMessage('');
        }, '2000');

      setFormResponses({
        website: '',
        fname: '',
        email: '',
      });

      return false;
    }

    try {      
      
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzAkP8DpYgy9-SimIUNeTHCKhgHB51-l5hApVLhK63Xc-QJyadOv-gF8q3zNAPW1n04ZQ/exec'
    const form = document.forms['submit-to-google-sheet']
    
    const res = await fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    console.log("Success!", res)

      setMessage(`${fname}, Welcome to the CoachMe family!`);

      setTimeout(() => {
        navigate('/');
        setMessage('');
      }, '2000');

      setFormResponses({
        website: '',
        fname: '',
        email: '',
      });

      //if sending subscribers to a database
      //return await res.data;
      //console.log({ Subscribers: res.json() });
    } catch (error) {
      setMessage('Please try again.');

      setTimeout(() => {
        setMessage('');
      }, '1000');

      setFormResponses({
        website: '',
        fname: '',
        email: '',
      });

      return error.message;
      //console.log(error.message);
    }
  };

  return (
    <section className="subscriber-section">
      <div className="subscriber-above-div">
        <form
          className="subscriber-above-div-form"
          //name="subscriber"
          //id="subscriber"
          name="submit-to-google-sheet"
          id="submit-to-google-sheet"
          onSubmit={handleSubmit}
        >

          <span className="form-error-msg message">{message}</span>

          <fieldset>
            <legend tabIndex="0">
              <h2>Subscribe!</h2>
            </legend>

            {apiData.map((input, index) => (
              <SubscribeInput
                {...input}
                index={index}
                value={formResponses[input.name]} //gets the value of fname
                handleChange={handleChange}
              />
            ))}
          </fieldset>

          <button
            type="submit"
            name="formsubmit"
            id="formsubmit"
            value="submit"
            className="formBtn"
          >
            Submit
          </button>
        </form>
        <br />
      </div>
    </section>
  );
}
