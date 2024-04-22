import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import axiosInstance from './../../../config';
import inputData from './InputData';
import FormInput from './FormInput';
import './../../styles/main/main.css'; 

export default function GoogleCoachingForm({ onValidated, setOpenForm, selected}) {
  const [apiData, setApiData] = useState(inputData);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formResponses, setFormResponses] = useState({
    website: '',
    name: '',
    email: '', 
    phone: '',
    desc: '',
    service: '',
  });

  const { website, name, email, phone, desc, service } = formResponses;

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
        name: '',
        email: '', 
        phone: '',
        desc: '',
        service: '',
      });

      return false;
    }

    try {      
      
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyPtrhfJn-w6blvhS-puk3Mt-uuAPP7T41ogSqxC5v5OhLTpqU6IlXCzMUN0yXpc4Dtng/exec';
    
    const form = document.forms['coaching-services'];
    
    const res = await fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    console.log("Success!", res)

      setMessage(`${name}, We look forward to partnering with you!`);

      setTimeout(() => {
        navigate('/');
        setMessage('');
      }, '2000');

      setFormResponses({
        website: '',
        name: '',
        email: '', 
        phone: '',
        desc: '',
        service: '',
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
        name: '',
        email: '', 
        phone: '',
        desc: '',
        service: '',
      });

      return error.message;
    }
  };

  return (
    <section className="subscriber-section">
      <span className="close-btn" onClick={e => setOpenForm(false)}>&times;</span>

      <div className="subscriber-above-div">
        <form
          className="subscriber-above-div-form"
          name="coaching-services"
          id="coaching-services"
          onSubmit={handleSubmit}
        >

          <span className="form-error-msg message">{message}</span>

          <fieldset>
            <legend tabIndex="0">
              <h2>{selected}</h2>
            </legend>

            {apiData.map((input, index) => (
              <FormInput
                {...input}
                index={index}
                value={input.name === "service" ? selected : formResponses[input.name]}  //gets the "value" entered into field by name
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
