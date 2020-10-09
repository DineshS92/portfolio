import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
  text-align: center;
  width: 100%;
  height: 80%;
  margin: 7rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-content: center;
  justify-content: center;
  .distance {
    padding: 4rem 2rem;

    p {
      margin: 0;
    }
  }
  @media(max-width: 560px) {
    margin: 2rem 0;
    align-content: center;
    .distance {
      padding: unset;
      padding: 2rem;
    }
  }
`;

const StyledForm = styled.form`
    /* /* height: 100%; */
    padding: 0 2rem;
    textarea, input {
      width: 80%;
      overflow: unset;
      box-sizing: border-box;
    }
    .courses {
      display: none;
    }
`;

export default function Contact() {

  const [form, setForm] = useState({name: '', email: '', message: '', courses: ''});
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(data => fetch('/.netlify/functions/distFromMe', {
                      method: 'POST',
                      body: JSON.stringify({
                        ipAdd: data.ip
                      })
                    })
                      .then(city => city.json())
                      .then(cityJson => console.log(cityJson)))
  }, []);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const sendToSanity = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/.netlify/functions/sendData', {
        method: 'POST',
        body: JSON.stringify({
          _type: 'form',
          name: form.name,
          email: form.email,
          message: form.message,
          courses: form.courses
        })
      });
      const data = await res.json();
      setMessage(data.message);
      if(data.message === 'Thanks for getting in touch. We will talk soon') {
        setSubmit(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <>
      {
        submit === false
        ? (
          <StyledContact>
            <div className='distance'>
              <p>Some Very Motivating Text Goes Here</p>
            </div>
            <StyledForm onSubmit={sendToSanity}>
              <div> 
                <input type='text' placeholder='Name' name='name' onChange={handleChange}/>
              </div>
              <div>
                <input type='email' placeholder='Email' name='email' onChange={handleChange}/>
              </div>
              <div>
                <textarea name='message' placeholder='message' onChange={handleChange} />
              </div>
              <input className='courses' type='courses' name='courses' onChange={handleChange}/>
              <button type='submit'>Send Message</button>
              <p>{message}</p>
            </StyledForm>
          </StyledContact>
        )
        : <p>{message}</p>
      }
    </>
  );
}